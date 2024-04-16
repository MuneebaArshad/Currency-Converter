#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount",
    }
]);
//Dynamic approach
let fromAmount = currency[userAns.from]; //exchange rate
let toAmount = currency[userAns.to]; //exchange rate
let Amount = userAns.amount;
let baseAmount = Amount / fromAmount; //use base curency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
