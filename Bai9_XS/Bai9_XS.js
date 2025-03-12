const numbers = [];
for (let i = 0; i < 15; i++) {
    numbers[i] = +prompt(`Mời nhập phần tử thứ ${i+1}`);
}
let oddTotal = 0;
let evenTotal = 0;
numbers.filter((value) => value % 2 === 0 ? evenTotal += value : oddTotal += value );
console.log(`OddTotal = ${oddTotal}`);
console.log(`evenTotal = ${evenTotal}`);
