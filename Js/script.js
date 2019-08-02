// 'use strict';
let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    while ( isNaN(money) || money == null || money.trim() == "" ) {
        money = prompt("Ваш бюджет на месяц?","");
    }
}
// start();
   
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    shooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
                answer = +prompt("Во сколько обойдется?", "");
            if( (typeof(spending)) === 'string' && spending != null && answer != null && spending != '' && answer != '' && spending.length < 50) {
                appData.expenses[spending] = answer;
            } else {
                alert('Поля не должны быть пустыми \n и не превышать 50 символов.');
                i--;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Бюджжет на день: ' + appData.moneyPerDay + ' руб');
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка.');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log('Средний уровень достатка.');
        } else if ( appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка.');
        } else {
            console.log('Произошла ошибка.');
        }
    },
    chooseOptExpenses: function() {
        for ( i = 0; i < 3; i++) {
            let optionalSpending = prompt("Статья необязательных расходов?","");
            let optionalSpendingSumm = +prompt("Какая стоимость этих расходов?","");
            appData.optionalExpenses[optionalSpending] = optionalSpendingSumm;
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?",""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save / 100 /12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)","");
        console.log(isNaN(items));
        if (typeof(items) != 'string' || items == null || items.trim() == "" || !isNaN(items)) {
            console.log('Нельзя оставить поле пустым, вводить числа или отменить вопрос.');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что то ещё?'));
            appData.income.sort();
        }
        appData.income.forEach((key, item) => {
            console.log("Способы доп. заработка: " + (item + 1) + ") - " + key);
        });
    }
};

for (const key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - "  + appData[key] );
}

let x = 5; alert( x++ );
// let i = 0;
// while (i < 2) {
//     let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             answer = +prompt("Во сколько обойдется?", "");
//         if( (typeof(spending)) === 'string' && spending != null && answer != null && spending != '' && answer != '' && spending.length < 50) {
//             appData.expenses[spending] = answer;
//         } else {
//             alert('Поля не должны быть пустыми \n и не превышать 50 символов.');
//             i--;
//         }
//         i++;
// }

// do  {
//     let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answer = +prompt("Во сколько обойдется?", "");
//             if( (typeof(spending)) === 'string' && spending != null && answer != null && spending != '' && answer != '' && spending.length < 50) {
//                 appData.expenses[spending] = answer;
//             } else {
//                 alert('Поля не должны быть пустыми \n и не превышать 50 символов.');
//                 i--;
//             }
//             i++;  
// } while ( i < 2);

// console.log(appData.expenses);

