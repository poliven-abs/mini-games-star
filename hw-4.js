console.log("task 1");

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

console.log("task 2");

let j = 1;
do {
    console.log(j);
    j++;
} while (j < 6);

console.log("task 3");

let k = 7;
do {
    console.log(k);
    k++;
} while (k < 23);

console.log("task 4");

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
}
for (const key in obj) {
    console.log(`Сотрудник ${key} - зарплата ${Number(obj[key])} долларов`);   
}

console.log("task 5");

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
    if (n < 50) {
        console.log(n);
        console.log(num);
        break;
    }
}

console.log("task 6");

let friday = 6;

while (friday >= 1 && friday <=31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}

