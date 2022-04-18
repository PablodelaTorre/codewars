function changer(str) { 
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let arrM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let arrayStr = str.split("")
    let str2 = str.toLowerCase()
    let arr2 = []
    let arr3 = []
    
    for (let i = 0; i < arrayStr.length; i++){
        if(arrayStr[i] == "0" || arrayStr[i] == "1" || arrayStr[i] == "2" || arrayStr[i] == "3" || arrayStr[i] == "4" || arrayStr[i] == "5" || arrayStr[i] == "6" || arrayStr[i] == "7" || arrayStr[i] == "8" || arrayStr[i] == "9" || arrayStr[i] == " "){
            arr2.push(arrayStr[i])
        } else {
            for (let j = 0; j < arr.length; j++){
                if (arrayStr[i] == "z") {
                        arr2.push("a")
                } else if (arrayStr[i] == arr[j] || arrayStr[i] == arrM[j]) {
                        arr2.push(arr[j+1])       
                }
            }
        }    
    }
    for (let x = 0; x < arr2.length; x++){
        if (arr2[x] == "a" || arr2[x] == "e" || arr2[x] == "i" || arr2[x] == "o" || arr2[x] == "u"){
            arr3.push(arr2[x].toUpperCase())
        } else if (arr2[x] !== "a" && arr2[x] !== "e" && arr2[x] !== "i" && arr2[x] !== "o" && arr2[x] !== "u" && arr2[x] !== "0" && arr2[x] !== "1" && arr2[x] !== "2" && arr2[x] !== "3" && arr2[x] !== "4" && arr2[x] !== "5" && arr2[x] !== "6" && arr2[x] !== "7" && arr2[x] !== "8" && arr2[x] !== "9") {
            arr3.push(arr2[x].toLowerCase())
        } else {
            arr3.push(arr2[x])
        }
    }
    console.log(arr2)
    console.log(arr3)
    return arr3.join('')
}

changer('Cat30')