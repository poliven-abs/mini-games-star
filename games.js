function gameRandom() {
    const numRandom = Math.floor(Math.random() * 100) + 1;
    console.log(numRandom);
    let userAnswer = Number(prompt('Введите число от 1 до 100'));

    while (userAnswer !== numRandom) {

        if (userAnswer < numRandom) {
            alert('Твоё число меньше загаданного! Попробуй ещё раз.');
            userAnswer = Number(prompt('Введите число снова:'));
        } else if (userAnswer > numRandom) {
            alert('Твоё число больше загаданного! Попробуй ещё раз.');
            userAnswer = Number(prompt('Введите число снова:'));
        }
    }

    if (userAnswer === numRandom) {
        alert('Молодец, ты угадал!');
    }
}

function gameArithmetic() {

    let ariX = Math.floor(Math.random() * 100);
    let ariY = Math.floor(Math.random() * 100);

    const ariOperations = ['+', '-', '*', '/'];
    let randomOperation = Math.floor(Math.random() * ariOperations.length);

    let decision = 0;

    switch (ariOperations[randomOperation]) {
        case '+':
            decision = ariX + ariY;
            break;
        case '-':
            decision = ariX - ariY;
            break;
        case '*':
            decision = ariX * ariY;
            break;
        case '/':
            let numCacl = ariX / ariY;
            const numRounding = (numCacl).toFixed(2);
            decision = parseFloat(numRounding);
            break;
        default:
            break;
    }

    //вывод для проверки
    console.log(ariX, ariY);
    console.log(randomOperation);
    console.log(decision);

    let userAnswer = Number(prompt(`Введите решение следующего арифиметического задания: ${ariX} ${ariOperations[randomOperation]} ${ariY}`));

    if (userAnswer == decision) {
        alert('Решение верное, поздравляю!');
    } else {
        alert('Решение неверное, увы')
    }
}

function gameText() {
    let userText = prompt('Введите текст для игры:');
    let newText = userText.split('').reverse().join('');

    alert(`Ваше слово ${userText} в перевёрнутом виде: ${newText}`)
}

function gameQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2 // номер правильного ответа
        }
    ];

    let correctAnswer = 0;

    for (let i = 0; i < quiz.length; i++) {
        let answerQuestion = Number(prompt(`Введите номер верного ответа на следующиq вопрос: \n${quiz[i].question}\n${quiz[i].options.join(' ')}`));
        if (answerQuestion == quiz[i]['correctAnswer']) {
            correctAnswer++;
        }
    }

    alert(`Количество ваших правильных ответов: ${correctAnswer}`);
}

function gameRSP() {
    const arrRSP = ["камень", "ножницы", "бумага"];
    let pcIndex = Math.floor(Math.random() * 3);

    const userOption = prompt('Давай сыграем: камень, ножницы или бумага? Введи свой вариант:');
    let userIndex = arrRSP.indexOf(userOption.toLowerCase());

    let wordCheck = arrRSP.includes(userOption.toLowerCase());

    if (wordCheck == false) {
        alert('Некорректно введен ответ');
    } else {
        if (pcIndex === userIndex) {
            alert('Упс! Ничья.');
        } else {
            if (pcIndex === 0 && userIndex === 1) {
                alert(`Победил компьютер с ответом "${arrRSP[pcIndex]}". А твой вариант был - "${arrRSP[userIndex]}"`);
            } else if (pcIndex === 1 && userIndex === 0) {
                alert(`Ты победил с вариантом "${arrRSP[userIndex]}"! А компьютер выбрал "${arrRSP[pcIndex]}".`);
            }
            if (pcIndex === 1 && userIndex === 2) {
                alert(`Победил компьютер с ответом "${arrRSP[pcIndex]}". А твой вариант был - "${arrRSP[userIndex]}"`);
            } else if (pcIndex === 2 && userIndex === 1) {
                alert(`Ты победил с вариантом "${arrRSP[userIndex]}"! А компьютер выбрал "${arrRSP[pcIndex]}".`);
            }
            if (pcIndex === 2 && userIndex === 0) {
                alert(`Победил компьютер с ответом "${arrRSP[pcIndex]}". А твой вариант был - "${arrRSP[userIndex]}"`);
            } else if (pcIndex === 0 && userIndex === 2) {
                alert(`Ты победил с вариантом "${arrRSP[userIndex]}"! А компьютер выбрал "${arrRSP[pcIndex]}".`);
            }
        }
    }

}
function gameColor() {
    const bgColorGames = document.querySelector('.games');
    const bgColorShort = document.querySelector('.short');
    const btnColor = document.querySelector('#btn-color');

    btnColor.addEventListener('click', () => {
        let colorR = Math.floor(Math.random() * 256);
        let colorG = Math.floor(Math.random() * 256);
        let colorB = Math.floor(Math.random() * 256);
    
        const rgbToHex = (r, g, b) => `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
        
        let color = rgbToHex(colorR, colorG, colorB);

        bgColorGames.style.backgroundColor = color;
        bgColorShort.style.backgroundColor = color;

    })
}
