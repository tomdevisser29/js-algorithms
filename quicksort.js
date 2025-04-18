/**
 * Quicksort is a faster sorting algorithm than selection sort, and uses divide
 * and conquer. The base cases are an array with one or zero items. The
 * recursive case is having unsorted sub-arrays of more than 2 items.
 */
function quicksort(array) {
    if (array.length < 2) return array;

    // By picking a random pivot point, the average runtime is O(n log n).
    const pivot = array[Math.floor(Math.random() * array.length)];
    const less = array.slice(1).filter(i => i <= pivot);
    const greater = array.slice(1).filter(i => i > pivot);

    return quicksort(less).concat([pivot]).concat(quicksort(greater));
}

console.log(quicksort([3, 6, 2, 3, 6, 1, 5, 2, 4, 3]));
