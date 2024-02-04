// Add your JavaScript code here
const text = "Education";
const delay = 80; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("edu-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

let marioCount=0;
function mario(){
    document.getElementById('mario').addEventListener('click', function(){
        marioCount++;
        if (marioCount<12){
            var marioPic = document.createElement("img");
            marioPic.src="mario.png";
            marioPic.classList.add("marioPic");
            document.getElementById("col4").appendChild(marioPic);
        }
        else{
            alert("NO MORE MARIO NO MORE MARIO NO MORE MARIO NO MORE MARIO")
        }
    });
}

window.onload = function (){
    mario();
    typeText();
};
