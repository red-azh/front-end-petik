/** @format */

// detail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../api.js";
import "./Detail.css";
const Detail = () => {
	// Gunakan useParams untuk mengambil id dari URL
	let { id } = useParams();
	const [movieDetail, setMovieDetail] = useState(null);

	useEffect(() => {
		// Panggil fungsi getDetailMovie dengan id dari URL
		const fetchMovieDetail = async () => {
			try {
				const detail = await getDetailMovie(id);
				setMovieDetail(detail);
			} catch (error) {
				console.error("Error fetching movie detail:", error);
			}
		};

		fetchMovieDetail();
	}, [id]);

	return (
		<div>

			{/* Tampilkan detail film */}
			{movieDetail && (
				<div className="container1">

					<img src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} alt="Poster" />
					<p>id : {movieDetail.id}</p>
					<h2>{movieDetail.title}</h2>
					<p>Overview: {movieDetail.overview}</p>
					<p>Release Date: {movieDetail.release_date}</p>
					<p>Rating: {movieDetail.vote_average}</p>
					{/* Tambahkan informasi lain yang ingin ditampilkan */}
				</div>
			)}
			{/* 						<Movie
							id={data.id}
							title={data.title}
							year={data.release_date}
							poster={data.poster_path}
						/> */}
		</div>
	);
};

export default Detail;
