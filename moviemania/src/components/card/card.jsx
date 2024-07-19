import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movie }) => {
	return (
		<Link className="card__link" to={`/movie/${movie.id}`}>
			<div className="card">
				<img
					className="card__img"
					src={`https://image.tmdb.org/t/p/original${
						movie ? movie.poster_path : ""
					}`}
				/>
				<div className="card__overlay">
					<div className="card__title">{movie ? movie.original_title : ""}</div>
					<div className="card__runtime">
						{movie ? movie.release_date : ""}
						<span className="card__rating">
							{movie ? movie.vote_average : ""}
							<FontAwesomeIcon icon={faStar} />
						</span>
					</div>
					<div className="card__description">
						{movie ? movie.overview.slice(0, 118) + "..." : ""}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
