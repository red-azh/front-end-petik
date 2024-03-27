/** @format */

import User from "../User/User.js";
import Car from "../Car/Car.js";
import Movies from "../Movies/Movies.js";
import "./Main.css";
import Hero from "../Hero/Hero.js";

const Main = () => {
	const users = [
		{
			nama: "Bambang Pacul",
			member: "Platinum",
			message: "Helo bacul",
		},
		{
			nama: "Budi",
			member: "Gold",
			message: "Helo budi",
		},
		{
			nama: "ucup",
			member: "Diamond",
			message: "Helo cup",
		},
		{
			nama: "Asep",
			member: "Gold",
			message: "Helo asep",
		},
		{
			nama: "Fuad",
			member: "Non Member",
			message: "Helo fuad",
		},
		{
			nama: "Malik",
			member: "Silver",
			message: "Helo malik",
		},
		{
			nama: "Azizah",
			member: "Platinum",
			message: "Helo ajijah",
		},
		{
			nama: "Agus",
			member: "Non Member",
			message: "Helo agus",
		},
		{
			nama: "Maryam",
			member: "Diamond",
			message: "Helo maryam",
		},
		{
			nama: "Feri",
			member: "Silver",
			message: "Helo peri",
		},
	];
	return (
		<div className="content">
		<Hero />
		<Movies />
			{users.map((user) => {
				return (
					<User
						nama={user.nama}
						member={user.member}
						message={()=> alert(user.message)}
						
					/>
				);
			})}
		</div>
	);
};

export default Main;
