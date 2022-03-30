function whatCentury(year){
    let arr = year.split("")
    let arrNum = []
    let num = 0 
    for (let i = 0; i<=1; i++){
        arrNum.push(arr[i])
    }  
    num = arrNum.join("")
    let num1 = parseInt(num) + 1
    if(arrNum[0] == "1" || (arrNum[0] !== "1" && (arrNum[1] == "9" || arrNum[1] == "5" || arrNum[1] == "8" || arrNum[1] == "7" || arrNum[1] == "3" || arrNum[1] == "4" || arrNum[1] == "6"))){
        let str = num1.toString() + "th"
        return str
    }else if(year=='2000'){
        let str = "20th"
        return str
    }else if (arrNum[0] !== "1" && arrNum[1] == "0"){
        let str = num1.toString() + "st"
        return str
    }else if (arrNum[0] !== "1" && arrNum[1] == "1"){
        let str = num1.toString() + "nd"
        return str
    }else if(arrNum[0] !== "1" && arrNum[1] == "2"){
        let str = num1.toString() + "rd"
        return str
    }
}