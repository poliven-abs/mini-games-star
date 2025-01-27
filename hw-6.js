//task1//
const taskOne = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < taskOne.length; i++) {
    console.log(taskOne[i]);
    if (taskOne[i] == 10) break;
}

//task2//
const taskTwo = [1, 5, 4, 10, 0, 3];
console.log(taskTwo.indexOf(4));

//task3//
const taskThree = [1, 3, 5, 10, 20];
console.log(taskThree.join(' '));

//task4//
const taskFour = [];
const taskFourN = [];

for (let i = 0; i < 3; i++) {
    taskFour[i] = taskFourN;
    for (let i = 0; i < 3; i++) {
        taskFourN[i] = 1;
    }
}
console.log(taskFour);

//task5//
const taskFive = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    taskFive.push(2);
}
console.log(taskFive);
//task6//
const taskSix = [9, 8, 7, 'a', 6, 5];
taskSix.sort();

const taskSixN = taskSix.filter(i => isNaN(i) == false);
console.log(taskSixN);

//task7//
const taskSeven = [9, 8, 7, 6, 5];
let userNum = Number(prompt('Угадай число в массиве'));
if (taskSeven.includes(userNum) == true) {
    alert('Угадал!');
} else {
    alert('Увы, не угадал.');
}

//task8//
const taskEight = 'abcdef';
console.log(taskEight.split('').reverse().join(''));

//task9//
const taskNine = [[1, 2, 3], [4, 5, 6]];

const allNine = [...taskNine[0], ...taskNine[1]];

console.log(allNine);

//task10//
const taskTen = [...Array(10)];

function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
for (let i = 0; i < taskTen.length; i++) {
    taskTen[i] = numRandon(1, 20);
}

const newTen = [];
for (let i = 0; i < taskTen.length; i++) {
    if (i < taskTen.length - 1) {
        newTen[i] = taskTen[i] + taskTen[i + 1];
    } else {
        newTen[i] = taskTen[i];
    }
}

console.log(taskTen);
console.log(newTen);

//task11//
const taskEl = [...Array(5)];

function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
for (let i = 0; i < taskEl.length; i++) {
    taskEl[i] = numRandon(1, 10);
}

const newEl = taskEl.map(i => i ** 2)

console.log(taskEl);
console.log(newEl);

//task12//
const taskTwl = [['кот', 'собака', 'попугай'], ['белый', 'черный', 'зеленый']];


const taskTwlT = [...taskTwl[0], ...taskTwl[1]];
const taskLen = taskTwlT.map(i => i.length);

console.log(taskLen);



//task13//
const taskTht = [...Array(5)];

function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
for (let i = 0; i < taskTht.length; i++) {
    taskTht[i] = numRandon(-10, 10);
}

console.log(taskTht);
console.log(taskTht.filter(i => i < 0));

//task14//
const taskFrt = [...Array(10)];

function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
for (let i = 0; i < taskFrt.length; i++) {
    taskFrt[i] = numRandon(0, 10);
}

const newFrt = [];

for (let i = 0; i < taskFrt.length; i++) {
    if (taskFrt[i] % 2 == 0) {
        newFrt.push(taskFrt[i]);
    }
}

console.log(taskFrt);
console.log(newFrt);

//task15//
const taskFft = [...Array(6)];

function numRandon(i, j) {
    i = Math.ceil(i);
    j = Math.floor(j);
    return Math.floor(Math.random() * (j - i + 1)) + i;
}
for (let i = 0; i < taskFft.length; i++) {
    taskFft[i] = numRandon(0, 10);
}

const sumFft = taskFft.reduce((all, num) => all + num, 0);

console.log(sumFft / taskFft.length);

