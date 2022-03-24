                    //Sin Terminar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function findUniq(arr) {
    let array = []
    let array2 = []
    let str = ""
    for (let i = 0; i < arr.length; i++){
        array.push(arr[i].toLowerCase())
    }
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i]; i++){
            if(array[i][j] !== array[i+1][j] && (array[i][j] !== array[i+2][j] || array[i][j] !== array[i-1][j])){
                array2.push(arr[i])
            }
        }     
    }
    console.log(arr)
    console.log(array)
    console.log(array2)
    console.log(str)
    str = array2
    return str
}

findUniq(["asdf", "asdf", "GGGG", "asdf"])


                    //Sin terminar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!