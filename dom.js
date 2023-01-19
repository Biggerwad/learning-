
// I want to click the button and 
// Display another text inside the p tag 

const p = document.getElementById("p")
const button = document.getElementById("button")
function myDisplayer() {
    p.innerHTML = "Still handling it";
  }
  
button.addEventListener('click', myDisplayer)