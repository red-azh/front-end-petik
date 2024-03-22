const numbers = [3, -5, 8,1,2, 9,7,-1,6];


// in contoh filter
// arrow function 
// filter digunakan untuk memisahkan antar value yang lain 
// sperti contoh dibawah yang dimana filter akan mencari semua angka dari array numbers yang
// diatas angka 3 
// const filterNumbers = numbers.filter((number) => number > 3);
// console.log(filterNumbers);

// ini contoh map
// menkalikan dua setiap array angka  di dalam array numbers
// map itu setiap nilai dari aarayy yang kita buat itu di drag dan di select mau kita apakan
// nilainya apakah di tambah atau di kali atau dikurang dll
// const mapNumber = numbers.map((number) => number * 2 );
// console.log(mapNumber);


// ini contoh reduce 
// reduce  digunakan untuk membuat hasil akhir dari sebuah array
// parameter kedua adalah nilai awal yang akan dijadwalkan keparameter tersebut
//  contohnya 1 + 1 = 2, (angka 2 menjadi acumulator) lalu 1+(1) (angka satu itu dari array numbers yaitu currenValue)
const sum = numbers.reduce((accumulator,currenValue) => accumulator + currenValue);
// accumuator nya = 0 (nilai hasil penjumlahan)
// reduce adalah nilai array numbers atau nilai saat ini 
console.log(sum); //outputnya adalah jumlah semua angka didalam array