var arrayContainer = document.querySelector(".array_container");
var slider = document.querySelector("#dynamicArraySizeInput");
var slider_text = document.querySelector("#slider_value");
var btn_bubble = document.querySelector("#bubble");
var btn_merge = document.querySelector("#merge");
var btn = document.querySelector("button");
let baar = [];

var greenBar = document.querySelectorAll("Bars");
// bar le height pahiejeee umm

function getRandonHeight(){
     return Math.floor(Math.random() * 600 )+ 100 //  - 750 range chalte chalteeee no prob
}

function toCreateBars(size){
     arrayContainer.innerHTML = '';
     baar = [];
     for(i = 0 ;  i < size ; i++){
          const height = getRandonHeight();

          const bar = document.createElement('div');
          bar.classList.add("bars");
          bar.style.height = height + 'px';
          bar.innerText = height;
          bar.style.color = "#fff";
          bar.style.fontSize = ".7vw"
          console.log(height);
          arrayContainer.appendChild(bar);
          baar.push(bar);

     }
}

// now bubble


async function bubbleSort(){

     
     disableButtons();

     const n = baar.length;
     for(let i = 0 ; i < n ; i++){
          for(let j = 0 ; j < n - i - 1 ; j++) {// last element check nhi karava lagt har veles 
               if(parseInt(baar[j].style.height) > parseInt(baar[j+1].style.height)){
                    await swapBars(baar[j] , baar[j+1]);
               }
          }
     }

     
     enableButtons();

     baar.forEach(x => {
          x.style.backgroundColor='green';
     })
}
// actual swap done here code 
async function swapBars(bar1 , bar2){

     const orginalColor = bar1.style.backgroundColor;

     const tempHeight = bar1.style.height;

     bar1.style.height = bar2.style.height;
     bar2.style.height = tempHeight;

     bar2.style.backgroundColor = "#c1121f";

     await new Promise(resolve => setTimeout(resolve , 100));

     bar1.style.backgroundColor = orginalColor;
     bar2.style.backgroundColor = orginalColor;

}


function disableButtons() {
     btn.disabled = true;
     slider.disabled = true;
}
function enableButtons() {
     btn.disabled = false;
     
     slider.disabled = false;
}

toCreateBars(slider.value);

slider.addEventListener("input" , ()=>{
     const newSize = slider.value;
     slider_text.textContent = `Array Size: ${newSize}`;
     toCreateBars(newSize);

     
});


btn_bubble.addEventListener('click',() => {
     bubbleSort();
     
});