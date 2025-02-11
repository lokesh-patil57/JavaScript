let a = [1,2,3,4,5,6]
let d = [13,14,15,16]
let b = [7,8,9]
let c = [12,11,10]
console.log(a)
delete a[5]
console.log(a)
console.log(a[5])
console.log("The element at that index is deleted but but the space is allocated and ist empty")
console.log(b.concat(c,d))
console.log(d.splice(0,2))
console.log(c.sort())

const greaterthanthree = (e)=>{
    if (e>3) {
        return true
    }
    return false
}

console.log(a.filter(greaterthanthree))

let newarr = [1,2,3,4,5]
let add = (a,b)=> {
    return a+b
}
console.log(newarr.reduce(add))