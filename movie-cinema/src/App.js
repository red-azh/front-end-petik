/** @format */

import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import Footer from "./component/footer/Footer.js";
import Main from "./component/Main/Main.js";
// ini buat nampilin gambar
import addMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./component/Navbar/Navbar.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/TopRated.js";
import Detail from "./pages/movie/Detail.js";
// proops itu atribut html tapi kalo di react jadi props namanya
function App() {
	// state = variable

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/popular" element={<Popular />} />
					{/* show */}
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			{/* <Header />
			<Main />
			 kalo mau ngirim data boleean tergantung false atau true 
			 <Car/> 
			<Footer nama="azri" /> */}
		</div>
	);
}

export default App;
