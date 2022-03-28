Array.prototype.remove_ = function(integer_list, values_list){
    let array = integer_list.filter(i => !values_list.includes(i))
    return array
}