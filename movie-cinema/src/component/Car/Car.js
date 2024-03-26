/** @format */
// ini buat nampilin gambar dari folder
// import man from "./4vvs7x7kyqr81.jpg";

const Car = (props) => {
	// ini method destruct
	const { merk, harga, isNew, colors, beli } = props;
	return (
		// ini fragment tag
		<>
			<img
				src="https://cdn.setirkanan.co.id/images/2023/05/02/0fccd2145f6f702bf1a634efc38217ec47ab7846/ezgif.com-gif-maker-(16).jpg"
				alt="foto-mobil"
				width={206}
			/>
			<h3>Merk Mobil : {merk}</h3>
			<h4>Harga Mobil : Rp.{harga} Miliyar</h4>
			<h5>Keadaaan Mobil : {isNew ? "Baru" : "Bekas"} </h5>
			<h5>Varian Warna : {colors.map((color) => color + ", ")}</h5>
			<button onClick={beli}>Beli </button>
		</>
	);
};

export default Car;
