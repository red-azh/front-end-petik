/** @format */

import { Component } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<h1>Heloo World !!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nisi.
			</p>
			<Footer />
		</div>
	);
}

const Header = () => {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Login</li>
			</ul>
		</nav>
	);
};


class Footer extends Component {
	render() {
		return (
			<footer>
				<h3>Copyrights &copy; 2024 Developed By Azhari</h3>
				<span>Make with &10084</span>
			</footer>
		);
	}
}

export default App;
