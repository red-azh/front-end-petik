/** @format */

import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	CardLink,
	Row,
} from "reactstrap";
import React from "react";

const Movies = () => {
	const movies = [
		{
			title: "Movie 1",
			year: 2021,
		},
		{
			title: "Movie 2",
			year: 2020,
		},
		{
			title: "Movie 3",
			year: 2023,
		},
		{
			title: "Movie 4",
			year: 2000,
		},
		{
			title: "Movie 5",
			year: 2022,
		},
	];
	return (
		<Row className="justify-content-center">
			{movies.map((movie) => {
				return (
					<Card
						style={{
							width: "18rem",
						}}>
						<img src="https://picsum.photos/200" alt="" />
						<CardBody className="text-center">
							<CardTitle tag="h5">{movie.title}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								{movie.year}
							</CardSubtitle>
						</CardBody>
					</Card>
				);
			})}
		</Row>
	);
};

export default Movies;
