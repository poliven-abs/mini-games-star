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