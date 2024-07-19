import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [query, setQuery] = React.useState("");
  return (
    <div className="header">
      <div className="headerLeft">
        <NavLink exact to={"/"} activeClassName="active">
          <h1 id="name">MovieMania</h1>
        </NavLink>
        <NavLink to={"/movies/popular"} activeClassName="active">
          <span>Popular</span>
        </NavLink>
        <NavLink to={"/movies/top_rated"} activeClassName="active">
          <span>Top Rated</span>
        </NavLink>
        <NavLink to={"/movies/upcoming"} activeClassName="active">
          <span>Upcoming</span>
        </NavLink>
        <NavLink to={"/movies/now_playing"} activeClassName="active">
          <span>Now Playing</span>
        </NavLink>
        <NavLink to={"/tv"} activeClassName="active">
          <span>TV Shows</span>{" "}
        </NavLink>
        <NavLink to={"/fav"} activeClassName="active">
          <span>Favourites</span>
        </NavLink>
      </div>
      <div className="headerRight">
        <input
          type="text"
          value={query}
          placeholder="Search Here"
          className="searchInput"
          onChange={(e) => setQuery(e.target.value)}
        />
        <NavLink to={`/movies/search/${query}`} onClick={() => setQuery("")}>
          Search
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
