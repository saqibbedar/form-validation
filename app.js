const form = document.getElementById("form");
const username = document.querySelector("input[type=text]");
const password = document.querySelector("input[type=password]");
const error = document.getElementById("error-msg");
const error2 = document.getElementsByClassName('error2')[0];

const regEX = /^[\w]{6,8}$/;

username.addEventListener('input', (e)=>{
    const isValid = regEX.test(e.target.value);
    if(!isValid){
        username.style.border = 2.5 + "px solid red";
        error.style.visibility = "visible";
        error.style.opacity = 1;
        error.style.height = "auto";
    }
    else{
        username.style.border = 2.5 + "px solid green";
        error.style.visibility = "hidden";
        error.style.opacity = 0;
        error.style.height = "0";
    }
})

password.addEventListener("input", (e)=>{
    const isValidPass = regEX.test(e.target.value);
    if(!isValidPass){
        password.style.border = 2.5 + "px solid red";
        error2.style.visibility = "visible";
        error2.style.opacity = 1;
        error2.style.height = "auto";
    }
    else{
        password.style.border = 2.5 + "px solid green";
        error2.style.visibility = "hidden";
        error2.style.opacity = 0;
        error2.style.height = "0";
    }
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})