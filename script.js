var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var num3=document.getElementById("num3");
var but=document.getElementById("but");
var btn=document.getElementsByClassName("btn");

function show() {
 
    /* Access image by id and change
    the display property to block*/
    document.getElementById('image')
            .style.display = "block";

    document.getElementById('btnID')
            .style.display = "none";
}

btn.addEventListener("click",NextImage);

function addNumbers(){
    num3.value=num1.value+num2.value;
}

but.addEventListener("click",addNumbers);

function setGradient(){
    body.style.background="linear-gradient(to right, "+ color1.value+","+color2.value+")";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
    

