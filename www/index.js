import * as wasm from "addition";
   document.getElementById("#addBtn").addEventListener("click",function() => 
   {
   x = document.getElementById('#firstValue').value;
   y = document.getElementById('#secondValue').value;
   if (!x && !y) {
    alert("please input values") 
    return
   } 
   let z = x+y;
   document.getElementById("#answerDisplay").innerHTML = z;
});

