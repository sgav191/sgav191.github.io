var crossplay = true;
var noughtssquares = "" 
var crossessquares = ""
var winningcombs = ['abc','def','ghi','jkl','adg','beh','cfi','aei','ceg'];
var winner = ""
function tappedSquare(id){
	var button = document.getElementById(id);
	if (button.className == "button inactive"){
		if(crossplay){
			button.className = "button cross";
			button.innerHTML = "X";
			crossessquares += id
			checkForAWinner();
		}else {
			button.className = "button nought";
			button.innerHTML = "0";
			noughtssquares += id
			checkForAWinner();
		}
			crossplay = !crossplay;
	}
	else {
		return;
	}	
}


function reset(){
	console.log("reset");
	var buttons = document.getElementsByClassName("button");
	for(var i=0; i < buttons.length; i++){
		buttons[i].className = "button inactive";
		buttons[i].innerHTML = "";
	}
	crossessquares = ""
	noughtssquares = ""
	winner = ""
}

function containsEveryLetter(testString, smallString){

	for (const letter of smallString){
		if (testString.includes(letter)){
			continue;
		} else {
			return false;
		}
	}
	return true;
}

function hasWon(playerString){
// 	go through every winning line to see if it occurs in noughts or crosses squares
	for (const line of winningcombs) {
		if (containsEveryLetter(playerString, line)){
			return true;
		} else {
			continue;
		}
	}
	return false;
}

// control functions
function checkForAWinner(){
// check to see if noughts or crosses has won
//  if so then ...???
	if (hasWon(noughtssquares)){
		winner = "noughts";
		displaywinner("noughts");
	} else if (hasWon(crossessquares)) {
		winner = "crosses";
		displaywinner("crosses");
	}
	
}

function displaywinner(winner){
	winnertext = document.getElementById('winner');
	winnertext.innerHTML = "Winner is: " + winner;
}