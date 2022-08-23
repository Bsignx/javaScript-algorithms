function recursiveBinarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    return recursiveBinarySearchHelper(arr, target, low, high);
}

function recursiveBinarySearchHelper(arr, target, low, high) {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return recursiveBinarySearchHelper(arr, target, mid + 1, high);
    } else {
        return recursiveBinarySearchHelper(arr, target, low, mid - 1);
    }
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7], 7));

// Big O Notation: O(log n)