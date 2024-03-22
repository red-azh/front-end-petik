/** @format */

// ini array rest untuk menambah nilai selanjutnya
function sum(...numbers) {
	let hasil = 0;
	for (const number of numbers) {
		hasil = hasil + number;
	}
	console.log(hasil);
}
sum(10, 5, 9, 6, 8, 7, 5, 3, 2);
// console.log(sum(10, 20, 24, 35,17));


// intinya rest untuk menggabungkan banyak nilai menajdi satu dan bersifat array