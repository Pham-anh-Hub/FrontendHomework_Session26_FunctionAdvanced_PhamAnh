let numbers = [2,3,5,4,8,6,9,1];
if(Array.isArray(numbers)){
    let max = Math.max(...numbers);
    let indexMax = numbers.indexOf(max);
    console.log(`Phần tử lớn nhất trong mảng là ${max} - Vị trí ${indexMax}`);
}else{
    console.log(`Mảng không hợp lệ`);
}


