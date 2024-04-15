var greenBar = document.querySelectorAll("Bars");
var btn_quick = document.querySelector("#quick");
function getRandonHeight(){
     return Math.floor(Math.random() * 600 )+ 100;
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
          baar.push(bar)
     }
}

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

btn_quick.addEventListener('click',() => {
     quickSort(baar, 0, baar.length-1); 

     disableButtons();
});

async function partition(ele, low, high) {
     let pivot = ele[low];
     let i = low;
     let j = high;
 
     while (i <= j) {
         while (parseInt(ele[i].style.height) <= parseInt(pivot.style.height)) {
             i++;
             ele[i].style.backgroundColor = "red";
             await new Promise(resolve => setTimeout(resolve, 100));
         }
 
         while (parseInt(ele[j].style.height) > parseInt(pivot.style.height)) {
             j--;
             ele[j].style.backgroundColor = "red";
             await new Promise(resolve => setTimeout(resolve, 100));
         }
 
         if (i < j) {
               pivot.style.backgroundColor="blue";
             await swapBars(ele[i], ele[j]);
         }
     }
 
     await swapBars(pivot, ele[j]);
     return j;
 }
 
 async function quickSort(ele, low, high) {
     if (low < high) {
        let pi = await partition(ele, low, high);
        await quickSort(ele, low, pi - 1);
        await quickSort(ele, pi + 1, high);
    }
        // All bars are sorted, mark them red
        for (let i = low; i <= high; i++) {
            ele[i].style.backgroundColor = "green";
        
    }
     
     enableButtons();
 }
 