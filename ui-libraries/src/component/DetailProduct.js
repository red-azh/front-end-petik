/** @format */

import React from "react";

const DetailProduct = () => {
	return (
		<div>
			<scettion class="mt-5">
				<div class="container">
					<div class="columns">
						<div class="column is-half">
							<figure>
								<img src="https://picsum.photos/800/600" alt="" />
							</figure>
						</div>
						<div class="column">
							<div class="content">
								<div class="title is-4">Product name</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Praesentium beatae eius nihil omnis neque dolore ipsum,
									perferendis explicabo blanditiis corrupti rem dolorum quae qui
									itaque veniam dicta, perspiciatis deserunt asperiores?
								</p>
								<p>
									<strong>Price : </strong> Rp. 1000.000,-
								</p>
								<p>Stock</p>
								<div class="field p-5">
									<button className="button is-warning mb-3 is-fullwidth has-text white">
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
			</scettion>
		</div>
	);
};

export default DetailProduct;
