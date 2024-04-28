/** @format */

import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/sublime.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../features/authSlice";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user, isError, isSuccess, isLoading, message] = useSelector(
		(state) => state.auth
	);

	const Auth = (e) => {
		e.preventdevault();
		dispatch(LoginUser({ email, password }));
	};

useEffect (() => {
	if (user || isSuccess) {
		navigate("/dashboard")
	}
}, [user.isSuccess,dispatch, navigate]);

	return (
		<section className="hero has-background-grey-light is-fullheight is-fullwidth">
			<div className="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-4">
							<form className="box">
								{isError && <p className="has text-centered">{message}</p>}
								<div class="field text-center">
									<NavLink to={"/"}>
										<img src={logo} alt="" width={60} />
									</NavLink>
									<h3 className="title has-text-primary">Login</h3>
								</div>

								<div class="field">
									<label for="email">Email</label>
									<input
										type="email"
										className="input"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Masukkan email"
									/>
								</div>
								<div class="field">
									<label for="password">Password</label>
									<input
										type="password"
										onChange={(e) => setPassword(e.target.value)}
										className="input"
										placeholder="Masukkan password"
									/>
								</div>
								<div class="field">
									<button className="button is-success is-fullwidth">
										{isLoading ? "Loading..." : "Login"}
									</button>
								</div>
								<div class="field">
									<p>
										Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
