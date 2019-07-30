'use strict';

let money = prompt("Ваш бюджет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    // console.log(money == null);
    // console.log(typeof(money));
    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let i = 0;
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

do  {
    let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
        answer = +prompt("Во сколько обойдется?", "");
            if( (typeof(spending)) === 'string' && spending != null && answer != null && spending != '' && answer != '' && spending.length < 50) {
                appData.expenses[spending] = answer;
            } else {
                alert('Поля не должны быть пустыми \n и не превышать 50 символов.');
                i--;
            }
            i++;  
} while ( i < 2);

// for(let i = 0; i < 2; i++) {
//     let spending = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answer = +prompt("Во сколько обойдется?", "");
//     if( (typeof(spending)) === 'string' && spending != null && answer != null && spending != '' && answer != '' && spending.length < 50) {
//         appData.expenses[spending] = answer;
//     } else {
//         alert('Поля не должны быть пустыми \n и не превышать 50 символов.');
//         i--;
//     }
// }
appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log('Средний уровень достатка.');
} else if ( appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка.');
} else {
    console.log('Произошла ошибка.');
}
    
console.log(appData.expenses);
alert('Бюджжет на день: ' + appData.moneyPerDay + ' руб');