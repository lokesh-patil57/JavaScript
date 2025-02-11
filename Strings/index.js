console.log("This Is toutorial for Strings")
console.log("Strings Are imutable we cannot change the strings but we can upgrade it")
let a = "Harry"
console.log(a)
// to access the character on some location
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)

// Template literals 
let b = "lucky" 
console.log("My name is " + a + " and my friend name is " +b)
console.log(`My name is ${b} and my friend name is ${a} `)

// Escape sequence charater 
console.log(b.toUpperCase())
console.log(b.toLowerCase())

// Slicing the string
console.log(b.slice(1,4))

// Replace the string
console.log(b.replace("luc", "577"))

//to add in String or combine teo string
console.log(b.concat (a))
console.log(b.concat(a, "and"))