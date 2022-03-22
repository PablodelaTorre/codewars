function sumOfMinimums(arr) {
    return arr.map(i => 
    Math.min(...i))
    .reduce((a,b) => a + b,0)
}