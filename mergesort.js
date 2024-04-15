var arrayContainer = document.querySelector(".array_container");
var slider = document.querySelector("#dynamicArraySizeInput");
var slider_text = document.querySelector("#slider_value");
var btn_bubble = document.querySelector("#bubble");
var btn_merge = document.querySelector("#merge");
var btn = document.querySelector("button");
let baar = [];
     
var greenBar = document.querySelectorAll("Bars");


          function getRandonHeight(){
               return Math.floor(Math.random() * 600 )+ 100 //  - 750 range chalte chalteeee no prob
          }

          function toCreateBars(size){
               arrayContainer.innerHTML = '';
               baar = [];
               for(i = 0 ;  i < size ; i++){

                    const bar = document.createElement('div');
                    bar.classList.add("bars");
                    bar.style.height = getRandonHeight() + 'px';
                    arrayContainer.appendChild(bar);
                    baar.push(bar);
               }
               
          }
async function mergeSortVisualization() {

   

     await mergeSortHelper(0, baar.length - 1);
    
   
 }
 
 async function mergeSortHelper(start, end) {
     if (start >= end) return;
 
     const mid = Math.floor((start + end) / 2);
 
     // Recursively sort left and right 
     await mergeSortHelper(start, mid);
     await mergeSortHelper(mid + 1, end);
 
     // Merge the sorted
     await merge(start, mid, end);
 }
 
~
async function merge(start, mid, end) {
    const leftArray = baar.slice(start, mid + 1);
    const rightArray = baar.slice(mid + 1, end + 1);
    const mergedArray = [];

    let leftIndex = 0, rightIndex = 0, mergeIndex = start;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        // Compare the heights
        if (parseInt(leftArray[leftIndex].style.height) <= parseInt(rightArray[rightIndex].style.height)) {
         
            mergedArray.push(leftArray[leftIndex++]);
        } else {
          
            await swapBars(baar[mergeIndex], rightArray[rightIndex]);
            mergedArray.push(rightArray[rightIndex++]);
        }
        mergeIndex++; 
    }


    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex++]);
        mergeIndex++; // Update mergeIndex
    }


    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex++]);
        mergeIndex++; // Update mergeIndex
    }

    for (let i = 0; i < mergedArray.length; i++) {
        baar[start + i] = mergedArray[i];
    }
}



async function swapBars(bar1 , bar2){
     
    console.log(bar1,bar2);


     const orginalColor = bar1.style.backgroundColor;

     const tempHeight = bar1.style.height;

     bar1.style.height = bar2.style.height;
     bar2.style.height = tempHeight;

     bar2.style.backgroundColor = "#c1121f";


     await new Promise(resolve => setTimeout(resolve , 10));

     bar1.style.backgroundColor = orginalColor;
     bar2.style.backgroundColor = orginalColor;
     
}


toCreateBars(slider.value);
          
slider.addEventListener("input" , ()=>{
     const newSize = slider.value;
     slider_text.textContent = `Array Size: ${newSize}`;
     toCreateBars(newSize);

     
});

btn_merge.addEventListener('click',() => {
     mergeSortVisualization();

     
     
});