import React from "react";
import HeroSlider from "../components/HeroSlider";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroSlider />
        <MovieCard sectionTitle="Now Playing" queryFor="now_playing" />
        <MovieCard sectionTitle="Popular" queryFor="popular" />
        <MovieCard sectionTitle="Horror Movies" category="27" />
        <MovieCard sectionTitle="Actions Movies" category="28" />
        <MovieCard sectionTitle="Adventure Movies" category="12" />
        <MovieCard sectionTitle="Comedy Movies" category="35" />
        <MovieCard sectionTitle="Romance Movies" category="10749" />
      </div>
    </>
  );
}

export default Home;
