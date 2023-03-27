//З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.


const getMonthNumber = (minNum, maxNum) => {
    let count = 0;
    function getCount() {
        if (count > maxNum) count = minNum
        return count++
    }

    return getCount
}


//Just a test
const getMonthName = (num) => {
    let result = '';
    switch (num) {
        case 0:
        case 1:
        case 11:
            result = 'Winter';
            break;
        case 2:
        case 3:
        case 4:
            result = 'Spring';
            break;
        case 5:
        case 6:
        case 7:
            result = 'Summer';
            break;
        case 8:
        case 9:
        case 10:
            result = 'Autumn';
            break;
    }
    return result
}

const cycleFunc = () => {
    const MONTH_COUNTER = getMonthNumber(0, 11)
    for (let i = 0; i < 20; i++) { //+19 to counter
        MONTH_COUNTER()
    }
    return MONTH_COUNTER() //+1 to counter
}
document.write(getMonthName(cycleFunc()))
