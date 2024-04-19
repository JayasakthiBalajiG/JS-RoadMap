let arr1 =[2.34,34,2,4233,5,5,3,2,4]
let arr2 =[2.34,34,2,43,23,2,1,3,4,1,5,7,88,90]
console.log(arr1.length);

function arrPrint(arr1){
  console.log(arr1.includes(34));
}

arrPrint(arr1)
arr1.push(12)

arr1.shift()
console.log(arr1);

// arr2 = arr1.reverse()
arr2 = arr1.map((i)=> i*1)
arr2.sort(function(a,b){
  return b-a
})
console.log("arr1 ",arr1)
console.log("arr2 ",arr2)

function demoFunction(arr,value){
  for(var i = 0; i <arr.length; i++){
    arr[i] =value
  }
}
var value = 20
demoFunction(arr2,value)
console.log(arr2);

let arrMap = arr1.map(x=>x+4)
console.log(arrMap);

let arrFilter = arr1.filter((x)=> x===2 || x===4)
console.log(arrFilter);

let people =[
  {name: "jb", level:1},
  {name: "vj", level:2},
  {name: "bj", level:4},
  {name: "ggb", level:1},
  {name: "vs", level:2}
]

let arrMerge = arr1.concat(arr2)
console.log(arrMerge);

let merge = [].concat(arr1,arr2)
console.log(merge);

let demo =[...'sakthi']
console.log(demo);

let arr = [2,4,[4,3,2],[34,[4,5,[3,25,45]]]]
console.log(arr.length);

nestArr = Array(
  [1,"gjsb",],
  [2, "vs"]
)

nestArr.forEach(function(i){
  i.forEach(function(j){
    console.log(j);
  })
})

obj1 ={
  name: "sakthi",
  pin : 641022
}

function objPassing(obj1){
  return obj1.name
}
console.log(objPassing(obj1))

tat=(a,b)=> a*b;
console.log(tat(2, 3));