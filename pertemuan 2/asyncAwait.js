/** @format */

function download() {
    // kalo misal yang pertama udah di reject maka promise selanjutnya gak bakal di jalankan 
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Download selesai selama 3 detik ");
		}, 3000);
	});
}
// promise funcsi asinkronus kalo janji sebelumnya di jalankan maka di jalankan 
function verify() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Verify");
		}, 2000);
	});
}

function notify() {
	console.log("Download selesai");
}
// async ngasih tau bahwa akan ada asyncronus di dala function tersbut
async function main() {
	// solusi pengganti then catch bisa menggunakan async await
	console.log(await download());
	console.log(await verify());
	notify();
}
// main ini buat tampilannyanya
main();
// kalo kita reject kita bisa pake try catch