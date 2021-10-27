// first exersice

// const solution = (weight) => {
//     let c = 300000000;
//     let E = weight * (c**2);
//     return E;
// }

// console.log(solution(75))

// second exersice

// const squareOfSum = (a, b) => {
//     let sum = (a + b)**2
//     return sum;
// }

// console.log(squareOfSum(1, 6))

// third exersice

// const finalGrade = (exam, projects ) => {
//     let result = 0;

//     if (exam >= 90 || projects >= 10) {
//         result = 100;
//     }else if (exam >= 75 && projects >= 5) {
//         result = 90; 
//     } else if (exam >= 50 && projects >= 2) {
//         result = 75;
//     } else {
//         result = 0;
//     }
//     return result
// }

// console.log(finalGrade(40, 2));

// fourth exersice

// const reference = (num) => {
//     let sum = num * lol;
//     return sum;
// }

// console.log(reference(2,2));

// const sum = 1;

// const type = (num) => {
//     return sum(num);
// }

// console.log(type(2))

// fifth exersice recursion

// const rec = (n) => {

//     if (n === 0) {
//         return 1;
//     } else {
//         return n * rec(n - 1)
//     }

// }

// console.log(rec(5))

// const sequenceSum = (begin, end) => {

//     if ( begin > end) {
//         return 0;
//     } else if (begin === end) {
//         return end;
//     }else {
//         return begin + sequenceSum(begin + 1, end)
//     }
// }

// console.log(sequenceSum(-2, 10))

// const rec = (a, b) => {
//     if (! b) {
//         return a;
//     }
    
//     return rec(b, a % b)
// }

// console.log(rec(10, 60))

// const rec = (a, b) => {
//     let arr = [];
//     if (a == b) {
//         return b - 1;
//     } else {
//         console.log(arr)
//         return arr.push(a + 1,rec(a + 1, b))
//     }
// }

// console.log(rec(4, 15))

// var range = function(a, b) {
//     if (a - b === 2)   {
//       return [a + 1];
//     }   else   {
//       var list = range(a, b - 1);
//       list.push(a - 1);
//       return list;
//     }
//   };
  
// console.log(range(10, 18));

// sixth exersice 

// const smallestDivisor = (n) => {

//     if (n === 1) {
//         return 1;
//     }

//     const iter = (div, counter) => {
//         if (div % counter == 0 && counter !== 1) {
//             return counter;
//         }

//         return iter(div, counter + 1 )
//     }
//     return iter(n, 1)
// }

// console.log(smallestDivisor(73))

// seventh exersice

// const smallestDivisor = (num) => {
//     let i = 0;
//     if (num <= 0) {
//         return NaN;
//     }

//     while (i <= num) {
//         if (num % i == 0 && i !== 1) {
//             return i;
//         } else {
//             i++;
//         }
//     }
//     return i;
// }

// console.log(smallestDivisor(-10))

// eighth exersice

// const reverse = (str) => {
//     let i = str.length;
//     let result = '';

//     while (i >= 1) {
//         result += str[i-1]
//         i--;
//     }
//     return result;
// }

// console.log(reverse("hello, Ihar"))

//  ninth exersice

// const isPrime = (n) => {
//     if ( n == 1) {
//         return false;
//     }

//     for (let i = 2; i <= n; i++) {
//         console.log(i)
//         if (n % i == 0) {
//             return false;
//         } else if (n % i == 0 && i == n) {
//             return true;
//         }
//     }
// }

// console.log(isPrime(11));


// tenth exersice

// const myMathModule = (h, b) => {
//   return h * b * 1 / 2;
// }

// console.log(myMathModule(6, 7))


// eleventh exersice

// const square = (n) => {
//     return n**2
// }

// console.log(square(5))

// const sumOfSquares = (a, b) => {
//     return square(a) + square(b);
// }

// console.log(sumOfSquares(5, 10))

// const squareSumOfSquares = (a, b) => {
//     return (sumOfSquares(a, b)**2;
// }

// console.log(squareSumOfSquares(5, 10))
 
// twelfth exersice (закончить)

// const addDigits = (n) => {
    // let result = 0;

    // const exam = (n) => {
    //     let str = String(n);
    //     let arr = str.split('')
    //     console.log(arr)
    //     n *= 0;
    
    //     for ( let i = 0; i < arr.length; i++) {
    //         n += Number(arr[i]);
    //         console.log(n)
    //     }
    //     return console.log(n);
    // }
    //  exam(n);

    // if (n > 9) {
    //     exam(n);
    // }
    // return n;

//     let result = 0;
//     let str = String(n);

//     for (let i = 0; i < str.length; i++) {
//         let a = 0;
//         result += 12345 % 10
//         n -= result
//         n / 10
//         console.log(n)
//     }
// }

// console.log(addDigits(12345));

// thirteenth Exersices

// const solution = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1, str.length);
// }


// console.log(solution('hello world!'))


// Arrays


// fourteenth exersice

// const getWeekends = (str) => {
//     let long = ['saturday', 'sunday'];
//     let short = ['sat', 'sun'];

//     if (str === 'short') {
//         return short;
//     } else {
//         return long;
//     }
// }

// console.log(getWeekends('short'));
// console.log(getWeekends('long'));

// fifteenth exersice

// const swap = (a) => {
//     let arrStr = []
//     let arrRev = [];
//     let arrEnd = [];

//     if (a.length < 2) {
//         return a
//     } else if (a.length == 2){
//        return arrRev = a.reverse();
//     } else {
//         arrStr = a.slice(0, 1)
//         arrEnd = a.slice(-1)
//         arrRev = a.slice(1, a.length - 1)
//         arrRev.unshift(arrEnd[0])
//         arrRev.push(arrStr[0])
//        return arrRev;
//     }

// }

// console.log(swap(['aaa']))
// console.log(swap(['aaa', 'bbb']))
// console.log(swap(['aaa', 'bbb', 'ccc', 'ddd']))

// sixteenth exersice

// const addPrefix = (arr, prefix) => {
//     let newNames = []

//     for (let i = 0; i < arr.length; i++) {
//         let index = prefix + ' ' +  arr[i]
//         console.log(index)
//         newNames.unshift(index)
//     }
//     return newNames;

// }

// console.log(addPrefix(['john', 'smith', 'karl'], 'Mr'))

// seventeenth exersice 

// const arrays = (arr) => {
//     let a = []

//     for (let i = 0; i < arr.length; i++) {
//         a[i] = arr[(arr.length - 1) - i]
//         console.log(a)
//     }
//     return a;
// }

// console.log(arrays(['john', 'smith', 'karl', 'ihar']))

// eighteenth exersice 

// const arrays = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0) {
//            sum += arr[i];
//         } 
//     }
//     return sum;
// }

// console.log(arrays([8, 9, 21, 19, 18, 22, 7]))
// console.log(arrays([2, 0, 17, 3, 9, 15, 4]))