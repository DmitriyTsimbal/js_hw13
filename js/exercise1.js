//Нехай X0=X1=1,Xi=Xi-1+2Xi-2 де i=2,3... ;Визначити Xn. Розв'язати з використанням рекурсивних і нерекурсивних алгоритмів


const functionSolving = (num_i) => {
    let num_i_2, num;
    let num_i_1 = num_i_2 = 1
    if (num_i <= 1 && num_i > -1) return 1
    else
        for (let i = 2; i <= num_i; i++) {
            num = num_i_1 + 2 * num_i_2
            num_i_2 = num_i_1
            num_i_1 = num
        }
    return num
}




const recursiveFunctionSolving = (num_i) => {
    if (num_i <= 1 && num_i > -1) return 1
    return recursiveFunctionSolving(num_i - 1) + (2 * recursiveFunctionSolving(num_i - 2))
}


document.write(`<p>Answer 1: ${functionSolving(4)}</p>`)
document.write(`<p>Answer 2: ${recursiveFunctionSolving(4)}</p>`)