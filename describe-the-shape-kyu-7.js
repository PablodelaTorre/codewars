function describeTheShape( angles ){
    return angles < 3 ? "this will be a line segment or a dot" 
    : `This shape has ${angles} sides and each angle measures ${Math.floor((180*(angles-2))/angles)}` 
}