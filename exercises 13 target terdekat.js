function targetTerdekat(arr) {
    var foundX = []
    var founfO= 0
    var result = 0

    for (i = 0 ; i< arr.length ; i ++){
        if (arr[i]=== "o"){
            founfO += i     
          } else if (arr[i] === "x"){
              foundX.push(i)
          }
    }
    var num = parseInt(founfO)
    var result = []
    for (i=0; i<foundX.length ; i++){
        result.push(Math.abs(foundX[i]-num))
    }
    for ( i = 0 ; i < result.length ;i++){
        for ( j = i +1 ; j < result.length ;j++){
            if (result[i] > result[j]){
                var temp = result[i]
                result[i]= result[j]
                result [j]= temp
            }
        }
    } 
    if(result.length == 0){
        return 0
    } else {
        return result [0]
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2