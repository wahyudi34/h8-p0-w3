function pasanganTerbesar(num) {
    var angka = ''
    var newNum = num.toString()
    
    for(var i=0; i<newNum.length; i++) {
        angka+= newNum[i] + newNum[i+1] + ' '
    }
    var result = angka.split(' ').sort(function(a, b) {return b-a})
    return result[0]
}
    
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99