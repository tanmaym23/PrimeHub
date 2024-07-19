import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import Pagination from "../pagination/Pagination";
import "./movie-list.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { type } = useParams();

  useEffect(() => {
    getDetails();
  }, [type, page]);

  const getDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data.total_pages);
        setMovieList(data.results);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type + " TITLES" : "POPULAR TITLES").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList?.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="pagination">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default MovieList;
