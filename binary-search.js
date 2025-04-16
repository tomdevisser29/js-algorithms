/**
 * Uses the binary search algorithm to find an item in a sorted array. If the
 * item is found, it returns its position.
 */
function binarySearch(sortedArray, item) {
    let leftBound = 0;
    let rightBound = sortedArray.length - 1;

    while (leftBound <= rightBound) {
        let middle = parseInt((leftBound + rightBound) / 2);
        let guess = sortedArray[middle];

        if (guess === item) {
            return middle;
        } else if (guess > item) {
            rightBound = middle - 1;
        } else {
            leftBound = middle + 1;
        }
    }

    return null;
}

const sortedArray = [1, 2, 4, 8, 16];
console.log(binarySearch(sortedArray, 8));
