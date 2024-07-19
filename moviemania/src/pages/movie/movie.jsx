import { faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./movie.css";
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const isFavourite = favouriteMovies.includes(id);
  useEffect(() => {
    const storedFavouriteMovies =
      JSON.parse(localStorage.getItem("favouriteMovies")) || [];
    setFavouriteMovies(storedFavouriteMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const handleClick = () => {
    if (isFavourite) {
      setFavouriteMovies(favouriteMovies.filter((movieId) => movieId !== id));
    } else {
      setFavouriteMovies([...favouriteMovies, id]);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : "https://t4.ftcdn.net/jpg/01/16/88/37/360_F_116883786_wuckft1sNw1ouQfJ6FuquZnxea3qBlxy.jpg"
          }
          alt=""
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <button onClick={handleClick}>
              {!isFavourite ? "Add to Favourites" : "Remove from Favourites"}
            </button>
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name"> {movie.original_title} </div>
            <div className="movie__tagline"> {movie.tagline} </div>
            <div className="movie__rating">
              <span className="movie__voteavg">{movie.vote_average}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="movie__runtime">{movie.runtime} mins</div>
            <div className="movie__releaseDate">
              Release date: {movie.release_date}{" "}
            </div>
            <div className="movie__genres">
              {movie &&
                movie.genres &&
                movie.genres.map((genre) => (
                  <span className="movie__genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div id="text">{movie.overview}</div>
            <div className="movie__links">
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Links
              </div>
              {movie && movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span className="movie__homeButton movie__Button">
                      Homepage <FontAwesomeIcon icon={faLink} />
                    </span>
                  </p>
                </a>
              )}
              {movie && movie.imdb_id && (
                <a
                  href={"https://www.imdb.com/title/" + movie.imdb_id}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p>
                    <span className="movie__imdbButton movie__Button">
                      IMDb <FontAwesomeIcon icon={faLink} />
                    </span>
                  </p>
                </a>
              )}

              <Link
                to={`/movies/${id}/videos`}
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie__videoButton movie__Button">
                    Videos <FontAwesomeIcon icon={faLink} />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="movie__production">
        <div className="movie__heading">Production Companies</div>
        <div className="companies">
          {movie &&
            movie.production_companies &&
            movie.production_companies.map((company) => (
              <div className="movie__productionCompany" key={company.id}>
                <img
                  className="movie__productionLogo"
                  src={
                    company.logo_path
                      ? `https://image.tmdb.org/t/p/original/${company.logo_path}`
                      : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
                  }
                  alt=""
                />
                <div className="movie__productionName">{company.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
