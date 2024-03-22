/** @format */

function download(callbackVerify) {
	setTimeout(() => {
		console.log("Download selesai selama 3 detik ");
        callbackVerify()
	}, 3000);
}

function verify(callbackNotify) {
	setTimeout(() => {
		console.log("Verify");
        callbackNotify()
	}, 2000);
}

function notify() {
	console.log("Download selesai");
}

function main() {
    // solusinya kita callback
    // dikarenakan function download ada parameter 
    // maka dia tidak boleh kosong 
    // jikalau ada function ada parameter maka kalau mau manggil jangan sampe kosong
	download(function(){
        verify(function () {
            notify();
        })
    });
}

main();
