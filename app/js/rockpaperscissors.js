////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
   return move = move || getInput();

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     /* Your Expression */
}

function getComputerMove(move) {
    return move = move || randomPlay();
  }

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE  */
        if (playerMove == "rock" && computerMove == "scissors"){
            winner = "player"
            console.log("Player Wins!");
        } else if (playerMove == "scissors" && computerMove == "rock") {
            winner = "computer"
            console.log("Computer Wins!");
        } else if (playerMove === "paper" && computerMove == "rock") {
            winner = "player"
            console.log("Player Wins!");
        } else if (playerMove == "rock" && computerMove == "paper") {
            winner = "computer"
            console.log("Computer Wins!");
        } else if (playerMove == "scissors" && computerMove == "rock") {
            winner = "computer"
            console.log("Computer Wins!")
        } else if (playerMove == "scissors" $$ computerMove == "paper") {
            winner = "player"
            console.log("Player Wins!")
        } else {
            winner = "Tie"
            console.log("Tie");
            }

    return winner;
}


function playToFive() {
    
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */

  while (playerWins < 5 && computerWins < 5) {
    console.log('Player chose' + playerMove + 'while Computer chose' + computerWins);
  } else if (computerWins +=1) {
    console.log ('The score is currently ' + playerWins + ' to ' + computerWins)
  }
  else {
  playerWins && computerWins; 
  console.log('Player' + playerWins = ' '  + 'Computer' + computerWins);
  }
return [playerWins, computerWins];
}
























