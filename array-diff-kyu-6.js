function arrayDiff(a, b) {
    let arr = a.filter(item => !b.includes(item))
    return arr
}