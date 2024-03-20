const nilai =60;

// kalao mau nge cek data apakah ada atau tidak maka lebih baik 
// pakai if satu baris
// if (nilai) console.log("mengikuti ujian");

if (nilai > 90) {
    console.log("A");
}
else if (nilai >= 80 && nilai <= 90) {
    console.log("B");
}
else if (nilai >= 70 && nilai <= 80) {
    console.log("c");
}
else{
    console.log("tidak ujian");
}