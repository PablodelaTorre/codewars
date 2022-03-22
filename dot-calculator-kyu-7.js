function dotCalculator (equation) {
    let arr = equation.split(" ")
    let numArrA = arr[0].length
    let numArrB = arr[2].length
    let arrPuntos = []
    let numTot = 0
        if (arr[1]=="+"){
            numTot = numArrA + numArrB
        }else if(arr[1]=="-"){
            numTot = numArrA - numArrB
        }else if(arr[1]=="*"){
            numTot = numArrA * numArrB
        }else{
            numTot = Math.floor(numArrA / numArrB) 
        }
    for (let j = 0; j < numTot; j++){
        arrPuntos.push(".")
    }
    
    let puntos = arrPuntos.join('') 
    
    return puntos
}