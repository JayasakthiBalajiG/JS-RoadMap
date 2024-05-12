let obj1 = {
  name: "jb",
  age: 21,
};
console.log(Object.keys(obj1).length);

let obj2 = {
  place: "theni",
  pin: 625531,
};
let obj3 = {
  ...obj1,
  ...obj2,
};
console.log("Spread", obj3);

let objCat = Object.assign(obj1, obj2);
console.log("Assign", objCat);

delete obj2.pin;
console.log("Delete", obj2);

obj2.maadu = 625531;
console.log("Add", obj2);

function clone() {
  let cloneObj = Object.assign(obj1);
  console.log("clone", cloneObj);
}
clone();

console.log("obj1",obj1);
function deepClone(obj1){
    let deepCloneObj = JSON.parse(JSON.stringify(obj1));
    console.log("deep clone",deepCloneObj);
}
deepClone(obj1)

console.log(obj2);

function iterate() {
  for (let key in obj2) {
    console.log(key, obj2[key]);
  }
}
iterate();

console.log(obj1.hasOwnProperty("name"));

let myObject = {
  fname: "abc",
  lname: "balaji",
  place: "theni",
  pin: 625531,
  age: 21,
};
function longKey(obj) {
  let longestKey = null;
  let maxLength = 0;

  for (key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      if (key.length > maxLength) {
        longestKey = key;
        maxLength = key.length;
      }
    }
  }
  console.log("long key:", longestKey);
  console.log("length", maxLength);
}
longKey(myObject);

let arrOne = [
  ["key2", "abcdefghij"],
  ["key1", "jayasakthi"],
  ["key3", "balaji"],
  ["key4", "one"],
];
let sortArray = arrOne.sort(function (a, b) {return a.values - b.values});
console.log("sort with values",sortArray);

console.log("values", Object.values(myObject));

function arrToObject() {
  let arrToObj = Object.fromEntries(arrOne);
  console.log("Array to Obj", arrToObj);
}
arrToObject();

let iterateObj = {};
function iterateArrToObj() {
  for (let [key, value] of arrOne) {
    iterateObj[key] = value;
  }
}
console.log(iterateObj);

let color = ["green", "red", "sakthi", "yellow", "black", "sakthi"];
console.log(
  "filtered",
  color.filter((i) => i !== "sakthi")
);
// console.log("spliced",color.splice(2,1));
console.log(color);

console.log(color.pop());
console.log(color);

let numArr = [23, 34, 1, 34, 12, 3, 11, 345, 12, 1, 1, 44, 9];

console.log(Math.max(23, 34, 1, 34, 12, 3, 11, 345, 12, 1, 1, 44, 9));
console.log(Math.min(23, 34, 1, 34, 12, 3, 11, 345, 12, 1, 1, 44, 9));

function avg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
}
console.log("Avg", avg(numArr));

let sortArr = numArr.sort(function(a, b){
  return a-b
});
console.log("In-built func", sortArr);

console.log(sortArr[sortArr.length - 2]);

for (let i = 0; i < numArr.length; i++) {
  let temp = 0;
  for (let j = i + 1; j < numArr.length; j++) {
    if (numArr[i] > sortArr[j]) {
      temp = numArr[j];
      numArr[j] = numArr[i];
      numArr[i] = temp;
    }
  }
}
console.log(numArr);

let revArr = [];
for (let i = numArr.length-1; i > 0; i--) {
  revArr.push(numArr[i]);
}
console.log(revArr);

console.log("promise");
async function check() {
  await Promise.resolve(console.log(1));
  console.log(2); // works asynchronously as .then() -> executes only after the execution stack is empty.
}
console.log(3);
check();
console.log(4); // 3 1 4 2

let objNum = {
  num1: 90,
  num2: 564,
  num3: 34,
  num4: 3,
  num5: 1,
  num6: 10,
};
let arrObj = Object.entries(objNum);

arrObj.sort(function(a, b) {
    return a[1]-b[1];
})
console.log("arr sort",arrObj);

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

arr1 = [23,1,3,51,4,2,2]
arr2 =[3,1,4,6,7,1,6,0]

function arrCar(arr1, arr2){ //cartesian
    let arrCart = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            arrCart.push(
                [arr1[i]].concat(arr2[j])
            )
        }
    }
    return arrCart;
}
console.log(arrCar(arr1,arr2));

let arrCon = arr1.concat(arr2)
console.log("arr concat",arrCon);

