function isValidIP(str) {
    let regExp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/
    return regExp.test(str)
}