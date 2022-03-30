function palindrome(num) {
    let str = num.toString()
    let arr = []
    let str2
    let num2 = 0
    if(num > 0 && num < 10){
        return false
    } else if(num <= 0 || typeof num == 'string' || num!==parseInt(num)){
        return "Not valid"
    } else if(num>=10)
    arr=str.split("").reverse()
    str2 = arr.join("")
    num2 = Number(str2)
    return num===num2
}