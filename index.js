#! /usr/bin/env node
import inquirer from "inquirer";
let currency_rates = {
    USD: 1,
    PKR: 281,
    SAR: 3.75,
    UAED: 3.67,
    PND: 0.8,
};
console.clear();
const converter = await inquirer.prompt([
    {
        name: "From",
        message: "From which currency you want to convert: ",
        type: "list",
        choices: Object.keys(currency_rates),
    },
    {
        name: "To",
        message: "To which currency you want to convert: ",
        type: "list",
        choices: Object.keys(currency_rates),
    },
    {
        name: "Amount",
        message: "Please enter the amount you want to convert: ",
        type: "number",
    }
]);
let From_Factor = currency_rates[converter.From];
let To_Factor = currency_rates[converter.To];
let result = converter.Amount / From_Factor * To_Factor;
let result_round = Number(result.toFixed(4));
console.log(converter.Amount, converter.From, " are equievalent to ", result_round, converter.To);
