var btn_quick = document.querySelector("#quick");
var btn_insertion = document.querySelector("#insertion");

var greenBar = document.querySelectorAll("Bars");




async function insertion(){
     disableButtons();
     const n = baar.length;
     for(let i = 0 ; i < n ; i++){
          let key = baar[i].style.height;

          let j = i -1;
          while(j >= 0 && parseInt(baar[j].style.height) > parseInt(key)){
               await swapBars(baar[j] , baar[j+1]);
               j--;
          }
          baar[j+1].style.height = key;
     }
     enableButtons();

}


slider.addEventListener("input" , ()=>{
     const newSize = slider.value;
     slider_text.textContent = `Array Size: ${newSize}`;
     toCreateBars(newSize);
});

btn_insertion.addEventListener('click',() => {
     insertion(); 


});