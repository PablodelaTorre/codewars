function solve(a,b){
    if(a===b){
        return true
    }else{
        return new RegExp(`^${a.replace(/\*/g, '(.)*')}$`, '').test(b)
    }
}