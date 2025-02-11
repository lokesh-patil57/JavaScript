console.log("Hey this is Javascript starting")
// var cn be updated and redeclare
// once Var is declared it cannot obtain its previous value but can be again redeclared globally.
var a = 2
var b = 3
var c = "Lokesh"
var d = true
// numerical value before variable is not alloewd
//var 55e =  8

console.log(a+b+8)
console.log(typeof a, typeof b, typeof c, typeof d)

const a1 = 2
// const cannot be updated
// a1 = a1+3


// Let cannot be redeclared but cand be updated 
let f= 3
let g= 4
console.log(f)
{
    // let can be updated in corresponding block and contain the value within the block
    let f = 66
    console.log(f)
}
// once the block is ended let value is returned to its previous value
console.log(f)
//let cannot be redeclare
// let g = 5
// console.log(g)

//Primitive Data types
let w = 4
let x = 4.3
let y = "Lucky"
let z = true
let p = undefined
let q = null
console.log(w,x,y,z,p,q)
console.log(typeof w,typeof x,typeof y,typeof z,typeof p,typeof q)

// to create and an object in JS
let o = {
    name : "loki bhai",
    "job code" : 5600
}
console.log(o)
// to add items in JS object 
o.salary = "10 crore"
console.log(o)
o.salary = "100 crore"
console.log(o)