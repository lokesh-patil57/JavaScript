let id = setInterval(() => {
    console.log('Lucky');
    
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);