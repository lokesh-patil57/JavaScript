console.log("Initializing JS")

let boxes = document.querySelector(".container").children

function getRandomColor(){
    // ceil is the method to retuen the smallest Integer if 
    // 4.25 =  5 or 5.69 = 6
    let val1 = Math.ceil(0+ Math.random()*255)
    let val2 = Math.ceil(0+ Math.random()*255)
    let val3 = Math.ceil(0+ Math.random()*255)
    return `rgb( ${val1} , ${val2} , ${val3} )`
}

Array.from(boxes).forEach( e=>{
    e.style.backgroundColor = getRandomColor()
    // e.style.color = getRandomColor()
})