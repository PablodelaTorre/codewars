function domainName(url){
    let arr = url.split("/")
    console.log(arr)
    let array = []
    let arrNom = []
    let arrSinPunto = []
    let str = ""
    let prefijo = "www"
    for(let i = 0; i < arr.length; i++){
        if (arr[i].includes(".")){
            array.push(arr[i])
        }
    }
    arrNom = array.join("")
    console.log(arrNom)
    arrSinPunto = arrNom.split(".")
    for (let i = 0; i < arrSinPunto.length; i++){
        if(!arrSinPunto[i].includes(".","/") && arrSinPunto[i]!==prefijo){
            str = arrSinPunto[i]
            break
        }
    }
    
    console.log(str)
    return str 
}

domainName("http://github.com/carbonfive/raygun")