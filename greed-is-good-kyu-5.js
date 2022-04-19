function score( dice ) {
    let num1 = []
    let num2 = []
    let num3 = []
    let num4 = []
    let num5 = []
    let num6 = []
    let numTot = 0
    for (let i = 0; i < dice.length; i++){
        if(dice[i]==1){
            num1.push(dice[i])
        } else if(dice[i]==2){
            num2.push(dice[i])
        } else if(dice[i]==3){
            num3.push(dice[i])
        } else if(dice[i]==4){
            num4.push(dice[i])
        } else if(dice[i]==5){
            num5.push(dice[i])
        } else if(dice[i]==6){
            num6.push(dice[i])
        }
    }
    if (num1.length >= 3){
      numTot =numTot + ( 1000 + ((num1.length - 3) * 100))
    } else {
      numTot = numTot + (num1.length * 100)
    }
    if (num5.length >= 3){
      numTot =numTot + ( 500 + ((num5.length - 3) * 50))
    } else {
      numTot = numTot + (num5.length * 50)
    }
    if (num2.length >= 3){
        numTot = numTot + 200
    }
    if (num3.length >= 3){
        numTot = numTot + 300
    }
    if (num4.length >= 3){
        numTot = numTot + 400
    }
    if (num6.length >= 3){
        numTot = numTot + 600
    }
    return numTot
}