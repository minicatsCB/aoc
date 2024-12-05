import data from "../data/day-2-part-2.json" assert { type: 'json' };

/**
 * Check if all the numbers in the array are increasing.
 * @param {number[]} arr - The array of numbers.
 * @returns {boolean} - True if all numbers are increasing, otherwise false.
 */
export function isIncreasing(arr) {
    return arr.every((curr, i) => {
        const isFirstNum = i === 0;
        const prev = arr[i - 1];
        return isFirstNum || curr > prev;
    });
}

/**
 * Check if all the numbers in the array are decreasing.
 * @param {number[]} arr - The array of numbers.
 * @returns {boolean} - True if all numbers are decreasing, otherwise false.
 */
export function isDecreasing(arr) {
    return arr.every((curr, i) => {
        const isFirstNum = i === 0;
        const prev = arr[i - 1];
        return isFirstNum || curr < prev;
    });
}

/**
 * Check if adjacent numbers differ by at least one and at most three.
 * @param {number[]} arr - The array of numbers.
 * @returns {boolean} - True if adjacent numbers differ by at least one and at most three, otherwise false.
 */
export function hasValidGaps(arr = []) {
    return arr.every((curr, i) => {
        const isFirstNum = i === 0;
        const prev = arr[i - 1];
        const gap = Math.abs(curr - prev);
        return isFirstNum || gap >= 1 && gap <= 3;
    });
}

/**
 * Check if an array is "safe".
 * @param {number[]} arr - The array of numbers.
 * @returns {boolean} - True if the array is "safe", otherwise false.
 */
export function isSafe(arr = []) {
    return (isIncreasing(arr) || isDecreasing(arr)) && hasValidGaps(arr);
}

/**
 * Get the total number of "safe" arrays.
 * @param {number[][]} arrays - The array of arrays of numbers.
 * @returns {number} - The total number of "safe" arrays.
 */
export function countSafeArrays(arrays) {
    return arrays.reduce((count, arr) => {
        if (isSafe(arr)) {
            count++;
        }
        return count;
    }, 0);
}

/* const totalSafeArrays = countSafeArrays(data);
console.log(totalSafeArrays); */