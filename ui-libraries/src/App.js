/** @format */

import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavbarComponents from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/TopRated";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
function App() {
	return (
		<div className="App">
			{/* buat routing */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/top" element={<TopRated />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
			{/* <Footer /> */}
			{/* <Home /> */}
		</div>
	);
}

export default App;
