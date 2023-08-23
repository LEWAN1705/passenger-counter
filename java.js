let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count ;
    // console.log(count);
}
function decrement() {
    count -= 1;
    countEl.innerText = count ; 

}
// 1. Create a function, save(), which logs out the count when it's called

 function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
 }


let welcomeEl = document.getElementById("welcome-el");
// console.log(welcomeEl); 


let name = "Lewan";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + name;
welcomeEl.innerText += "👋";


