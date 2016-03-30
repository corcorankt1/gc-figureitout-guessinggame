function guessIt(){
	var randomNum = Math.floor(Math.random()*10+1);
	var guessNum = prompt("Guess a number between 1 and 10!");
	
	while(guessNum !== randomNum){
		if(guessNum>randomNum){
			guessNum = prompt("Your number is too high!");
		} else if(guessNum<randomNum){
			guessNum = prompt("Your number is too low!");
		} else {
			guessNum = randomNum;
			return console.log("Congrats! That is the right number!");
		}
			
		}
	}
	
	guessIt();