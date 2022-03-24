function duplicateCount(text){
    let textMin = text.toLowerCase()
    let arr = textMin.split('').sort()  
    let str = arr.join('')
    return (str.match(/([^])\1+/g) || []).length;
}

