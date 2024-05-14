import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_URL_ORIG } from "../config/constant";

export default function HeroSlider() {
  const [upcoming, setUpComing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showMovies = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();
        setTimeout(() => {
          setUpComing(data.results.slice(0, 7));
          setIsLoading(false);
        }, 500);
      }
    } catch (error) {
      setIsError({ show: true, msg: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showMovies(`${BASE_URL}/upcoming?${API_KEY}`);
    console.log(isLoading);
  }, []);

  function MovieCardSkeleton() {
    return (
      <div className="overflow-hidden relative rounded-xl animate-pulse bg-gray-700">
        <div className="w-full h-[225px] md:h-[500px] bg-gray-700 object-cover object-center rounded-xl"></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-x-0 top-0 p-4 md:p-10 z-10 flex flex-col justify-end h-full">
          <div>
            <div className="w-12 h-6 bg-gray-600 rounded-3xl"></div>

            <div className="w-2/6 h-8 bg-gray-600 mt-2 rounded"></div>
            <div className="w-1/6 h-8 bg-gray-600 mt-2 rounded"></div>

            <div className="w-1/4 h-4 bg-gray-600 mt-4 rounded"></div>

            <div className="absolute md:relative bottom-[-22px] md:bottom-0 right-4 md:right-0 md:flex items-center gap-2 mt-8">
              <div className="inline-flex justify-center items-center w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="w-24 h-4 bg-gray-600 hidden md:block rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-20 lg:mt-0"
      >
        {isLoading ? (
          <>
            <MovieCardSkeleton />
          </>
        ) : (
          upcoming.map((movie, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/movie/${movie.id}`}
                className="overflow-hidden group rounded-xl"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    className="w-full h-[225px] md:h-[500px] object-cover object-center rounded-xl group-hover:scale-105 duration-700"
                    src={`${IMAGE_URL_ORIG}${movie.backdrop_path}`}
                    alt=""
                  />
                  <div className="bg-black/40 absolute inset-0"></div>
                </div>
                <div className="absolute inset-x-0 top-0 p-4 md:p-10 z-10 flex flex-col justify-end h-full">
                  <div>
                    <span className="py-1 px-3 bg-primary-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2">
                      {movie.vote_average}
                    </span>
                    <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight max-w-md mt-2">
                      {movie.title}
                    </h1>
                    <h4 className="text-sm md:text-lg font-medium text-white mt-4">
                      <span>Relase on </span>
                      {new Date(movie.release_date).toLocaleString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h4>
                    <button className="absolute md:relative bottom-[0] md:bottom-0 right-4 md:right-0 md:flex items-center gap-2 mt-8 z-40">
                      <div className="inline-flex justify-center items-center w-12 h-12 text-white bg-primary-600 rounded-full">
                        <i className="bi bi-play-fill text-3xl"></i>
                      </div>
                      <p className="text-white hidden md:block">
                        Watch the trailer
                      </p>
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
