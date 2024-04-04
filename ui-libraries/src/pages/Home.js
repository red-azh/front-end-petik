/** @format */

import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Movies from "../component/Movies";
import Hero from "../component/Hero";

const Home = () => {
	return (
		<div>
            <Hero/>
			<Movies />
		</div>
	);
};

export default Home;
