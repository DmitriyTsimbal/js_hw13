//Нехай X0=1; Xi=Xi-1+2i, де i=1,2...; Визначити x10. Розв'язати з використанням рекурсивних і нерекурсивних алгоритмів


const functionSolving = (num_i) => {
    let x_i;
    let x_i_1 = 1;
    if (num_i === 0) return 1
    else
        for (let x = 1; x <= num_i; x++) {
        x_i = x_i_1 + (2 * x);
        x_i_1 = x_i
    }
    return x_i
}

const recursiveFunctionSolving = (num_i) => {
    if (num_i === 0) return 1
    return recursiveFunctionSolving(num_i - 1) + (2 * num_i)
}


console.log(functionSolving(10))
console.log(recursiveFunctionSolving(10))