import React from "react";
import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import "./favourites.css";

function FavouriteMovies() {
	const [favouriteMovies, setFavouriteMovies] = useState([]);
	const [fetchedMovies, setFetchedMovies] = useState([]);
	useEffect(() => {
		const storedFavouriteMovies =
			JSON.parse(localStorage.getItem("favouriteMovies")) || [];
		setFavouriteMovies(storedFavouriteMovies);
	}, []);
	useEffect(() => {
		const fetchMovies = async () => {
			const fetchedMoviesArray = await Promise.all(
				favouriteMovies.map(async movieId => {
					const response = await fetch(
						`https://api.themoviedb.org/3/movie/${movieId}?api_key=c8a65028465c18a0af0841ac79b572fd`
					);
					const data = await response.json();
					return data;
				})
			);
			setFetchedMovies(fetchedMoviesArray);
		};

		fetchMovies();
	}, [favouriteMovies]);
	return (
		<>
			<h1 className="fav-heading">Favourites</h1>
			{favouriteMovies.length > 0 ? (
				<div className="fav-cards">
					{fetchedMovies?.map(movie => (
						<Card movie={movie} key={movie.id} />
					))}
				</div>
			) : (
				<h1 className="no-fav">No Favourites To Show</h1>
			)}
		</>
	);
}

export default FavouriteMovies;
