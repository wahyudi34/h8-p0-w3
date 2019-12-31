function dataHandling(input) {
    var result = []
    for(var i=0; i<input.length; i++) {
        for(var j=0; j<input[i].length; j++) {
            // console.log(input[i][j])
            if(j === 0) {
                result+= 'Nomor ID: ' + input[i][j] + ' '
            } else if(j === 1) {
                result+= 'Nama Lengkap: ' + input[i][j] + ' '
            } else if(j === 2) {
                result+= 'TTL: ' + input[i][j] + ' '
            } else if(j === 3) {
                result+= 'Hobi: ' + input[i][j] + ' '
            }
        }
    }
    return result
}    
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))