function repeat(arr){
    for(let i = 0; i <arr1.length; i++) {
        for(let j = i+1; j <arr1.length; j++) {
            if(arr1[i] == arr1[j]){
                return i
            }
        }
    }
    return -1
}
console.log("repeat",repeat(arr1));

function majority(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++
            }
        }
        if(count>arr.length/2){
            return arr[i]
        }
    }
    return -1
}
console.log("majority",majority(arr1))

arrCom1 = [23,1,3,51,4,2,2]
arrCom2 = [23,1,3,2,4,51,2]

console.log(JSON.stringify(arrCom1.sort(function(a,b){return a-b})) == JSON.stringify(arrCom2.sort(function(a,b){return a-b})));

console.log("Stringfy",arrCom1);

function test1(arr1,arr2){
    arr1.sort(function(a,b){
        return a-b
    })
    arr2.sort(function(a,b){
        return a-b
    })

    for(var i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}
console.log("Compare logic",test1(arrCom1,arrCom2))

function test(arr1){
  let temp=[]
  arr1.sort(function(a,b){return a-b})
  for(let i=0;i<arr1.length;i++){
      if(arr1[i]!=arr1[i+1]){
          temp.push(arr1[i])
      }
  }
  return temp
}
console.log("Duplicates remove",test(arrCom1))

const arrFlat = [0, 1, 2, [3, 4], [2, [3, [4, 5]]]];
console.log(arrFlat);
console.log("Flat",arrFlat.flat());
console.log("Flat Infinity",arrFlat.flat(Infinity));

let arrInt=[]
let set1 = new Set(arrCom1)
let set2 = new Set(arrCom2)

console.log(arrCom1);
console.log(set1);

for (let i of set1){ //intersection
    if (set2.has(i)){
        arrInt.push(i)
    }
}
console.log(arrInt);

function Diff() {
  arrCom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arrCom2 = [1, 2, 3, 4, 5, 10, 11, 12, 12];

  let arrDiff = [];

  if (arrCom1.length == arrCom2.length) {
    for (let i = 0; i < arrCom1.length; i++) {
      if (arrCom1.indexOf(arrCom2[i]) == -1) {
        arrDiff.push(arrCom1[i]);
    }
}
}
return arrDiff;
}
console.log("Array Difference",Diff())


function shuffleArr(arr) {
  for(let i=arr.length-1; i>=0; i--) {
    let j = Math.floor(Math.random()*(i+1))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

console.log("Shuffle",shuffleArr(arrCom1))

let arrTemp = [2, 3, 2, 4, 1, 3, 6, 2, 1, 4, 1];
let count = 0;
let k = 0;
let arrDemo = [];

function frequency(arr) {
  let freqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in arrDemo == false) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      freqArray[k] = count + 1;
      k++;
      count = 0;
      arrDemo.push(arr[i])
    }
  }
  return freqArray;
}
console.log("Frequency array",frequency(arrTemp));

const arrNear = [2, 42, 82, 148, 162, 202, 242, 282, 322, 362]
let find = 150
function findMin(arr, find){
  if(arrNear.includes(find)){
    return 1
  }
  else{
    let minValue =Infinity
    let count =null;
    let value=0
    for(let i = 0; i < arr.length; i++){
      count = Math.abs(find - arr[i])
      if(count < minValue){
        minValue = count
        value = arr[i]
      }
    }
    return value
  }
}
console.log(findMin(arrNear,find));

function SymmetricDiff(arrCom1, arrCom2) {
  let setUni = [...new Set([...arrCom1, ...arrCom2])]
  let arrUni = Array.from(setUni)
  console.log("union",arrUni);
 
  let arrInt =[]
  let set1 = new Set(arrCom1)
  let set2 = new Set(arrCom2)
  for(let i of set1){
   if(set2.has(i)){
     arrInt.push(i)
   }
  }
  console.log("Intersection",arrInt);
 
  let arrDiff=[]
  for(let i=0; i<arrUni.length; i++){
   if(arrUni.indexOf(arrInt[i]) ==-1){
     arrDiff.push(arrUni[i])
   }
  }
  console.log("Symmetric diff",arrDiff);
 }

 SymmetricDiff(arrCom1,arrCom2)

 let chunk =4 //split
function twoArrays(arrCom1, arrCom2, chunk) {
  let arrDemo1 = arrCom2.slice(0,chunk)
  let arrDemo2 = arrCom2.slice(chunk,chunk+arrCom2.length);

  console.log(arrDemo1);
  console.log(arrDemo2);
}

twoArrays(arrCom1,arrCom2, chunk)