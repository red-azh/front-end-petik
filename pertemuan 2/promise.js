/** @format */

function download() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Download selesai selama 3 detik ");
		}, 3000);
	});
}

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

function main() {
	//  solusi pakai callback hell yaitu promise
	// untuk apa? untuk supaya tidak menjorok kalao punya fungsi callback banyak
    // .then fungsinya untuk kalao janji nya ditepati itu di tepati
	download().then((hasil) => {
		console.log(hasil);
	});
	verify()
    .then((hasil) => {
		console.log(hasil);
        notify();
	})
    .catch((error) => {
        console.log(error);
    });
    
    
}

main();
