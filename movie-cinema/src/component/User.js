/** @format */

const User = ({ name, alamat, angkatan, status, hobi, klik, gambar }) => {
	return (
		<>
			<ul>
				<img src={gambar} alt="" width={264} />
				<li>Nama : {name}</li>
				<li>Alamat : {alamat}</li>
				<li>Angakatan : ke-{angkatan}</li>
				<li>status : {status ? "Lulus" : "sedang Belajar"}</li>
				<li>Hobby : {hobi.map((hob) => hob + ", ")}</li>
				<li>
					<button onClick={klik}>Hit me</button>
				</li>
			</ul>
		</>
	);
};

export default User;
