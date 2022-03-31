function likes(names) {
    let numResta
    let str 
    let arr = []
    if (names.length == 0){
        return "no one likes this"
    } else if(names.length == 1){
        str = names.join("") + " likes this"
        return str
    } else if (names.length == 2){
        for (let i = 0; i < names.length; i++){
            arr.push(names[i])
        }
        arr.splice(1, 0, " and ")
        str = arr.join("") + " like this"
        return str
    } else if (names.length == 3){
        for (let i = 0; i < names.length; i++){
            arr.push(names[i])
        }
        arr.splice(1, 0, ", ")
        arr.splice(3, 0, " and ")
        str = arr.join("") + " like this"
        return str
    } else {
        for (let i = 0; i < 2; i++){
            arr.push(names[i])
        }
        arr.splice(1, 0, ", ")
        arr.splice(3, 0, " and ")
        numResta = names.length - 2
        str = arr.join("") + numResta + " others " + "like this"
        return str
    }
}