/** @format */

import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import NavbarComponents from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRated from "./pages/Courses";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import DetailCourse from "./component/DetailCourse";

function App() {
	return (
		<div className="App">
			{/* buat routing */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/course" element={<Courses />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/course/:id" element={<DetailCourse />} />
				</Routes>
			</BrowserRouter>
			{/* <Footer /> */}
			{/* <Home /> */}
		</div>
	);
}

export default App;
