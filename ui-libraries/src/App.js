/** @format */

import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavbarComponents from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavbarComponents />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/top" element={<TopRated/>} />
				</Routes>
			</BrowserRouter>
			<Footer />
			{/* <Home /> */}
		</div>
	);
}

export default App;
