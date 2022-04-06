const snail = function(array) {
    let arr = [];
    while (array.length) {
        arr.push(...array.shift());
        array.map(x => arr.push(x.pop()));
        array.reverse().map(x => x.reverse());
    }
    return arr;
}