function angkaPalindrome(num) {
    var newNumber = num+1    
    
    while(true){
        var convertNumbertoString = newNumber.toString()
        var reverse = convertNumbertoString.split('').reverse().join('')
        var convertReverse = parseInt(reverse)
        if(newNumber === convertReverse){
            return newNumber
        }
        newNumber++
    } 
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001