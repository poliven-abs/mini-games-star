// task 1 //
let password = 'hello';

let youPassword = prompt('Введите пароль');
if (password === youPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// task 2 //
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

//проверка//
let c1 = 10;
if (c1 > 0 && c1 < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}
let c2 = 0 - 3;
if (c2 > 0 && c2 < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}
let c3 = 2;
if (c3 > 0 && c3 < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

// task 3 //
let d = 108;
let e = 27;

if (d > 100 || e > 100) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

// task 4 //
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// task 5 //

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default: console.log('Ошибка ввода');
        break;
}
