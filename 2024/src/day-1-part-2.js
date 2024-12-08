import data from "../data/day-1.json" assert { type: 'json' };

export function getSimilarityScore(arr1, arr2) {
    return arr1
        .map((val1) => arr2.filter(val2 => val2 === val1).length * val1)
        .reduce((acc, curr) => acc + curr, 0);
}



/* const similarityScore = getSimilarityScore(data[0], data[1]);

console.log({ similarityScore }) */