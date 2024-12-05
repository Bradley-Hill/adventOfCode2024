import fs from 'fs';

fs.readFile('numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const dataLines = data.split('\n');

    // console.log(dataLines);

    const parsedArrays = dataLines.map(parseLinetoArrays);
    const totalDifference = parsedArrays.reduce((total, { leftArray, rightArray }) => {
        return total + calculateDifferenceTotal(leftArray, rightArray);
    }, 0);

    console.log('totalDifference is :>> ', totalDifference);
});
const parseLinetoArrays = (dataLine) => {
    const cleanedLine = dataLine.replace(/\r/g, '').trim();
    // console.log('cleanedLine :>> ', cleanedLine);

    const parts = cleanedLine.split(/\s{2,}/);
    // console.log('parts :>> ', parts);

    // if (parts.length < 2) {
    //     console.error('Invalid line format', dataLine);
    //     return { leftArray: [], rightArray: [] };
    // }
    const [batch1, batch2] = parts;
    const leftArray = transformBatch(batch1);
    const rightArray = transformBatch(batch2);
    return { leftArray, rightArray };
};

const calculateDifferenceTotal = (leftArray, rightArray) => {
  console.log('leftArray :>> ', leftArray);
  console.log('rightArray:>> ', rightArray);
    let differenceTotal = 0;

    leftArray.forEach((value, index) => {
        const difference = Math.abs(value - rightArray[index]);
        differenceTotal += difference;
    });
    return differenceTotal;
};

const transformBatch = (batch) => {
    return batch
        .replace(/\r/g, '')
        .trim()
        .split('')
        .filter((char) => /\d/.test(char))
        .map(Number)
        .sort((a, b) => a - b);
};
