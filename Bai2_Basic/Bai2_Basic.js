const strings = ["apple", "banana", "cat", "elephant", "dog"];
if(strings.length === 0){
    console.log(`Mảng không có phần tử nào`);
}else{
    const lengthOver5 = strings.filter((value, index) => value.length > 5);
    console.log("Các phần tử có độ dài lớn hơn 5 là:", lengthOver5);
}



