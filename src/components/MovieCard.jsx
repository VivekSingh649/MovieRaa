import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { API_KEY, BASE_URL, IMAGE_URL } from "../config/constant";
import { Pagination } from "swiper/modules";

function MovieCard({ sectionTitle, queryFor, movieId }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showMovies = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();
        setTimeout(() => {
          setMovie(data.results);
          setIsLoading(false);
        }, 500);
      }
    } catch (error) {
      setIsError({ show: true, msg: error.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!movieId) {
      showMovies(`${BASE_URL}/${queryFor}?${API_KEY}`);
    } else {
      showMovies(`${BASE_URL}/${movieId}/${queryFor}?${API_KEY}`);
    }
  }, []);

  const Skeleton = () => {
    return (
      <div className="flex w-full justify-between gap-4">
        <div
          role="status"
          className="max-w-sm border rounded shadow animate-pulse border-gray-700 w-full"
        >
          <div className="flex items-center justify-center h-[330px] mb-4 rounded bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div
          role="status"
          className="max-w-sm border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 w-full"
        >
          <div className="flex items-center justify-center h-[330px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div
          role="status"
          className="max-w-sm border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 w-full"
        >
          <div className="flex items-center justify-center h-[330px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div
          role="status"
          className="max-w-sm border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 w-full"
        >
          <div className="flex items-center justify-center h-[330px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
        <div
          role="status"
          className="max-w-sm border border-gray-200 rounded shadow animate-pulse dark:border-gray-700 w-full"
        >
          <div className="flex items-center justify-center h-[330px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          {sectionTitle}
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              {movie.map((movie, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={`/movie/${movie.id}`}
                    className="flex overflow-hidden group rounded-xl"
                  >
                    <div className="relative">
                      <img
                        src={`${IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="scale-105 group-hover:scale-100 transition ease-out duration-300"
                      />
                      <div className="bg-gradient-to-t from-black absolute inset-0"></div>
                      <div className="absolute flex justify-between flex-col inset-0 p-4">
                        <div className="flex justify-end">
                          <span className="py-1 px-3 bg-primary-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2">
                            {movie.vote_average}
                          </span>
                        </div>
                        <h2 className="text-white font-semibold text-sm md:text-lg transition ease-out duration-400 text-start">
                          {movie.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default MovieCard;
