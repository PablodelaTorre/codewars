function longest(s1, s2) {
    const string = s1 + s2
    const setS = new Set(string)
    const orden = [...setS].sort()
    const str = orden.join("")
    return str
}