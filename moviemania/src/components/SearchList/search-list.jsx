import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import Pagination from "../pagination/Pagination";

const SearchList = () => {
	const [movieList, setMovieList] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const { query } = useParams();
	useEffect(() => {
		getDetails();
	}, [query, page]);

	const getDetails = () => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c8a65028465c18a0af0841ac79b572fd&include_adult=false&language=en-US&page=${page}`
		)
			.then(response => response.json())
			.then(data => {
				setTotalPages(data.total_pages);
				setMovieList(data.results);
			});
	};
	return (
		<div className="movie__list">
			<h2>Search Results for "{query}"</h2>
			<div className="list__cards">
				{movieList?.map(movie => (
					<Card movie={movie} key={movie.id} />
				))}
			</div>
			<div className="pagination">
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default SearchList;
