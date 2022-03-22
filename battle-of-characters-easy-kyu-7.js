function battle(x, y) {
    let val1 = x.toUpperCase().split('').reduce((a,b)=>a+(b.charCodeAt()-64),0)
    let val2 = y.toUpperCase().split('').reduce((a,b)=>a+(b.charCodeAt()-64),0)
    if(val1>val2){
        return x.toUpperCase()
    }else if(val2>val1){
        return y.toUpperCase()
    }else{
        return "Tie!"
    }
}