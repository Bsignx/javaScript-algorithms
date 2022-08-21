const getFactorial = (n) => {
    let result = 1;


    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(getFactorial(5))

// Big O Notation: O(n)