let favanime = "Naruto" 
let guess = prompt("Enter My Favourite Anime Name")
while (guess != favanime ) {
    if (guess == "quit"  ) {
        console.log('You Quit');
        break
    }
    console.log('Wrong');
    guess = prompt("Wrong Guess Please try again")
}

if (guess == favanime) {
    alert('Congrats!!!');
    
}