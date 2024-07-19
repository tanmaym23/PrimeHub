import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./tv.css";

const Tv = () => {
  const { id } = useParams();
  const [tv, setTv] = useState({});
  const [favouriteTV, setFavouriteTV] = useState([]);
  const isFavourite = favouriteTV.includes(id);
  useEffect(() => {
    const storedFavouriteTV =
      JSON.parse(localStorage.getItem("favouriteTV")) || [];
    setFavouriteTV(storedFavouriteTV);
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteTV", JSON.stringify(favouriteTV));
  }, [favouriteTV]);

  const handleClick = () => {
    if (isFavourite) {
      setFavouriteTV(favouriteTV.filter((movieId) => movieId !== id));
    } else {
      setFavouriteTV([...favouriteTV, id]);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setTv(data));
  }, []);

  console.log(tv);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
              alt=""
            />
            <button onClick={handleClick}>
              {!isFavourite ? "Add to Favourites" : "Remove from Favourites"}
            </button>
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name"> {tv.original_name} </div>
            <div className="movie__rating">
              <span className="movie__voteavg">{tv.vote_average}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="movie__releaseDate">
              Release date: {tv.first_air_date}{" "}
            </div>
            <div className="movie__genres">
              {tv &&
                tv.genres &&
                tv.genres.map((genre) => (
                  <span className="movie__genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{tv.overview}</div>
          </div>
        </div>
      </div>
      <div className="movie__production">
        <div className="movie__heading">Production Companies</div>
        <div className="companies">
          {tv &&
            tv.production_companies &&
            tv.production_companies.map((company) => (
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

export default Tv;
