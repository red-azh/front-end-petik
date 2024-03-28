/** @format */

import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import Footer from "./component/footer/Footer.js";
import Main from "./component/Main/Main.js";
// ini buat nampilin gambar
import addMovieForm from "./component/AddMovieForm/AddMovieForm.js";

// proops itu atribut html tapi kalo di react jadi props namanya
function App() {
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
