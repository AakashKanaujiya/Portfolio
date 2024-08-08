var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    } 

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-220px";
}

document.querySelector(".main").addEventListener("click",()=>{
    sidemeu.style.right = "-220px";
})

document.querySelector("#about").addEventListener("click",()=>{
    sidemeu.style.right = "-220px";
})

document.querySelector("#services").addEventListener("click",()=>{
    sidemeu.style.right = "-220px";
})

document.querySelector("#portfolio").addEventListener("click",()=>{
    sidemeu.style.right = "-220px";
})

document.querySelector("#contact").addEventListener("click",()=>{
    sidemeu.style.right = "-220px";
})