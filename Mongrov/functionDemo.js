let a = 10;
let b = 20;
function dummyOne(a, b) {
  return a + b;
}
let prt = dummyOne(10, 20);
console.log(prt);

console.log("one");
setTimeout(() => {
  console.log("two");
}, 500);
console.log("three");

let posts = [
  { title: "mr", name: "jb" },
  { title: "ms", name: "vs" },
];

function getPos() {
  posts.forEach(function (i) {
    console.log(i);
  });
}

function setPos(pos) {
  return new Promise(function (resolve, reject) {
    posts.push(pos);
    let dummy = false;

    if (!dummy) {
      resolve();
    } else {
      reject("error");
    }
  });
  // posts.push(pos)
}

setPos({ title: "ms", name: "urunda" })
  .then(getPos) //promise.then
  .catch((err) => console.log(err)); //promise.catch

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  // let dummy = await myPromise;
  console.log(await myPromise);
  console.log("dummy");
}

myDisplay();

const add = function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}();

function myFunction() {
  console.log("counter: "+add());
  console.log("counter: "+add());
}

myFunction();


function sumDemo(...args) {
  let sum =0;
  for(let i of args) {
    sum = sum +i;
  }
  return sum;
}

console.log("Sum",sumDemo(1,234,56,4,3,45,2,4,5,4,5,22,1,34,34343,323,232,3,1));

console.log(Array.from("12345678"));

console.log(isNaN("nick")); // NaN -> not a number

//arrow funcrions
let hello = (num) => console.log("hello", num);

hello(2);

//classes
class Car{
  CarName(carName){
    return carName;
  }
}

class Manfufacture extends Car{
  Year(carName,year){
    console.log(super.CarName() +" "+ year);
  }
}

let c1 = new Car();
console.log(c1.CarName("shine"));
// console.log(Car.CarName("shine"));
// console.log(Manfufacture.Year(34567));
let m1 = new Manfufacture();
m1.Year(2002);


// import {ExportDemoOne, ExportDemoTwo} from '/Mongrov/functionHigher.js'

// let demoOne = ExportDemoOne("sakthi")
// console.log(demoOne);
// console.log(ExportDemoTwo(12))
