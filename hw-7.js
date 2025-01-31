//task1
const taskOne = 'js';
console.log(taskOne.toUpperCase());

//task2
const taskTwo = ['hello', 'hi honey', 'hi', 'hello darlng', 'hi friend'];
const searchWord = 'hi';
const taskTwoN = [];

taskTwo.forEach(i => {
    if (i.toLowerCase().startsWith(searchWord.toLowerCase())) {
        console.log(i);
        taskTwoN.push(i);
    }
});

console.log(taskTwoN);

//task3
let taskThree = 32.58884;
console.log(Math.floor(taskThree), Math.ceil(taskThree), Math.round(taskThree));

//task4
const taskFour = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...taskFour), Math.max(...taskFour));

//task5
function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}

console.log(numRandon(1, 10));

//task6
function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}

let randomSix = [];

function taskSix(i) {
    let numSix = numRandon (0, i);
    randomSix.length = Math.floor(numSix / 2)

    for (let j = 0; j < randomSix.length; j++) {
        randomSix[j] = numRandon(0, numSix);
    }
}

taskSix(50);

console.log(randomSix);

//task7
function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}

//вывод для проверки
let sevenOne = Math.floor(Math.random() * 100);
let sevenTwo = Math.floor(Math.random() * 100);

console.log(sevenOne, sevenTwo);

function taskSeven(a, b) {
    if (a > b) {
        return numRandon(a, b);
    } else {
        return numRandon(b, a);
    }
}

let randomSeven = taskSeven(sevenOne, sevenTwo);
console.log(randomSeven);

//task8
let dateEight = new Date();
console.log(dateEight);

//task9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//task10
const daysTen = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const monthsTen = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

let dateTen = new Date();
console.log(dateTen);

let textTen = "Дата: " + dateTen.getDate() + " " + monthsTen[dateTen.getMonth()] + " " + dateTen.getFullYear() + " - это " + daysTen[dateTen.getDay()] + "." + "\nВремя: " + dateTen.getHours() + ":" + dateTen.getMinutes() + ":" + dateTen.getSeconds();

console.log(textTen);
