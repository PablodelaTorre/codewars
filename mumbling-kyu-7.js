function accum(s) {
	let arr = s.split("")
    let str = arr.map((indice, x) => {
        return  (indice.toUpperCase() + indice.toLowerCase().repeat(x))
    }).join("-")
    return str
}