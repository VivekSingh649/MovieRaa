import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { API_KEY, BASE_URL, IMAGE_URL_ORIG } from "../config/constant";
import { Pagination } from "swiper/modules";

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showMovies = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCast(data.cast);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    showMovies(`${BASE_URL}/${movieId}/credits?${API_KEY}`);
  }, [movieId]);

  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={3.5}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cast.map((cast, index) => (
          <SwiperSlide key={index}>
            <figure>
              <img
                className="w-full rounded-md"
                src={`${IMAGE_URL_ORIG}${cast.profile_path}`}
                alt=""
              />
              <h4 className="text-center text-white font-medium text-[12px]">
                {cast.original_name}
              </h4>
              <h5 className="text-center text-slate-400 text-[12px]">
                {cast.character}
              </h5>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Cast;
