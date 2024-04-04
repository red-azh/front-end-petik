/** @format */

import React, { useEffect, useState } from "react";
import Car from "../../component/Car/Car";
import Main from "../../component/Main/Main";
import { getMoviePopular } from "../../api";
import "./Popular.css";

const Popular = () => {
	const [datas, setDatas] = useState([]);
	useEffect(() => {
		// panggl data api yang tadi kita buat
		getMoviePopular().then((result) => {
			setDatas(result);
		});
	}, []);
	console.log(datas);

	return (
		<div>
			<div className="popular">
				{datas.map((data) => {
					return (
						<div className="topo">
							<img
								src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
								alt="title"
							/>
							<h3 className="title">{data.original_title}</h3>
							<p className="genre">Popularity : {data.popularity}</p>
							<p className="genre">Tahun rilis : {data.release_date}</p>
							<p>Sinopsis : </p>
							<p className="year">{data.overview}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Popular;
