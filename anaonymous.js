/*  Do the below programs in anonymous function & IIFE
a.Print odd numbers in an array

const arrNum = [10, 20, 33, 66, 11, 7];
const oddNum = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
oddNum(arrNum);

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(arrNum); */


/* b. Convert all the strings to title caps in a string array
const fruits = ["apple", "orenge", "banana", "grapes"];

const capStr = function (fruits){

    const capArr = [];
    for (fruit of fruits) {
        capArr.push(fruit.toUpperCase());
    }
    console.log(capArr);
}
capStr(fruits);

(function (fruits) {

    const capArr = [];
    for (fruit of fruits) {
        capArr.push(fruit.toUpperCase());
    }
    console.log(capArr);
})(fruits); */


/* c. Sum of all numbers in an array

const num = [10, 20, 30, 40, 50,50];

const sumArr = function (num) {
    let sum = 0;
    for(let i = 0; i <= num.length-1; i++) {
       sum += num[i];
    }
    console.log(sum);
}

sumArr(num);

(function (num) {
    let sum = 0;
    for(let i = 0; i <= num.length-1; i++) {
       sum += num[i];
    }
    console.log(sum);
})(num);   */

/* d. Return all the prime numbers in an array

const arrNumbers = [1, 2, 3, 4, 5, 6, 7,11];

const primeArr =function (arrNumbers) {
    const isPrime = function(num) {
        if (num <2) {
            return false;
        } else {
            if(num % 2 === 0) {
              return false;
            }
        } 
        return true;
    }

  for (number of arrNumbers) {
      if (isPrime(number)) {
         console.log(number);
      }
  }
}

primeArr(arrNumbers);


(function (arrNumbers) {
    const isPrime = function(num) {
        if (num <2) {
            return false;
        } else {
            if(num % 2 === 0) {
              return    false;
            }
        } 
        return true;
    }

  for (number of arrNumbers) {
      if (isPrime(number)) {
         console.log(number);
      }
  }
})(arrNumbers); */


/* e. Return all the palindromes in an array
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];

function palindrome(str) {

    const len = str.length;
    const mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

const palinArr = [];
for(let str of arr) {
    str = "" + str;
   if(palindrome(str)) {
       palinArr.push(str);
   }

}
console.log(palinArr); 

(function getPlindrome(arr) {
    const isPalindrome = function (str) {
        const len = str.length;
        const mid = (len / 2);

        for (var i = 0; i < mid; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }

        return true;
    }

    const palinArr = [];
    for (let str of arr) {
        str = "" + str;
        if (isPalindrome(str)) {
            palinArr.push(str);
        }

    }
    console.log(palinArr);
})(arr);  */


/* f. Return median of two sorted arrays of the same size
const num1 = [1, 3, 6]; const num2 = [2, 8, 12] ; // 4.5

const getMedian = function (a, b) {
    const c = [...a, ...b].sort(function (a, b) {
        return a - b;
    })
    console.log(c);
    const mid = Math.floor(c.length / 2);
    if (c.length % 2 !== 0) {
        console.log(c[mid]);
    } else {
        console.log((c[mid] + c[mid - 1]) / 2);
    }


}
getMedian(num1, num2);

(function (a, b) {
    const c = [...a, ...b].sort(function (a, b) {
        return a - b;
    })
    console.log(c);
    const mid = Math.floor(c.length / 2);
    if (c.length % 2 !== 0) {
        console.log(c[mid]);
    } else {
        console.log((c[mid] + c[mid - 1]) / 2);
    }


}) (num1, num2); */

/* g. Remove duplicates from an array

const givenArr= [1,2,3,4,1,2,6];

indexOf() will return index of first occurence of the element of Array 
and also it will return -1 if the element not present in Array

const removeDuplicate = function (arr) {
    const newArr = [];
    arr.forEach(function (e) {
        if(newArr.indexOf(e) === -1) {
            newArr.push(e);
        }
    });
    console.log(newArr);
}

removeDuplicate(givenArr);


(function (arr){
    const resultArr = arr.filter(function (e, index){
        return arr.indexOf(e) === index;
    });
    console.log(resultArr);
})(givenArr); */



/* h. Rotate an array by k times

const nums = [1, 2, 3, 4, 5]; const k =2;

const rotateArr = function(arr, k) {
   let a = 0;
    for(let i =1; i <=k; i++) {
        // arr.unshift(arr.pop());
       a = arr.pop();
       arr.unshift(a);
    }
    console.log(arr);  
}

rotateArr(nums, 2);

(function(arr, k) {
    let  a = 0;
    for(let i = 1; i <= k; i++) {
        a = arr.pop();
        arr.unshift(a);
    }
    console.log(arr);
})(nums,k); */

