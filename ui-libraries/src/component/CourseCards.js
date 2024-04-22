/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Card,
	CardBody,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const CourseCard = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		getCourses();
	}, []);

	const getCourses = async () => {
		const response = await axios.get("https://api.sukmax.my.id/course");
		setCourses(response.data);
	};
	return (
		<div>
			<Container className="my-5">
				<Row>
					{courses.map((data, index) => {
						return (
							<Col sm={6} md={4} lg={3} key={index} className="mb-4">
								<NavLink to={`/course/${data.id}`}>
									<Card
										className="my-3"
										body
										color="light"
										style={{
											width: "18rem",
										}}>
										<img alt="Sample" src={data.url} />
										<CardBody className="text-center">
											<CardTitle tag="h5" className="title is-5 text-black">
												{data.name}
											</CardTitle>
										</CardBody>
									</Card>
								</NavLink>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};

export default CourseCard;
