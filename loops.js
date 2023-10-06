// let endNumber = 10;
// let num = 1;

// while (num <= endNumber) {
//     console.log(num);
//     num = num + 1;
// }

// let endNumber = 1;
// let num = 10;

// while (num >= endNumber) {
//     console.log(num);
//     num = num - 1;
// }

// let endNumber = 7;
// let num = 9;
// let result = '';

// do {
//     result = result + num;
//     num = num + 1;
// } while (num <= endNumber);

// console.log(result);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//   console.log(color);
// }

// using for loop print "sourabh" 3 times

// for (let count = 1; count <= 3; count = count + 1) {
//   console.log("sourabh");
// }

// for (let num = 2; num <=20; num = num + 2) {
//   console.log(num);
// }


// for (let outerCount = 1; outerCount <= 3; outerCount++) {
//   console.log("outer loop: ", outerCount);
//   for (let innerCount = 1; innerCount <= 2; innerCount++) {
//     console.log("----inner loop: ", innerCount);
//   }
// }

// let endNumber = 100;
// let num = 1;
// while (num <= endNumber) {
//   if (num > 10) {
//     break;
//   }
//   console.log('2 * ${num} = ${2*num}');
//   num = num + 1;
// }

// let endNumber = 10;
// let num = 1;

// while (num <= endNumber) {
//   console.log(`2 * ${num} = ${2 * num}`);
//   num = num + 1;
// }

for (let num = 1; num <= 20; num = num += 1) {
  if (num % 2 === 0) {
    continue;
  }
  console.log(num);
}

const name = "hitesh"
const repoCount = 50