//global variables
const min = 1;
const max = 4;
let player = 0;
let playerSelection = 0;
let playerScore = 0; 
let computerScore = 0; 
let tieScore = 0; 


//all functions
//generate random number for computer
function getRandomNum(min,max){
    let value = Math.floor(Math.random() * (max-min)) + min; 
        //console.log(value + " this at random num gen");
    return value;
}

function getComputerChoice(){
    let computer = getRandomNum(min,max);
    //1 = rock , 2 = paper, 3= scissor
    return computer;

}

function playRound(){
    
    result = "";

    let compChoice = getComputerChoice();
    //console.log(player + " this is player choice");

    switch(true){
    case (player == 1 && compChoice == 3):
        //console.log("rock beats scissor");
        result = "player wins, rock beats scissor";
            break;
            
        case(player == 1 && compChoice ==2 ):
            result = "computer wins, paper beats rock";
            break;

        case(player == 2 && compChoice == 1):
            //console.log("paper beats rock");
            result = "player wins, paper beats rock";
            break;

        case (player == 2 && compChoice == 3):
            result = "computer wins, scissors beat paper"
            break;

        case (player ==3 && compChoice == 2):
            result = "player wins, scissor beats paper";
            break; 

        case (player == 3 && compChoice == 1):
            //console.log("scissor beats paper");
            result = "computer wins, rock beats scissor";
            break; 

        default:
            result = "its a tie!"
        
    }
    return result
}

function game(){
    while(playerScore != 5 && computerScore != 5){
        let winner = "";
        //1 = rock , 2 = paper, 3= scissor
        if (playerSelection == "rock"){
            player = 1; 
        }
        else if (playerSelection == "paper"){
            player = 2;
        }
        else if(playerSelection == "scissor"){
            player = 3;
        }

        let sts = playRound(player);
        //console.log(sts + "---ici" );

        if(sts[0] == 'p'){
            playerScore += 1;
            winner = "You won this round!";
        }
        else if (sts[0] == 'c') {
            computerScore +=1;
            winner = "You lost this round!";
        }
        else{
            tieScore += 1;
            winner="It's a tie";
        }

        if(playerScore ==5 || computerScore ==5){
            gameOver();
        }

        console.log(playerScore, computerScore, tieScore);
        return winner
        }
    
}

function gameOver(){
    //hide existing btns
    btn_rock.style.display = 'none';
    btn_paper.style.display = 'none';
    btn_sci.style.display = 'none';
    //hide instruction
    instruction.style.display = 'none';

    //create new div and button 
    const game_result = document.createElement('div');
    const restart = document.createElement('button');

    restart.textContent = "Play Again";
    //styling 
    game_result.style.cssText = `
    padding:auto;
    text-align: center; 
    font-size: 20px;
    text-align: center;
    margin: auto;
    `;
/*     restart.style.cssText = `
    text-align: center; 
    margin: auto;
    `; */

    bodyElement.appendChild(game_result);
    bodyElement.appendChild(restart);

    if(playerScore == 5){
        game_result.textContent = "You Win!";
    }
    else{
        game_result.textContent = "The Computer Wins!";
    }

    restart.addEventListener('click', function(){
        window.location.reload();
        });
}


//create elements
//creating buttons
const btn_rock = document.createElement('button');
const btn_paper = document.createElement('button');
const btn_sci = document.createElement('button');
//creating new divs
const instruction = document.createElement('div');
const btn_div = document.createElement('div');
const resultDiv = document.createElement('div');

//btn text
btn_rock.textContent = "Rock";
btn_paper.textContent = "Paper";
btn_sci.textContent = "Scissor";


//query selector for finding elements
const bodyElement = document.querySelector('.container');
const score = document.querySelector('.score');

//all styling of Elements 
instruction.innerHTML = "Welcome to the game! <br> You will be facing off against the Computer. First to 5 wins.<br> Good Luck! <br>";

instruction.style.cssText = `
padding:20px;
text-align: center; 
font-size: 20px;
text-align: center;
margin: auto;
`;

btn_div.style.cssText = `
padding:20px;
text-align: center; 
font-size: 20px;
text-align: center;
margin: auto;
`;

resultDiv.style.cssText = `
padding:auto;
text-align: center; 
font-size: 20px;
text-align: center;
margin: auto;
`;

score.style.cssText = `
padding:20px;
text-align: center; 
font-size: 20px;
text-align: center;
margin: auto;
`;



//append buttons/label to body
bodyElement.prepend(instruction);
bodyElement.appendChild(btn_div);
btn_div.appendChild(btn_rock);
btn_div.appendChild(btn_paper);
btn_div.appendChild(btn_sci);
bodyElement.appendChild(resultDiv);
bodyElement.appendChild(score);


//btn functionality
//rock
btn_rock.addEventListener('click', function(){
playerSelection = 'rock';
const play = game();
resultDiv.textContent = play;
score.textContent = "Your score: " + playerScore + " Computer Score: " + computerScore;
});

//paper
btn_paper.addEventListener('click', function(){
playerSelection = 'paper';
const play = game();
resultDiv.textContent = play;
score.textContent = "Your score: " + playerScore + " Computer Score: " + computerScore;
}); 

//scissor
btn_sci.addEventListener('click', function(){
playerSelection = 'scissor';
const play = game();
resultDiv.textContent = play;
score.textContent = "Your score: " + playerScore + " Computer Score: " + computerScore;
});

