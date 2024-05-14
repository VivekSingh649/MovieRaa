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
      </div>
    </>
  );
}

export default Home;
