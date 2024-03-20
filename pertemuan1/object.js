// membuat object carabya adalah dengan membuat kurung kurawal {} & new Object

const user = {
name : "ucup",
age : 20,
major : "Web Development"
};

// mengakses nilai pada object 
// bisa di pilih dianatara dua ini cara pemanggilannya tapi lebih rekomndasi pakai yang(.)
// console.log(user.name); // output ucup
// console.log(user["age"]); // output 20 
// mengakses object pada javascript menggunakan for-in
// dan ini untuk menampilkan semua
for (const key in user) console.log(user[key]);