var typed = new Typed('#element', {
    strings: ['Web Designer', 'Web Developer','UI Designer'] ,
    typeSpeed: 50,
    backSpeed:50,
    loop: true,
});


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

const scriptURL = 'https://script.google.com/macros/s/AKfycbx1z_fJ3BBmgdW8P6zyRKeP2H9us9Uk3aLsJbdtUjsurJBbUz6iS5_IuEoZP4TwDo3xHA/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully !";
                setTimeout(function(){
                    msg.innerHTML = ""
                },3000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })