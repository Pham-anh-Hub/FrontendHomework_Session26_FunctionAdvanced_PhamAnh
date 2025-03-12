// HOF higher order function
const greet = (Name, callback) => {
    callback();  // toán tử () gọi hàm callback

    console.log(`Hello ${Name}`);
}

const sayHello = () => {
    console.log(`Say Hello`);
}
// greet("Nguyen Van A", sayHello)

const readNumber = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`${i+1}`);
    }
}

const renderNumber = (callback) => {
    callback();
}

renderNumber(readNumber);
