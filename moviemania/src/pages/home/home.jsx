import React from "react";
import MovieList from "../../components/MovieList/movie-list";
import Slider from "../../components/slider/slider";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Slider />
      <MovieList />
    </div>
  );
};

export default Home;
