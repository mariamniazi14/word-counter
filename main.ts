#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorful welcom message
console.log(chalk.bold.cyanBright("\n \t\t Mariam Niazi - Word Counter"));
console.log("=".repeat(60));

// prompt a user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:"
    }
]);

// Trimming the sentence and splitting it into words based on spaces
let words = answer.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));