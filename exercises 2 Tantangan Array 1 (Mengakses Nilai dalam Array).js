function balikString(nama) {
    var reverse = ''
    for(var i=nama.length-1; i>=0; i--) {
        reverse+=nama[i]
    }
    return reverse
}

console.log(balikString('Wahyudi'))