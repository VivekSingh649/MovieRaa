import React, { useEffect, useState } from "react";
import { API_KEY, IMAGE_URL } from "../config/constant";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton.jsx";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [movie, setMovies] = useState([]);

  const getMovies = async (apiUrl) => {
    !query ? setIsloading(false) : setIsloading(true);

    try {
      const res = await fetch(apiUrl);
      if (res.status === 200) {
        const data = await res.json();
        setMovies(data.results);
        setIsloading(false);
      }
    } catch (error) {
      console.log("Search Movies", error);
      setIsloading(false);
    }
  };

  useEffect(() => {
    let storeMovies = setTimeout(() => {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?query=${query}&${API_KEY}`
      );
    }, 500);

    return () => clearTimeout(storeMovies);
  }, [query]);

  const handlClcik = (e) => {
    setMovies([]);
    setQuery("");
  };

  return (
    <div className="w-full">
      <form className="relative ml-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full pl-4 pr-10 py-3 text-white bg-slate-700 outline-none rounded-full placeholder:text-sm placeholder:text-slate-400"
          type="text"
          placeholder="Search Movie or TV show"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute top-[10px] right-4 text-slate-400"
          type="submit"
        >
          <i className="bi bi-search text-x"></i>
        </button>
      </form>
      <div className="absolute overflow-y-auto h-[415px] mt-4 rounded-lg z-50 bg-slate-800">
        <div className="overflow-hidden">
          {isLoading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            movie.map((item, index) => (
              <Link
                className="flex items-center gap-4 p-4 bg-slate-800"
                onClick={handlClcik}
                key={index}
                to={`/movie/${item.id}`}
              >
                <div className="w-20 h-20 overflow-hidden rounded-md">
                  <img
                    className="w-full object-cover"
                    src={`${IMAGE_URL}${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
                <h2 className="text-white text-sm line-clamp-2 w-full">
                  {item.title}
                </h2>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
