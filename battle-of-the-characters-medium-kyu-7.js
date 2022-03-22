function battle(x, y) {
    let num1=0,
        num2=0;
    x.split(``).map(v=>v===v.toUpperCase()?num1+=v.charCodeAt()-64:num1+=(v.charCodeAt()-96)/2)
    y.split(``).map(v=>v===v.toUpperCase()?num2+=v.charCodeAt()-64:num2+=(v.charCodeAt()-96)/2)
    
    return num1>num2?x:num2>num1?y:"Tie!"
}