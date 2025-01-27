function gameRandom() {
    const numRandom = Math.floor(Math.random() *100) +1;
    console.log(numRandom);
    let userAnswer = Number(prompt('Введите число от 1 до 100'));

    while (userAnswer !== numRandom) {

        if (userAnswer < numRandom) {
            alert ('Твоё число меньше загаданного! Попробуй ещё раз.');
            userAnswer = Number(prompt('Введите число снова:'));
        } else  if (userAnswer > numRandom) {
            alert ('Твоё число больше загаданного! Попробуй ещё раз.');
            userAnswer = Number(prompt('Введите число снова:'));
        }
    }

    if (userAnswer === numRandom) {
        alert('Молодец, ты угадал!');
    }
}

function gameArithmetic() {
    let arrNumber = [];
        for (let i = 0; i < 101; i++) {
            arrNumber.push(i);    
        }

    const ariOperations = ['+', '-', '*', '/'];

    
    
}