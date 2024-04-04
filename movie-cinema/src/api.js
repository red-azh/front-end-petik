/** @format */

import axios from "axios";

const apikey = "8e465ff28280979967a70c1462d19f7f";
// detail
export const getDetailMovie = async (id) => {
	try {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
		);
		return response.data;
	} catch (error) {
		throw new Error("Error fetching movie detail: " + error.message);
	}
};

// list movie
export const getMovieList = async () => {
	const movie = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
	);
	return movie.data.results;
};

// popular
export const getMoviePopular = async () => {
	const movie = await axios.get(
		`
https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
	);
	return movie.data.results;
};
// top rated
export const getMovieTop = async () => {
	const movie = await axios.get(
		`
https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
	);
	return movie.data.results;
};
