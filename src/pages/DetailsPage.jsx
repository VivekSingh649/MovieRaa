import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Thumbnail from "../components/Thumbnail";
import { API_KEY, BASE_URL, IMAGE_URL_ORIG } from "../config/constant";
import MovieCard from "../components/MovieCard";
import Cast from "../components/Cast";

function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [], spoken_languages: [] });

  const fetchMovieDetails = async (apiUrl) => {
    try {
      const res = await fetch(apiUrl);
      if (res.status === 200) {
        const data = await res.json();
        setMovie(data);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails(`${BASE_URL}/${id}?${API_KEY}`);
  }, [id]);

  return (
    <div className="container">
      <Thumbnail thumbnail={`${IMAGE_URL_ORIG}${movie.backdrop_path}`} />
      <div className="w-full flex flex-wrap mt-8 lg:mt-16">
        <div className="hidden lg:block lg:w-[40%] lg:pr-4">
          <div
            className="rounded-lg min-h-[100%]"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${IMAGE_URL_ORIG}${movie.poster_path})`,
            }}
          ></div>
        </div>

        <div className="w-full lg:w-[60%] lg:pl-10">
          <span className="py-1 px-3 bg-primary-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2">
            {movie.vote_average}
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-semibold mt-2 mb-1">
            {movie.title}
          </h2>
          <p className="md:text-lg leading-relaxed tracking-wide text-slate-300 mt-4">
            {movie.overview}
          </p>
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/2">
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Genre:
                </p>
                <ul className="text-sm text-slate-500 flex flex-wrap gap-2">
                  {movie.genres.map((genre, index) => (
                    <React.Fragment key={genre.id}>
                      {index > 0 && <span>,&nbsp;</span>}
                      <li className="genre text-sm text-slate-300">
                        {genre.name}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Languages:
                </p>
                <ul className="text-sm text-slate-500 flex flex-wrap gap-2">
                  {movie.spoken_languages.map((language, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span>,&nbsp;</span>}
                      <li className="language text-sm text-slate-300">
                        {language.name}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Status:
                </p>
                <p className="genre text-sm text-slate-300">{movie.status}</p>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Runtime:
                </p>
                <p className="genre text-sm text-slate-300">
                  {movie.runtime} Mins.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Release Date:
                </p>
                <p className="genre text-sm text-slate-300">
                  {new Date(movie.release_date).toLocaleString("en-us", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Popularity:
                </p>
                <p className="genre text-sm text-slate-300">
                  {movie.popularity}
                </p>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Budget:
                </p>
                <p className="genre text-sm text-slate-300">${movie.budget}</p>
              </div>
              <div className="flex mt-4 items-center gap-2">
                <p className="md:text-lg leading-relaxed tracking-wide text-white font-medium">
                  Revenue:
                </p>
                <p className="genre text-sm text-slate-300">${movie.revenue}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">
              Casts
            </h3>
            <Cast movieId={id} />
          </div>
        </div>
      </div>
      <MovieCard
        sectionTitle="Recommendation For You"
        movieId={id}
        queryFor="recommendations"
      />
    </div>
  );
}

export default DetailsPage;
