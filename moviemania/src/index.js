import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/movie-list";
import SearchList from "./components/SearchList/search-list";
import TvList from "./components/TvList/tv-list";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import FavouriteMovies from "./pages/favourites/favouriteMovies";
import FavouriteTV from "./pages/favourites/favouriteTV";
import Favourites from "./pages/favourites/favourites";
import Home from "./pages/home/home";
import Movie from "./pages/movie/movie";
import Tv from "./pages/tv/tv";
import Videos from "./pages/videos/videos";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="movies/search/:query" element={<SearchList />} />
        <Route path="movies/:id/videos" element={<Videos />} />
        <Route path="fav" element={<Favourites />} />
        <Route path="fav/favourite/movies" element={<FavouriteMovies />} />
        <Route path="fav/favourite/tv" element={<FavouriteTV />} />
        <Route path="tv/" element={<TvList />} />
        <Route path="tv/:id" element={<Tv />} />
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
