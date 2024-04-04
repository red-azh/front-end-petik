/** @format */

import React from "react";

const Login = () => {
	return (
		<section>
			<section class="hero is-danger is-fullheight">
				<div class="hero-body">
					<div class="container">
						<div class="columns is-centered">
							<div class="column is-4">
								
									<form action="" className="box">
                                        <h3 className="title">Login</h3>
										<div class="field">
											<label for="email">Email</label>
											<input
												type="email"
												className="input "
												placeholder="Masukan email"
											/>
										</div>
										<div class="field">
											<label for="password">Email</label>
											<input
												type="password"
												className="input "
												placeholder="Masukan password"
											/>
										</div>
                                        <div class="field">
                                            <button className="button is-success is fullwidth">Login</button>
                                        </div>
									</form>
								
							</div>
						</div>
						<p class="title">Fullheight hero</p>
						<p class="subtitle">Fullheight subtitle</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Login;
