"use strict";
AOS.init({
    once: true, 
    duration: 1200,
});
let faBars=document.querySelector(".fa-bars");
let menu=document.querySelector(".menu")
faBars.addEventListener("click",function(){
    menu.classList.toggle("show")
})