console.log("objects and protoypes");

function Person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.country = "UK"; //priority
}

Person.prototype.country = "India"; //prototype property

let jb = new Person("jb", 90, "theni");
let vs = new Person("vs", 80, "erode");

console.log(jb.age);
console.log(jb.country);
console.log(vs.country);

Person.prototype.namePlace = function () {
  //prototype method
  return this.name + " " + this.place;
};

console.log("Name and place: " + jb.namePlace());
console.log(jb.hasOwnProperty("place"));

let date = new Date().getFullYear();
console.log(date);

let arrDummy = [12, "hi", 34, 9];
console.log(arrDummy);

//cting of variables
let State = {
  name: "sakthi",
  age: 21,
  place: "TN",
};

let { name, age, place } = State; // destructing assignments
// let name = State.name;
// let place = State.place;
// let age = State.age;

console.log(name, " ", age, " ", place);

//spread and rest operator
let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

const [first, second, third, ...rest] = [2, 3, 5, 6, 8];
console.log(second);
console.log(third);
