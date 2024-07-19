import React from "react";

function Pagination({ page, setPage, totalPages }) {
	const handlePageChange = newPage => {
		if (newPage >= 1 && newPage <= totalPages) {
			setPage(newPage);
		}
	};
	const generatePaginationButtons = () => {
		const buttons = [];
		const maxButtonsToShow = 10;
		const middleButton = Math.ceil(maxButtonsToShow / 2);

		let startButton = Math.max(
			1,
			Math.min(page - middleButton + 1, totalPages - maxButtonsToShow + 1)
		);
		let endButton = Math.min(startButton + maxButtonsToShow - 1, totalPages);

		if (endButton - startButton + 1 < maxButtonsToShow) {
			startButton = Math.max(1, endButton - maxButtonsToShow + 1);
		}

		for (let i = startButton; i <= endButton; i++) {
			buttons.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={page === i ? "active" : ""}
				>
					{i}
				</button>
			);
		}

		return buttons;
	};

	return (
		<>
			<button
				onClick={() => handlePageChange(page - 1)}
				disabled={page === 1}
				id="Previous"
			>
				Previous
			</button>
			{generatePaginationButtons()}
			<button
				onClick={() => handlePageChange(page + 1)}
				disabled={page === totalPages}
				id="Next"
			>
				Next
			</button>
		</>
	);
}

export default Pagination;
