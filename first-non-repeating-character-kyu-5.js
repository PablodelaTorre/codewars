function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++){
    var x = s.charAt(i)
    if (s.indexOf(x) == i && s.indexOf(x, i + 1) == -1) {
        return x;
    }
    }
    return "";
}