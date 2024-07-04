function first(array, n) {
    // Check if n is undefined and set it to 1 if it is
    if (n === undefined) {
        return array[0];
    }
    // Check if n is a non-positive number, return an empty array
    if (n <= 0) {
        return [];
    }
    // Return the first n elements of the array
    return array.slice(0, n);
}

// Testing  data
console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []
