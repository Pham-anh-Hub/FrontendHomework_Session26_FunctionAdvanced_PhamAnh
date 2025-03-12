const numbers = [11,22,8,7,6,9,2,4,2,1];
const newNumbers = numbers.map((value) => value ** 2).filter((value) => value % 2 === 0 );
console.log(newNumbers);
