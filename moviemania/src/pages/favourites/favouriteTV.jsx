import React from "react";
import { useState, useEffect } from "react";
import Card from "../../components/tvcard/tv-card";
import "./favourites.css";

function FavouriteTV() {
	const [favouriteTV, setFavouriteTV] = useState([]);
	const [fetchedTV, setFetchedTV] = useState([]);
	useEffect(() => {
		const storedFavouriteTV =
			JSON.parse(localStorage.getItem("favouriteTV")) || [];
		setFavouriteTV(storedFavouriteTV);
	}, []);
	useEffect(() => {
		const fetchTV = async () => {
			const fetchedTVArray = await Promise.all(
				favouriteTV.map(async tvId => {
					const response = await fetch(
						`https://api.themoviedb.org/3/tv/${tvId}?api_key=c8a65028465c18a0af0841ac79b572fd`
					);
					const data = await response.json();
					return data;
				})
			);
			setFetchedTV(fetchedTVArray);
		};

		fetchTV();
	}, [favouriteTV]);
	return (
		<>
			<h1 className="fav-heading">Favourites</h1>
			{favouriteTV.length > 0 ? (
				<div className="fav-cards">
					{fetchedTV?.map(tv => (
						<Card tvShow={tv} />
					))}
				</div>
			) : (
				<h1 className="no-fav">No Favourites To Show</h1>
			)}
		</>
	);
}

export default FavouriteTV;
