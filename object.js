// Object Literal
// var car1 = {
//   name: 'honda city',
//   manufacturing: 'Honda',
//   fuelCapacity: 40,
//   isAutomatic: false
// }

// //key
// var car2 = {
//   name: 'sonet', //value
//   manufacturing: 'kia',
//   fuelCapacity: 45,
//   isAutomatic: true
// }

// Object Literal

// var Object = {
//   key1: 'value1',
//   key2: 'value2',
// }

// console.log(car);
// console.log(car2);

// console.log(car1.name, car1.manufacturing); //to access the properties

// car1.fuelCapacity = '30'// value update or modify properties 
// console.log(car1);

//obect using new keyword 

// var myDetails = {
//   name: "sourabh",
//   title: "I am a MERN stack developer",
//   experience: "applikation india"
// }

// console.log(myDetails.name);

// way to increase data

// var myDetails = new Object();
// myDetails.name = "sourabh";
// myDetails.title = "I am a MERN stack developer";
// myDetails.follower = 1000;
// console.log(myDetails); 

function Cource(
    instructor,
    title,
    description,
    language,
    duration,
    fees,
    startDate,
    youTubeLink) {
    this.instructor = instructor
    this.title = title
    this.description = description
    this.language = language
    this.duration = duration
    this.fees = fees
    this.startDate = startDate
    this.youTubeLink = youTubeLink
}


var JavaScriptCource = new Cource(
    "sourabh",
    "JavaScript Foundation",
    "JavaScript Programming cource",
    "Hinglish",
    10,
    'free',
    '26 sept 2023',
    'youtubelink'
);
var FullStackCource = new Cource(
    "sourabh",
    "Full Stack",
    "JavaScript Programming cource",
    "Hinglish",
    10,
    'free',
    '26 sept 2023'
);

delete varible
delete value
// console.log(FullStackCource, JavaScriptCource);


// console.log(Object.keys(JavaScriptCource));
// console.log(Object.values(JavaScriptCource));

// freeze Object
// Object. seal - can be modifed 

// iterate 

for (var key in JavaScriptCource) {
    console.log(JavaScriptCource[key]);
}