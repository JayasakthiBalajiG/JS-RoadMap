// var let const
function fun() {
    let x =10;
    if (x>5){
        let x =20;
        console.log(x);
    }
    console.log(x);
}
// fun();

const x =10;
const y =2;
const z =x+y;
// z=90;
console.log(z);

let a =10+20+"5"
console.log(a);

let num=true;
let num1 = 20;

car = "car";
var car;
console.log(car);

console.log(num&&=5);

let jb;
console.log(jb = 10);

console.log(8==8);

for(let i=0;i<5;i++){
    console.log(i); // console.log gives \n by default
}

let person= {
    name:"sakthi",
    age:19,
    place:"cbe"
};

for(let i in person){
    console.log(person[i]);
}

let name;
function demoFunction(){
    name = "sakthi";
    console.log(name);
}
demoFunction();
console.log(name);

var print=1;
let arrayDummy = [1,2,3,4,5,6,7,0,9];
for(let i=0; i<arrayDummy.length;i++){
    print+=arrayDummy[i]*2 + " ";
    // console.log(arrayDummy[i]*2);
}
console.log(print);
console.log(typeof arrayDummy);
console.log(arrayDummy.sort());

let color =["sakthi", "jb",2];
color.push("fool");
color.shift();
console.log(color);
color.unshift("hi")
console.log(color);
console.log(typeof color);

let colorCha = color.shift();
// colorCha.unshift("hi")
console.log(colorCha);

function arrayDemo(){
    let arrDemo = [0, 1, "abc", [23, "bca"]];
    arrDemo.unshift("abc");
    arrDemo.push("9")
    console.log(arrDemo);
    arrDemo.splice(3,0,"456") //splice(index at which have to change, how many elements to be removed, element)
    console.log(arrDemo);
}

arrayDemo()