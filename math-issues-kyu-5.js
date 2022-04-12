Math.round = function(number) {
    if (number - parseInt(number) >= 0.5){
        return (parseInt(number) + 1)
    } else {
        return parseInt(number)
    }
}  
Math.ceil = function(number) {
    if (parseInt(number) == number){
        return number
    } else {
        return parseInt(number) + 1
    }
}
Math.floor = function(number) {
    if (parseInt(number) == number){
        return number
    } else {
        return parseInt(number) 
    }
}