/**
 * Fungsi untuk menampilkan hasil download
 *
 * @format
 * @param {string} result - Nama file yang didownload
 */

const showDownload = (result) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Berhasil Mendownload ${result} `);
		}, 3000);
	});
};

/**
 * Fungsi untuk download file
 * @param {Promise} callback - Function callback show
 */

const download = () => {
	return new Promise((resolve) => {
		const downloadedFile = "Xampp.exe";
		resolve(downloadedFile);
	});
};

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

(async () => {
	const result = await download();
	const message = await showDownload(result);
	console.log(message);
})();
