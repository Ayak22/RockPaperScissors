
//Step 1:
//Folder structure set up - confirm the below runs
console.log("Hello World!");
//DONE

//Step 2:
//Create new function called getComputerChoice
//function randomly returns "rock", "paper" or "scissors" as string
//Math.random will generate a random number, can this be used and converted to string?
//Console.log the function

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
//Generates either 0, 1 or 2 randomly

let computerChoice = 0

//If result of getRandomInt is 0, computerChoice is "Rock"
//If result of getRandomInt is 1, computerChoice is "Paper"
//If result of getRandomInt is 2, computerChoice is "Scissors"