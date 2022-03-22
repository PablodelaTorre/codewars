function countDevelopers(list) {
    var numJs = 0
    list.forEach(i => {
        if (i.language==='JavaScript' && i.continent==='Europe'){
        numJs++
        }
    })
    return numJs
}