/** @format */

import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../api.js";

const Movies = () => {
	// state biasanya paling atas
	// pertama file wadah
	// kedua pengubah data awal
	// use state menerima paramemter misal ingin mengubah tipe data string ya si use state ini juga harus string
	// yang ditampilin tetep variable yang awal
	// const [nama, setNama] = useState("uscup");

	// console.log(nama);

	const [datas, setDatas] = useState([]);
	// dia butuh handler sebagai trigger
	const handleClick = () => {
		const movie = {
			title: "Amazing Spiderman",
			year: "2012",
			poster: "https://picsum.photos/200/300",
			genre: "Action",
		};
		// array baru (movie)
		setDatas([...datas, movie]);
		// setNama("Bumi");
	};

	const addMovie = (movie) => {
		setDatas([...datas, movie]);
	};
	useEffect(() => {
		// panggl data api yang tadi kita buat
		getMovieList().then((result) => {
			setDatas(result);
		});
	}, []);

	console.log(datas);
	// mounting = kode semua yang di render pertama kali
	// updating =
	// unmounting = tahap siklus nya sudah berakhir
	// hook state = fitur yang daapat memungkinkan kita untuk merubah setiap ada perubahan
	// hook punya penulisan seperti ini const ... [value, method]...=>{}
	//fungsi buat bikin tambah kurang
	// const [count, setCount] = useState(0);
	// const handleTambah = () => {
	// 	setCount(count + 1);
	// };

	// const handleKurang = () => {
	// 	setCount(count - 1);
	// };

	return (
		<div>
			<h1>Latest Movies</h1>
			<div className="movies-container">
				{datas.map((data) => {
					return (
						<Movie
							id={data.id}
							title={data.title}
							year={data.release_date}
							poster={data.poster_path}
						/>
					);
				})}
				{/* yang tadinya ucup pas di klik dia jadi bumi karna si button nya 
				punya hendle yang dimana itu trigger buat hook state */}
				{/* <p>{nama}</p> */}
				{/* <button onClick={handleClick}>Add Movie</button> */}
				{/* <div className="penghitung tambahkurang">
				<h1>Hasil: {count}</h1>
				<button onClick={handleTambah}>+</button>
				<button onClick={handleKurang}>-</button>
			</div> */}
			</div>
			<AddMovieForm onAddMovie={addMovie} />
		</div>
	);
};

export default Movies;
