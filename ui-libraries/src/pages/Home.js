/** @format */

import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Products from "../component/Products";
import Hero from "../component/Hero";
import NavbarComponents from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
	return (
		<div>
			<NavbarComponents />
			<Hero />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
