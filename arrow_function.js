/* Do the below programs in arrow function */

/* a . Print the odd numbers in arry */
const arrNum = [10, 20, 33, 66, 11, 7];
const oddNum = (arr) => {
    for(let n of arr) {
        if(n % 2 === 0) {
            console.log(n);
        }
    }
}

oddNum(arrNum);

/* b . Convert all the Strings to title caps in string Array. */
const fruits = ["apple", "orenge", "banana", "grapes"];

const capStr = (fruits) => {
    for(let fruit of fruits) {
        console.log(fruit.toUpperCase());
    }
}

capStr(fruits);

/* c. Sum of all numbers in array. */
const num = [10, 20, 30, 40, 50,50];

const sumNum = (numArr) => {
    let sum =0;
    for(let n of numArr) {
        sum += n;
    }
    console.log(sum);
}

sumNum(num);

/* d. Return all the prime numbers in an Array */
const arrNumbers = [1, 2, 3, 4, 5, 6, 7,11];
const primeNum = (arr) => {
    const isPrime = (n) => {
        if(n <=1) {
            return false;
        } else {
            for(let i = 2; i < n; i++) {
                if(n % i === 0) {
                    return false;
                }
            }
        }
        return true;
    }
    for(let num of arr) {
        if(isPrime(num)) {
            console.log(num);
        }
    }
}
primeNum(arrNumbers);

/* e. Return all the palindromes in array. */

const arr = ['carecar', 1344, 12321, 'did', 'cannot'];

const paliArray = (arr) => {

    const isPlaindrome = (str) => {
        const mid = Math.floor(str.length/2);

        for(let i = 0; i <= mid; i++) {
            if(str[i] !== str[str.length-1 - i]) {
                return false;
            }
        }
        return true;
    }

    const newArr = [];
    for(let e of arr) {
        e += "";
        if(isPlaindrome(e)) {
            newArr.push(e);
        }
    }
    return newArr;
}

console.log(paliArray(arr));