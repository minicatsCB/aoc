import data from "../data/day-1-part-1.json" assert { type: 'json' };

export function getTotalDistance(arr1, arr2) {
    const arr2Sorted = arr2.sort((a,b) => a - b);
    return arr1
        .sort((a,b) => a - b)
        .map((curr, i) => Math.abs(curr - arr2Sorted[i]))
        .reduce((acc, curr) => acc + curr, 0);
}

/*

const totalDistance = getTotalDistance(data[0], data[1]);

console.log({ totalDistance }) */