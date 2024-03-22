function salam(name,callback) {
    console.log("Heloo" + name);
    callback();
}

function salamPisah() {
    console.log("byeee");
}

salam("Budi", salamPisah)
