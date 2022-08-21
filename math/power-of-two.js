function isPowerOfTwo(n) {
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1021));

// Big O Notation: O(1)