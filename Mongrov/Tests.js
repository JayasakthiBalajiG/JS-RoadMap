function demo() {
  console.log("normal function");
}
demo();

let demoMethod = {
  name: "jb",
  greet: function () {
    console.log("method function", this.name);
  },
};
demoMethod.greet();

function constructorCall() {
  this.name = function (cls) {
    console.log("constructor log", cls);
  };
}
let demoObj = new constructorCall();
demoObj.name("vs");

function greet() {
  console.log("call via");
}

let voice = "vs";
console.log(voice);
greet.call();
greet.apply();

function outer() {
  let number = [12,4,42,452,36,5];
  function inner() {
    console.log("closure",number);
  }
  inner();
}
outer();

obj1 = {
  name: "name",
  age: 12,
  number: 83749,
};
obj2 = {
  place: "theni",
  pin: 653426,
  state: "TN",
};

let mergeObj = { ...obj1, ...obj2 };
console.log(mergeObj);

arr1 = [
  {
    name: "name",
    age: "16",
  },
  1232323,
  "happy"
];
arr2 = [
  {
    place: "cbe",
    pin: 654321,
  },
  4567890,
  "sad"
];


let mergeArr = [...arr1, ...arr2]
console.log("merged",mergeArr);

