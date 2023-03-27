//З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Перекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

const FIRST_WORD = 'Window'.toLowerCase();
const SECOND_WORD = 'Fire'.toLowerCase();
const THIRD_WORD = 'Seven'.toLowerCase();
const userInp = (message) => {
    let userInput;
    while (true) {
        userInput = prompt(message);
        if (userInput === null) {
            return null;
        }
        if (userInput.length !== 1) {
            alert('Invalid input')
        } else return userInput.toLowerCase()
    }
}

const getWordLetter = (word) => {
    let letterIndex = 0;

    function wordNextLetter() {
        if (letterIndex === word.length) letterIndex = 0
        letterIndex++
        return word[letterIndex - 1]
    }

    return wordNextLetter
}


const getTranslatorGame = (word, wordDescription) => {
    const LETTER = getWordLetter(word)
    alert(wordDescription)
    let userLetter, guessedLetterCounter = 0;
    for (let i = 1; i <= word.length; i++) {
        userLetter = userInp(`Enter a ${ i } letter`)
        if (userLetter === LETTER())
            guessedLetterCounter++
    }
    return guessedLetterCounter
}

document.write(`<p>Guessed letters for first word: ${ getTranslatorGame(FIRST_WORD, 'I am always in front of you, ' +
    'but you cannot see me. I help you to see things clearly, but only if you look through me. What am I?') }</p><hr>
<p>Guessed letters for second word: ${ getTranslatorGame(SECOND_WORD, 'I am not alive, but I grow; ' +
    'I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?') }</p><hr>
<p>Guessed letters for third word: ${ getTranslatorGame(THIRD_WORD, 'I am an odd number. Take away a letter and I become even. What number am I?') }</p>`)