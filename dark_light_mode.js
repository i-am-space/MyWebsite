var mode = document.getElementById("mode");
mode.onclick=function(){
    document.body.classList.toggle("light-theme");
    // adds or removes (toggles) the light theme class on our CSS file, enabling us to switch b/w thw two
    if (document.body.classList.contains("light-theme")){mode.src="moon.png";}
    else {mode.src="sun.png";}
}