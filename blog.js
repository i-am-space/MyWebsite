const text = "Blog";
const delay = 100; // Delay in milliseconds between each character

let index = 0;

function typeText(){
  if (index < text.length) {
    document.getElementById("blog-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, delay);
  }
}

window.onload = function (){
    typeText();
};