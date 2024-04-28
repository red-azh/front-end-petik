/** @format */

import React, { useEffect, useState } from "react";

import axios from "axios";

const DetailProduct = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		getCourses();
	}, []);

	const getCourses = async () => {
		const response = await axios.get("http://api.sukmax.my.id/course");
		setCourses(response.data);
	};
	return (
		<section className="section mt-5">
			<div class="container">
				<div class="columns">
					<div class="column is-half">
						<figure class="image is4by3">
							<img src="https://picsum.photos/800/600" alt="product" />
						</figure>
					</div>
					<div class="column">
						<div class="content">
							<div class="title is-4">Product Name</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
								animi corrupti molestiae obcaecati modi odit exercitationem
								vero, accusantium, accusamus quod porro. Quo ex consequuntur,
								porro odio reprehenderit saepe repudiandae libero!
							</p>
							<p>
								<strong>Price : </strong> Rp 1.000.000,-
							</p>
							<p>Stock</p>
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

export default DetailProduct;
