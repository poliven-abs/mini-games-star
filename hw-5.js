//task1//
function smallerNumber(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    }
}
console.log(smallerNumber(5, 8));
console.log(smallerNumber(10, 8));

//task2//
function parityNumber(p) {
    let numP = p % 2;
    if (numP == 0) {
        return numP = 'Число чётное';
    } else {
        return numP = 'Число нечётное';
    }
}
console.log(parityNumber(5));
console.log(parityNumber(10));

//task3//
function squareOne(x) {
    console.log(x ** 2);
}
squareOne(5);

function squareTwo(y) {
    return y = y ** 2;
}
console.log(squareTwo(6));


//task4//
let age = prompt('Введите свой возраст:');

function ageUser(num) {
    if (num < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (num >= 0 && num < 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}
ageUser(age);

//task5//

function numberCheck(numO, numT) {
    if (!isNaN(numO) == false || !isNaN(numT) == false) {
        console.log('Одно или оба значения не являются числом');
    } else {
        return numO * numT;
    }
}

numberCheck(10, 5);
numberCheck(10, 'hi');

//task6//
let number = Number(prompt('Введите число:'));

function parameterCheck(check) {
    if (!isNaN(check) == false) {
        return console.log('Переданный параметр не является числом');
    } else {
        let square = check * check;
        return console.log(`${check} в кубе равняется ${square}`);
    }
}

parameterCheck(number);

//task7//
function getArea() {
    let s = Math.PI * (this.radius ** 2);
    return console.log(s);
}

function getPerimeter() {
    let c = 2 * Math.PI * this.radius;
    return console.log(c);
}

const circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 15,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

circle1.getArea();
circle1.getPerimeter();

circle2.getArea();
circle2.getPerimeter();
