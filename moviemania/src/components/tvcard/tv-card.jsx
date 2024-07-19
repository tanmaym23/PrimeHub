import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ tvShow }) => {
	return (
		<Link className="card__link" to={`/tv/${tvShow.id}`}>
			<div className="card">
				<img
					className="card__img"
					src={`https://image.tmdb.org/t/p/original${
						tvShow ? tvShow.poster_path : ""
					}`}
				/>
				<div className="card__overlay">
					<div className="card__title">
						{tvShow ? tvShow.original_name : ""}
					</div>
					<div className="card__runtime">
						{tvShow ? tvShow.first_air_date : ""}
						<span className="card__rating">
							{tvShow ? tvShow.vote_average : ""}
							<FontAwesomeIcon icon={faStar} />
						</span>
					</div>
					<div className="card__description">
						{tvShow ? tvShow.overview.slice(0, 118) + "..." : ""}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
