//task1

const peopleOne = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(peopleOne.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));

//task2
function isPositive(a) {
    if (a > 0) {
        return a;
    }
}
function isMale(a) {
    if (a.gender == 'male') {
        return a;
    }
}
function filter(a, b) {
    const peopleFilter = [];
    for (let i = 0; i < a.length; i++) {
        peopleFilter.push(b(a[i]));
    }
    return peopleFilter.filter(item => item != null);;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleTwo = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleTwo, isMale));

//task3
let dataThree = new Date();
const timerCheck = (retorn) => {
    let dataThree = new Date();
    console.log(dataThree);
    let step = retorn
    const interval = setInterval(() => {
        step -= 3000;
        let dataThree = new Date();
        console.log(dataThree);
        console.log(step);
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, retorn + 1000);

}

const timerThree = 30000;
timerCheck(timerThree);

//task4
function delayForSecondOne(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecondOne(function () {
    console.log('Привет, Глеб!');
})

//task5
function delayForSecondTwo(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecondTwo(() => {
    setTimeout(sayHi, 1000, 'Глеб');
});

