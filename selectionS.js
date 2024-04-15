var greenBar = document.querySelectorAll("Bars");
var btn_selection = document.querySelector("#selection");

async function selectionSort(){


     disableButtons();
     const n = baar.length;
     for(let i = 0 ; i < n ; i++){
          let minIndex = i;
          for(let j = i+1 ; j < n ; j++){
               if(parseInt(baar[j].style.height) < parseInt(baar[minIndex].style.height)) minIndex = j;
          }
          await swapBars(baar[i], baar[minIndex]);
     }
     enableButtons();



}


slider.addEventListener("input" , ()=>{
     const newSize = slider.value;
     slider_text.textContent = `Array Size: ${newSize}`;
     toCreateBars(newSize);
});

btn_selection.addEventListener('click',() => {
     selectionSort(); 
});