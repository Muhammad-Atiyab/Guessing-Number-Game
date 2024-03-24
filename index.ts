#! /usr/bin/env node
import inquirer from "inquirer";
// generate number from computer
// take input from user
// compare and show result
const randomNumber = Math.floor(Math.random() * 10 + 1); // computer will generate 1 to 10 numbers
const answers = await inquirer.prompt([
  {
    name: "guessedNumber",
    type: "number",
    message: "Please guess a number from 1 to 10:",
  },
]);
if (answers.guessedNumber === randomNumber) {
  console.log("Congrats! You guessed the right number");
} else {
  console.log("Oh No! Try again");
}
