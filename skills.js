const text = "Skills";
const delay = 80; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("skill-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

let peachCount=0;
function peach(){
    document.getElementById('peach').addEventListener('click', function(){
        peachCount++;
        if (peachCount<12){
            var peachPic = document.createElement("img");
            peachPic.src="peach.png";
            peachPic.classList.add("peachPic");
            document.getElementById("col2").appendChild(peachPic);
        }
        else{
            alert("PEEEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAACCCCCCCCCCCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        }
    });
}

window.onload = function (){
    peach();
    typeText();
};