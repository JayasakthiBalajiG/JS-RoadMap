async function load() {

    // return (await fetch("data/demo.json")).json();

  const res = await fetch("/data/demo.json");
  console.log(res);

  const usr = await res.json(); // converting http request to json manually
  return usr;
}

document.addEventListener("DOMContentLoaded", async  function(){
    let users = [];
    console.log("load func");
    users = await load();
    console.log(users);
});


function same(){
    if(dummyOne === dummyTwo){
        return true;
    }
    else{
        return false;
    }
}

let dummyOne =1;
let dummyTwo ="1";

console.log(same(dummyOne, dummyTwo));


// async function loadDemo(){
//     console.log("load demo");
//     let response = await fetch("data/demo.json").then(response => response.json()).then(console.log(response));
// }

// loadDemo();
