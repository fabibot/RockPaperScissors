const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
let scoreTracker = [0, 0];



let playerChoice;
rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    scoreTracker =  gestionScore(scoreTracker, playRound(playerChoice));

});

paperButton.addEventListener("click", () => {
    playerChoice = "paper";
    scoreTracker =  gestionScore(scoreTracker, playRound(playerChoice));
   

});

scissorsButton.addEventListener("click", () => {
    playerChoice = "scissors";
    scoreTracker =  gestionScore(scoreTracker, playRound(playerChoice));
   

});
    

const DOMcomputerChoice = document.querySelector('#computerChoice');
let choicesList = ["rock", "paper", "scissors" ];
function getComputerChoice() {
    let indexChoice = Math.floor(Math.random() * choicesList.length);
    let choice = choicesList[indexChoice];
    DOMcomputerChoice.textContent = choice;
    return choice;
};



const DOMroundResult = document.querySelector("#roundResult");
function playRound (playerSelection){
    let computerSelection = getComputerChoice();
    let roundResult;
    let addScoreTracker = [];
    if( computerSelection == playerSelection){
        roundResult = "Egality ! Play again ";
        addScoreTracker = [ 0, 0 ];
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        roundResult = "You win ! Scissors beats paper."
        addScoreTracker = [1 , 0];
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        roundResult = "You win ! Paper beats rock.";
        addScoreTracker = [1, 0];
    }
    if (playerSelection == "rock" && computerSelection == "scissors"){
        roundResult = "You win ! Rock beats scissors."
        addScoreTracker = [1, 0];
    }
    if (computerSelection == "scissors" && playerSelection == "paper"){
        roundResult = "You lose... Scissors beats paper."
        addScoreTracker = [0, 1];
    }
    if (computerSelection == "paper" && playerSelection == "rock"){
        roundResult = "You lose... Paper beats rock."
        addScoreTracker = [0, 1];
    }
    if (computerSelection == "rock" && playerSelection == "scissors"){
        roundResult = "You lose... Rock beats scissors."
        addScoreTracker = [0, 1];
    }
    DOMroundResult.textContent = roundResult;
    console.log(roundResult);

    return addScoreTracker;
}

const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');

const backcolor = document.querySelector('body');
function gestionScore (currentScore, scoreToAdd){
    let newScore = currentScore;
    console.log(scoreToAdd);
    newScore[0] = currentScore[0] + scoreToAdd[0];
    newScore[1] = currentScore[1] + scoreToAdd[1];
    console.log(newScore);
    playerScore.textContent = " Player : " + newScore[0];
    computerScore.textContent = "Computer : " + newScore[1];
    if(newScore[0] == 5){
        backcolor.style.backgroundColor = "green";
        backcolor.textContent = "YOU WIN !!!!";
        backcolor.style.fontSize = "200px";
        console.log("end of the game");
    } else if(newScore[1] == 5) {
        backcolor.style.backgroundColor = "red";
        backcolor.textContent = "Looser...";
        backcolor.style.fontSize = "200px";
    }
    return newScore;
}



