/**
 * Recursively get the sum of an array. The base cases are array lengths of
 * zero or one, the recursive case is popping one element from the array and
 * adding that to the resulting array.
 */
function recursiveSum(array) {
    if (array.length == 0) {
        return 0;
    }

    return array.length == 1
        ? array[0]
        : array.pop() + recursiveSum(array);
}

console.log(recursiveSum([2, 3, 4]));

/**
 * Recursively get the length of an array. The base case is if the array is
 * empty, the recursive case is slicing the array, effectively removing the
 * first item.
 */
function recursiveLength(array) {
    return array[0] == undefined
        ? 0
        : 1 + recursiveLength(array.slice(1));
}

console.log(recursiveLength([1, 2, 3, 4, 5]));

/**
 * Recursively find the highest number in an array. The bases cases are array
 * lengths of zero or one, the recursive case is finding the highest number
 * between the item popped from the array, and the returned value from the
 * function.
 */
function recursiveFindMax(array) {
    if (array.length === 0) {
        return 0;
    }

    if (array.length === 1) {
        return array[0];
    }

    return Math.max(array.pop(), findMax(array));
}

console.log(recursiveFindMax([5, 2, 8, 4, 10]));
