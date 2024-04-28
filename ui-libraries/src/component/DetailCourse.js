/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCourse = () => {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState("");
	const { id } = useParams();

	useEffect(() => {
		getCourseById();
	}, [id]);

	const getCourseById = async () => {
		try {
			const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
			setName(response.data.name);
			setDesc(response.data.desc);
			setImage(response.data.url);
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};
	return (
		<section className="section mt-5">
			<div class="container">
				<div class="columns">
					<div class="column is-half">
						<figure class="image is4by3">
							<img src={image} alt="product" />
						</figure>
					</div>
					<div class="column">
						<div class="content">
							<div class="title is-4">{name}</div>
							<p>{desc}</p>
							<div class="field p-5">
								<button className="button is-primary is-fullwidth has-text-white mb-3">
									Add to cart
								</button>
								<button className="button is-primary is-outlined is-fullwidth">
									Buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailCourse;
