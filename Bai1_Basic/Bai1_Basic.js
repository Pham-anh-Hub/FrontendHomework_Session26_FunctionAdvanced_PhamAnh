let arr = [];
let num ;
for (let i = 0; i < 10; i++) {
    num = +prompt(`Nhập phần tử thứ ${i+1}: `);  
    if(Number.isInteger(num)){
        arr.push(num);
    }else{
        alert(`Mời nhập số nguyên`);
        i--;
    }
}

let newArr = arr.filter((value) => value >= 10);
console.log("Các số nguyên lớn hơn hoặc bằng 10: ", newArr);
