/** @format */

import User from "../User/User.js";
import Car from "../Car/Car.js";
import "./Main.css";

const Main = () => {
	return (
		<div className="content">
			<User nama="Bambang Pacul" member="Platinum" />
			<User nama="Budi" member="Gold" />
			<User nama="ucup" member="Diamond" />
			<User nama="Asep" member="Gold" />
			<User nama="Fuad" member="Non Member" />
			<User nama="Malik" member="Silver" />
			<User nama="Azizah" member="Platinum" />
			<User nama="Agus" member="Non Member" />
			<User nama="Maryam" member="Diamond" />
			<User nama="Feri" member="Silver" />
			{/* <div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div>
			<div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div>
			<div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div>
			<div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div>
			<div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div>
			<div className="card">
				<Car
					merk="Ferari"
					harga={8}
					isNew={false}
					colors={["Hitam", "Putih", "Abu-abu"]}
					// ini untuk buat onclick dan harus pakai function supaya alertnya gak muncul muncul lagi
					beli={() => alert("Terbeli!!")}
				/>
			</div> */}
		</div>
	);
};

export default Main;
