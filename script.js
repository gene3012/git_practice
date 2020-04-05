let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:



const generateTarget = ()=>{
    return Math.floor(Math.random()*10);
}
/**const compareGuesses=(humanGuess,computerGuess,secretNum)=>
{
        const compareHumanInput = Math.abs(secretNum-humanGuess);
        const compareComputerInput = Math.abs(secretNum-computerGuess);
        return compareHumanInput<=compareComputerInput;
}**/


const getAbsoluteDistance=(humanGuess,computerGuess)=>
{
        const getTarget=generateTarget();
        const compareHumanInput = Math.abs(getTarget-humanGuess);
        const compareComputerInput = Math.abs(getTarget-computerGuess);
        return(compareHumanInput,compareComputerInput);
        //return compareHumanInput<=compareComputerInput;
}
const compareGuesses=(compareHumanInput,compareComputerInput)=>
{
        return compareHumanInput<=compareComputerInput;
}

//getAbsoluteDistance(1,2);
//console.log(compareGuesses(3,2,1));

const updateScore= score =>
{
    if (score === 'human'){
       humanScore+=1;
 //       return(console.log(`humans score is ${humanScore}`));
    }else {
        computerScore+=1;
 //       return (console.log(`computer score is ${computerScore}`));
    }
}
//updateScore('human');

const advanceRound=()=> currentRoundNumber+=1;

