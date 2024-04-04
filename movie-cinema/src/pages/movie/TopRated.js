/** @format */

import React, { useEffect, useState } from "react";
import { getMovieTop } from "../../api";
import "./TopRated.css";

const TopRated = () => {
	const [datas, setDatas] = useState([]);
	useEffect(() => {
		// panggl data api yang tadi kita buat
		getMovieTop().then((result) => {
			setDatas(result);
		});
	}, []);
	console.log(datas);
	return (
		<div className="top">
			{/* <h1>top </h1> */}
			{datas.map((data) => {
				return (
					<div className="topo">
						<img
							src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
							alt="title"
						/>
						<h3 className="title">{data.title}</h3>
						<p className="genre">Tanggal Rilis : {data.release_date}</p>
						<p className="genre">Popularity : {data.popularity}</p>
						<p className="genre">Rating : {data.vote_average}</p>
						<p>Sinopsis : </p>
						<p className="year">{data.overview}</p>
						
					</div>
				);
			})}
		</div>
	);
};

export default TopRated;
