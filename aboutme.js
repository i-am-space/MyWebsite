// Add your JavaScript code here
const text = "Nice to meet you.\n            I'm Vishal Rao.";
const delay = 50; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("welcome").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

let luigiCount=0;
function luigi(){
    document.getElementById('luigi').addEventListener('click', function(){
        luigiCount++;
        if (luigiCount<14){
            var luigiPic = document.createElement("img");
            luigiPic.src="luigi.png";
            luigiPic.classList.add("luigiPic");
            document.getElementById("luigi-holder").appendChild(luigiPic);
        }
        else{
            alert("MAX LUIGIS REACHED YOU FREAK STOP ALREADY")
        }
    });
}

// Start typing when the page loads
window.onload = function (){
    luigi();
    typeText();
};
