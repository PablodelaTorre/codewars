function calc(expr) {  
    let resultado = [];
    let operadores = ["+", "-", "*", "/"];
    let arr = expr.split(" ");
    
    for (let i=0; i < arr.length; i++) {
        switch(arr[i]) {
            case '+': resultado.push(resultado.pop() + resultado.pop()); break;
            case '-': resultado.push(-resultado.pop() + resultado.pop()); break;
            case '*': resultado.push(resultado.pop() * resultado.pop()); break;
            case '/': resultado.push(1 /(resultado.pop() / resultado.pop())); break;
            default: resultado.push(parseFloat(arr[i]));
        }
    }
    return resultado.pop() || 0;
}