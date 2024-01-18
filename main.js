
let button = document.getElementById("click"),
  count = 0;
let counter= document.getElementById("texte");

button.onclick = function() {
  count += 1;
  counter.innerHTML = "Click counter: " + count;
  
};
