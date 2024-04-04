/** @format */

import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
	return (
		<Container className="my-5">
			<Row>
				<Col md={8} className="text-center-left">
					<h2 classname="text-primary">Title </h2>
					<h3 classname="text-primary">Genre</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Laboriosam, quisquam voluptate omnis quis iusto nostrum delectus
						velit nobis excepturi soluta quaerat doloremque veniam rerum alias
						saepe recusandae aspernatur nulla expedita!
					</p>
					<Button className="btn-success">Primary</Button>
				</Col>
				<Col cold={4}>
					<img src="https://picsum.photos/300/200" alt="hero-img" />
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
