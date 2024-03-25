/** @format */

import { Component } from "react";
import "./App.css";
import Header from "./component/Header.js";
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
// ini buat nampilin gambar 
import imgProfile from "./component/4vvs7x7kyqr81.jpg";
// proops itu atribut html tapi kalo di react jadi props namanya
function App() {
	const name = "Asep";
	return (
		<div className="App">
			<Header />

			<h1>Heloo World !!</h1>

			{/* kalo mau ngirim data boleean tergantung false atau true */}
			<Car
				merk="Ferari"
				harga={8}
				isNew={false}
				colors={["Hitam", "Putih", "Abu-abu"]}
				// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
				beli={() => alert("Terbeli!!")}
			/>
			{/* <User
				gambar={imgProfile}
				name={name}
				alamat="jln. Nangka"
				angkatan={5}
				status={false}
				hobi={["Marathon", "Basket"]}
				klik={() => alert(`Profil ${name} telah dibuka`)}
			/> */}
			{/* 	<User
				name="Andri"
				alamat="jln. Biak"
				angkatan={1}
				status={true}
				hobi={["Takraw", "Voli"]}
				klik={() => alert(`Profil Andri telah dibuka`)}
			/>
			<User
				name="Farel"
				alamat="jln. Jeruk"
				angkatan={1}
				status={true}
				hobi={["Sepak Bola", "Voli"]}
				klik={() => alert(`Profil Farel telah dibuka`)}
			/>
			<User
				name="Ibal"
				alamat="jln. Duren"
				angkatan={2}
				status={false}
				hobi={["Takraw", "Basket"]}
				klik={() => alert(`Profil Ibal telah dibuka`)}
			/>
			<User
				name="Azmi"
				alamat="jln. Anggur"
				angkatan={3}
				status={true}
				gambar="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
				hobi={["Karate", "Voli"]}
				klik={() => alert(`Profil Azmi telah dibuka`)}
			/> */}
			<Footer nama="azri" />
		</div>
	);
}

export default App;
