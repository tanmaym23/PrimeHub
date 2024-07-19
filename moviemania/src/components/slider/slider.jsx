import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./slider.css";

const Slider = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US"
		)
			.then(response => response.json())
			.then(data => setPopularMovies(data.results));
	}, []);
	return (
		<>
			{popularMovies.length > 0 && (
				<Carousel
					showThumbs={false}
					autoPlay={true}
					interval={2000}
					infiniteLoop={true}
					showStatus={false}
					transitionTime={500}
					showIndicators={false}
				>
					{popularMovies.map(movie => (
						<Link
							className="posterContainer"
							to={`/movie/${movie.id}`}
							key={movie.id}
						>
							<div className="posterImage">
								<img
									src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
									alt="backdrop"
								/>
							</div>
							<div className="posterImage__overlay">
								<div className="posterImage__title">
									{" "}
									{movie.original_title}{" "}
								</div>
								<div className="posterImage__runtime">
									{movie.release_date}
									<span className="posterImage__rating">
										{movie.vote_average} <FontAwesomeIcon icon={faStar} />
									</span>
								</div>
								<div className="posterImage__description">
									{" "}
									{movie.overview}{" "}
								</div>
							</div>
						</Link>
					))}
				</Carousel>
			)}
		</>
	);
};

export default Slider;
