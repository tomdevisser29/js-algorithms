/**
 * Find the smallest number in an array.
 */
function findSmallest(array) {
    let smallest = array[0];
    let indexOfSmallest = 0;

    // We can start at index 1 for efficiency, as there's no reason to compare
    // index 0 with itself.
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            indexOfSmallest = i;
        }
    }

    return indexOfSmallest;
}

/**
 * Use the selection sort algorithm to sort an array from smallest to largest.
 */
function selectionSort(array) {
    const sortedArray = [];
    const copiedArray = [...array];

    for (let i = 0; i < array.length; i++) {
        const smallestIndex = findSmallest(copiedArray);
        sortedArray.push(...copiedArray.splice(smallestIndex, 1));
    }

    return sortedArray;
}

console.log(selectionSort([2, 1, 5, 2, 4, 3]));
