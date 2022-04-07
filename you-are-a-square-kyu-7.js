const isSquare = function(n){
    if (n == 0){
        return true
    } else if(n < 0) {
        return false
        
    } else {
        return Number.isInteger(Math.sqrt(n)) 
    }
}