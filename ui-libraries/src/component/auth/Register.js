/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/sublime.png";
const Register = () => {
	return (
		<div>
			<section className="hero has-background-grey-light is-fullheight is-fullwidth">
				<div className="hero-body">
					<div class="container">
						<div class="columns is-centered">
							<div class="column is-4">
								<form className="box">
									<div class="field text-center">
										<NavLink to={"/"}>
											<img src={logo} alt="" width={66} />
										</NavLink>
										<h3 className="title has-text-primary">Register</h3>
									</div>

									<div class="field">
										<label for="nama">Nama</label>
										<input
											type="text"
											id=""
											className="input"
											placeholder="Masukkan nama"
										/>
										<input
											type="hidden"
											id=""
											className="input"
											placeholder="Masukkan nama"
										/>
									</div>
									<div class="field">
										<label for="email">Email</label>
										<input
											type="email"
											className="input"
											placeholder="Masukkan email"
										/>
									</div>
									<div class="field">
										<label for="password">Password</label>
										<input
											type="password"
											className="input"
											placeholder="Masukkan password"
										/>
									</div>
									<div class="field">
										<label for="ConfirmPassword">Config Password</label>
										<input
											type="hidden"
											className="input"
											placeholder="Masukkan ulang password"
										/>
									</div>
									<div class="field">
										<button className="button is-success is-fullwidth">
											Login
										</button>
									</div>
									<div class="field">
										<dir>
											<p>Sudah punya akun<NavLink to={'/login'}>Login</NavLink> </p>
										</dir>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
