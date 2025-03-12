const numbers = [1,2,3,4,5,6,7,8,9];
function checkPrime(number) {
    if(Number.isNaN(number)){
        return false;
    }else{
        let count=0;
        for(let i=2; i<=number; i++){
            if(number % i === 0){
                count++;
            }
        }
        if(count === 1){
            return true;
        }else{
            return false;
        }
    }
}
const isPrime = numbers.filter((value) => checkPrime(value));
console.log(isPrime);
