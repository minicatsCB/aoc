import data from "../data/day-3-part-1.json" assert { type: 'json' };

function cleanProgram(program = '') {
    const regex = /don't\([^)]*\).*?do\([^)]*\)|don't\([^)]*\)[\s\S]*\)/gs;
    return program.replace(regex, '');
}

export function getTotalSum(program = '') {
    const cleanedProgram = cleanProgram(program);
    const regex = /mul\(\d+,\d+\)/g;
    return cleanedProgram.match(regex).reduce((acc, curr) => {
        const [num1, num2] = curr.match(/\d+/g);
        return acc + num1 * num2;
    }, 0);
}



/* const totalSum = getTotalSum(data.program);

console.log({ totalSum }) */