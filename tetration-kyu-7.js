function tetration(x, y) {
    if (y < 1) 
        return 1
    
    let tetra = x
    for (let i = 1; i < y; i++) {
        tetra = Math.pow(x, tetra)
    }
    return tetra
}