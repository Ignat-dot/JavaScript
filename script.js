"use strict";
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("YYYY-MM-DD", ""),
    firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    secondQuestion = prompt("Во сколько обойдется?", "");

let appData = {
    бюджет: money,
    timeData: time,
    expenses: {firstQuestion: secondQuestion},
    optionalExpenses: {}, 
    income: [],
    savings: false
};

alert("Ваш бюджет на 1 день: " + money/30);
console.log(appData);