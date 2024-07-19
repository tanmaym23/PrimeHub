import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../tvcard/tv-card";
import Pagination from "../pagination/Pagination";

const TvList = () => {
	const [tvList, setTvList] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { type } = useParams();
	useEffect(() => {
		getDetails();
	}, [type, page]);

	const getDetails = () => {
		fetch(
			`https://api.themoviedb.org/3/discover/tv?api_key=c8a65028465c18a0af0841ac79b572fd&page=${page}`
		)
			.then(response => response.json())
			.then(data => {
				setTotalPages(data.total_pages);
				setTvList(data.results);
			});
	};
	console.log(tvList);
	return (
		<div className="movie__list">
			{<h2 className="list__title">TV Shows</h2>}
			<div className="list__cards">
				{tvList?.map(tvShow => (
					<Card tvShow={tvShow} key={tvShow.id} />
				))}
			</div>
			<div className="pagination">
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default TvList;
