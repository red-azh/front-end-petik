/** @format */

import { Component } from "react";
import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/footer/Footer.js";
import Main from "./component/Main/Main.js";
// ini buat nampilin gambar
import imgProfile from "./component/4vvs7x7kyqr81.jpg";
import Navbar from "./component/Navbar/Navbar.js";
// proops itu atribut html tapi kalo di react jadi props namanya
function App() {
	const name = "Asep";
	// state = variable

	return (
		<div className="App">
			<Header />
			<Main />
			{/* kalo mau ngirim data boleean tergantung false atau true */}
			{/* <Car/> */}
			<Footer nama="azri" />
		</div>
	);
}

export default App;
