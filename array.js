// var names = ["sourabh", "amit", "raj"];

// var companies = ["microsoft","flipkart","google"]

// var experience = [2,1,3,1];

// var arr = ["sourabh", 20000000, true]




// var  jobs = ["web developer", "fullstack developer"]

// var coffee = ["Espresso", "macchiato", "latte", ]

// console.log(coffee[1]);
// console.log(coffee[0]);

// coffee[1] = "cold";
// console.log(coffee[1]); //value update

// console.log(coffee.length);

// var myName = "sourabh";

// for (const char of myName) {
//     console.log(char);
// }

var movieLine = ["sourabh", "akhileshi","pooja","amit"];

movieLine.push("ankit")

movieLine.push("juli")

// console.log(movieLine);


const person = movieLine.pop();
// console.log(person);
// console.log(movieLine);


movieLine.shift();
// console.log(movieLine);

// add in front
movieLine.unshift('vip')
// console.log(movieLine);

// replace or delete
movieLine.splice(2,1);
// console.log(movieLine);

movieLine.splice(2,1, 'vikash')
// console.log(movieLine);

var movieLine2 = ("ram")

movieLine = movieLine.concat(movieLine2)

// console.log('--------------------');

// console.log(movieLine.slice(1,3));

// console.log(movieLine.join(','));

console.log(movieLine);
// console.log(movieLine.reverse());


// console.log(movieLine(1));

console.log(movieLine.indexOf("vip"));