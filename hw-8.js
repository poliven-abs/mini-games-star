//task1

const peopleOne = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(peopleOne.sort((a, b) => a.age - b.age));

//task2
function isPositive(number) {
    if (number > 0) {
        return number;
    } else {
        return false;
    }
}
function isMale(people) {
    if (people.gender == 'male') {
        return people;
    } else {
        return false;
    }
}
function filter(arr, arrNew) {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arrNew(arr[i])  != false) {
            filterArr.push(arrNew(arr[i]));
        }
    }
    return filterArr;
}


console.log(filter([3, -4, 1, 9], isPositive));

const peopleTwo = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleTwo, isMale));

//task3
const timerCheck = (retorn) => {
    let step = retorn
    const interval = setInterval(() => {
        step -= 1000;
        let dataThree = new Date();
        let timeAll = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
        console.log(dataThree.toLocaleTimeString(timeAll));
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
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

