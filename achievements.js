const text = "Achievements";
const delay = 80; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("ach-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

let bowserCount=0;
function bowser(){
    document.getElementById('bowser').addEventListener('click', function(){
        bowserCount++;
        if (bowserCount<12){
            var bowserPic = document.createElement("img");
            bowserPic.src="bowser.png";
            bowserPic.classList.add("bowserPic");
            document.getElementById("col2").appendChild(bowserPic);
        }
        else{
            alert("BOWSER'S GOING THROUGH SOME SHIT RN STOP")
        }
    });
}

window.onload = function (){
    bowser();
    typeText();
};