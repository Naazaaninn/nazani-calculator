let displayBox=document.querySelector(".display");
let isLogMode = false;
let isPercentMode = false;


function showDisplay(event){
  const x=event.target.innerText;

  if(displayBox.innerHTML==0){
    return displayBox.innerHTML=x;
  }
  return displayBox.innerHTML+=x;
}

function calculate(){
  let result=displayBox.innerText;
  let numbers = result.split(/[*\/+\-]/); 
    // log10 
  if (isLogMode) {
    let number = parseFloat(result);
    if (number > 0) {
      result = Math.log10(number); 
    } else {
      result = ""; 
    }
    isLogMode = false;
  } 
     // % percent

  else if (isPercentMode) {
    if (numbers.length === 2) {
      let total = parseFloat(numbers[0]);
      let percentage = parseFloat(numbers[1]);
      result = total * (1 - percentage / 100);
    } else {
      result = parseFloat(result) / 100;
    }
    isPercentMode = false;
  } 
  
displayBox.innerText=eval(result)
}

function allClear(){
  displayBox.innerText=0;
}

function clear(){
  let text=displayBox.innerText;
  if(text.length===1){
    displayBox.innerText=0
  }else{
    displayBox.innerText=text.substring(0,text.length-1)   //789
  }
}
function percent() {
  isPercentMode = true;
}

function logCalc() {
  isLogMode = true;
}

document.querySelector(".percent").addEventListener("click", percent);
document.querySelector(".logCalc").addEventListener("click", logCalc);
document.querySelector(".calculate").addEventListener("click",calculate);
document.querySelector(".all-clear").addEventListener("click",allClear);
document.querySelector(".clear-last").addEventListener("click",clear);
let list=document.querySelectorAll(".show-display");

list.forEach(item=>{
  item.addEventListener("click",showDisplay)
})