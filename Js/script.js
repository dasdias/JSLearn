'use strict';

let money = prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    
    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let spending1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = prompt("Во сколько обойдется?", ""),
    spending3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer4 = prompt("Во сколько обойдется?", "");
    
    appData.expenses.spending1 = answer2;
    appData.expenses.spending3 = answer4;
    
alert('Бюджжет на день: ' + appData.budget / 30 + ' руб');