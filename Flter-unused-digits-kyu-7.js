const unusedDigits = (...arr) => {
    let list = [0,1,2,3,4,5,6,7,8,9]
    let nums = arr.join('')
    const arr2 = list.filter(i => { return !nums.includes(i)}).join('')
    return arr2
}