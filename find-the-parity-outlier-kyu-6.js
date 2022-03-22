function findOutlier(integers){
    let even = integers.filter((a)=> {
        return a%2 == 0
    })
    let odd = integers.filter((a)=>{
        return a%2 !== 0
    })
    return even.length==1? even[0] : odd[0]
}