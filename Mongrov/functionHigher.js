//callback
function callbackDemo(num1, num2, cb) {
  let sum = num1 + num2;
  cb(sum);
}

function print(number) {
  console.log("Sum: ", number);
}
callbackDemo(5, 5, print);

//higher order function
let highOdr = (function () {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
})();

console.log(highOdr());

function highFunction(num1, num2, call) {
  let add = num1 + num2;
  call(add);
}
function callFunc(num) {
  console.log("add is: ", num);
}
num1 = 10;
num2 = 3;
highFunction(num1, num2, callFunc);

function upFunc() {
  let subject = "expect panadha";
  function inner() {
    let name = "jb";
    return `${name} ${subject}`
  }
  console.log(inner());
}
upFunc();

function highUp(){
    let number =89
    return function(){
        return number
    }
}
let highObj = new highUp()
console.log(highObj());

let str = "vishnu"
console.log(str.length);

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((i)=>i.length));

