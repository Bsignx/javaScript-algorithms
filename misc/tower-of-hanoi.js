function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n == 1) {
        console.log("Move disk 1 from rod " + fromRod + " to rod " + toRod);
        return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log("Move disk " + n + " from rod " + fromRod + " to rod " + toRod);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

console.log(towerOfHanoi(2, "A", "C", "B"));

// Big O of towerOfHanoi is O(2^n)