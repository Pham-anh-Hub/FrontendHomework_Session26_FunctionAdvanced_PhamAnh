

for (let i = 0; i < 10; i++) {
    console.log(`i = ${i+1}`);
}

const number = [1,2,3,4,5,6,7,8,9,10];

// number.forEach(function( value, index, thisArray){
//     console.log("value - index - thisArray", value, index, thisArray );
// });


// Hàm forEach (value)
number.forEach(( value, index) => {
    console.log("value - index - thisArray", value, index );
    // return 10; // không thể dừng vòng lặp, không trả về giá trị nào
});
// không cần biết trước số lần lặp như vòng for thường



// Hàm filter  : dùng để lặp qua các phần tử. Trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện 
//Bài toán tìm kiếm các phần tử chẵn trong mảng
//Cách thường 
let evenArr = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        evenArr.push(number[i]);        
    }
}
console.log(evenArr);
// Cách dùng hàm advanced
const evenNumber = number.filter((value, index) => value % 2 === 0);
console.log("evenNumber = ", evenNumber);
//Tìm kiêm kiếm 1 phần tử bất kì trong mảng
const findNumber = number.find((value, index) => value === 1);
console.log("findNumber = ", findNumber);


// Hàm map(): Dùng để lặp qua các phần tử của mảng, trả về 1 mảng mới có số lượng phần tử bằng số lượng phần tử của mảng cũ nhưng đã được thay đổi

const newArray = number.map((value, index) => `Tại vị trí thứ ${index} thì giá trị là ${value}`);
console.log("newArr = ", newArray);
// Tại vị trí thứ 1 thì giá trị là: 2
const student = ["Nguyen Van A", "Bui Van C", "Pham Van T", "Le Van D"];
// Fill tất cả các phần tử trên vào trong 1 dnah sách ul, li
const htmls = student.map((value, index) => {
    return `
    <li>${value}</li>`;
});
console.log("htmls: ", htmls);



// Hàm reduce ();
const carts = [100, 200, 300, 400, 500, 600];

let total = 0; // Biến lưu trữ
for (let i = 0; i < carts.length; i++) {
    console.log("Tai vi tri thu" + i + " total = ", total );
    total += carts[i];
}
console.log("total = ", total);

const totalCarts = carts.reduce((previousValue, currentValue, index) => {
    console.table(index, previousValue, currentValue);
    return previousValue + currentValue;
}, 0)
console.log(totalCarts);


const scores = [5,6,7,8,9,10,5,7,6,6];
//Kiểm tra xem mảng scores có tất cả đều là phần tử chẵn không => trả về True
const checkEven = scores.every((value) => value % 2 === 0);
console.log("checkAllEven = ",checkEven);

//Kiểm tra xem mảng scores có ít nhất 1 phần tử phần tử chẵn => trả về True
const checkOneEven = scores.some((value) => value % 2 === 0);
console.log("checkOneEven = ", checkOneEven);

// Hàm fill();
// const newScores = scores.fill(2, 0, scores.length);
// console.log(newScores);


// Hàm includes();
const mark = scores.includes(5, 0);
console.log("Điểm cần tìm: ", mark);

//Hàm concat() : dùng để nối mảng;
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const mergeArray = arr1.concat(arr2).sort((a, b) => a-b);
console.log("Ham sau khi noi ",mergeArray);


// split(): chuyển đổi chuỗi thành mảng & join(): chuyển mảng thành chuỗi;

const myName = "Phạm,Phương,Anh";
const resultConvertArr = myName.split(","); // chuyển đổi chuỗi thành mảng
console.log(resultConvertArr);
const resultConvertString = resultConvertArr.join(" "); //  chuyển mảng thành chuỗi;
console.log(resultConvertString);

const email = "ppa@gmail.com";
// Nếu email không băt sddaauf với tên không chứa "@" và không kết thúc với ".com" => sai
if(email.includes("@") && email.endsWith(".com")){
    console.log("Email hợp lệ");
}



