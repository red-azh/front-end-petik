/*
spread sintak diguakan untuk memisahkan array atau obejct menjadi 1 item (singgle value )
notasinya adalah .... setelah perintah
*/

const fruits = ["Apel", "Anggur"];
// untuk menggabungkan nilai array ke array lainya pakai oprator spread contohnya dibawah ini 
const newfruits = [...fruits, "Mangga", "Lemon"];
// ini membuat array menajdi string / memisahan nilai array menajdi nilai sendiri
console.log(...newfruits);


const user = {
    name : "Budi santoso",
    major : "Informatics"
}
// console.log(user.name);
// spread untuk menyambungkan array yang lain
const newUser = {
    ...user,
    age : 30,
}
console.log(newUser);