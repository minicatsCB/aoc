import data from "../data/day-3-part-1.json" assert { type: 'json' };

export function getTotalSum(program = '') {
    const regex = /mul\(\d+,\d+\)/g;
    return program.match(regex).reduce((acc, curr) => {
        const [num1, num2] = curr.match(/\d+/g);
        return acc + num1 * num2;
    }, 0);
}



/* const totalSum = getTotalSum(data.program);

console.log({ totalSum }) */