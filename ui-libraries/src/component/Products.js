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
	Col,
} from "reactstrap";
import React from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
	const Products = [
		{
			title: "Produk 1",
			price: "4555",
		},
		{
			title: "Produk 2",
			price: "2155",
		},
		{
			title: "Produk 3",
			price: "45487",
		},
		{
			title: "Produk 4",
			price: "10000",
		},
		{
			title: "Produk 5",
			price: "10025",
		},
	];
	return (
		<Row className="justify-content-center">
			{Products.map((movie, index) => {
				return (
					<Col sm={6} md={4} key={index} lg={3} className="mb-4">
						<NavLink>
							<Card
								style={{
									width: "18rem",
								}}>
								<img src="https://picsum.photos/200" alt="" />
								<CardBody className="text-center">
									<CardTitle tag="h5">{movie.title}</CardTitle>
									<CardSubtitle className="mb-2 text-muted" tag="h6">
										{movie.price}
									</CardSubtitle>
								</CardBody>
							</Card>
						</NavLink>
					</Col>
				);
			})}
		</Row>
	);
};

export default Products;
