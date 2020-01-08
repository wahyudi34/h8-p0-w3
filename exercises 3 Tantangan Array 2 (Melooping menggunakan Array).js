function dataHandling(input) {  
    input[0].splice(2,2,'Bandar Lampung, 21/05/1989')
    input[1].splice(2,2,'Medan, 10/10/1992')
    input[2].splice(2,2,'Ambon, 25/12/1965')
    input[3].splice(2,2,'Martapura, 6/4/1970')
    for(var i=0; i<input.length; i++) {
        for(var j=0; j<input[i].length; j++) {
            if(j === 0) {
                console.log('Nomor ID: ' + input[i][j] + ' ')
            } else if(j === 1) {
                console.log('Nama Lengkap: ' + input[i][j] + ' ')
            } else if(j === 2) {
                console.log('TTL: ' + input[i][j] + ' ')
            } else if(j === 3) {                
                console.log('Hobi: ' + input[i][j] + ' ')
                console.log(' ')
            }
        }
    }
}    
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)