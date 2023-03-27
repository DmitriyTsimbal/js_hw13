//Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const sumSimulator = () => {
    let firstRandomNum, secondRandomNum, numbersSum, userAnswer;
    setInterval(() => {
        firstRandomNum = getRandomNumber(1, 10000);
        secondRandomNum = getRandomNumber(5, 50000);
        numbersSum = firstRandomNum + secondRandomNum;
        alert(`Solve this math operation: ${ firstRandomNum } + ${ secondRandomNum }`);
        userAnswer = parseInt(prompt('Enter a answer: '));
        (userAnswer === numbersSum) ? alert('That\'s right') : alert('Wrong answer')
    }, 10000)
}


sumSimulator()
