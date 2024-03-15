"use strict";
let upButton=document.querySelector("#up-button");
upButton.addEventListener("click",getup)
    function getup(){
        console.log(document.body.scrollHeight)
        if(window.pageYOffset>0){
            window.scrollBy(0,-75)
            setTimeout(getup,0)
        }

    }
let preloader=document.querySelector(".preloader");
document.body.onload=function(){
    setTimeout(function(){
        preloader.classList.add("hide")

    },1000)
}
if(!localStorage.theme){
    localStorage.setItem("theme","light");
}
let themebtn=document.querySelector("#theme-btn");
document.body.className=localStorage.theme;
if(localStorage.theme=="dark"){
    themebtn.innerHTML=`<i class="fa-solid fa-sun"></i>`
}else{
    themebtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
}
themebtn.addEventListener("click",function(){
    if(localStorage.theme=="light"){
        document.body.className="dark";
        themebtn.innerHTML=`<i class="fa-solid fa-sun"></i>`
    }else{
        document.body.className="light";
        themebtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
    }
    localStorage.theme=document.body.className
})
AOS.init({
    once: true, 
    duration: 1200,
});
let faBars=document.querySelector(".fa-bars");
let menu=document.querySelector(".menu")
faBars.addEventListener("click",function(){
    menu.classList.toggle("show")
})

let i=0;
let HTMLprogress=document.querySelector(".html-progress");
let CSSprogress=document.querySelector(".css-progress");
let jsprogress=document.querySelector(".javascript-progress");
let bootstrapProgress=document.querySelector(".bootstrap-progress");
let progressBar=document.querySelector(".progress-bar");
window.addEventListener("scroll",function(){
    let scrollHeight=window.innerHeight;
    setInterval(() => {
        
   
        
        let progressTop=progressBar.getBoundingClientRect().top;
        if(progressTop<scrollHeight-200){
            i++
            if(i<98){
                HTMLprogress.style.width=i+"%";
            }
            }
        
    }, 200);

})

window.addEventListener("scroll",function(){
    let scrollHeight=window.innerHeight;
    setInterval(() => {
        
   
        
        let progressTop=progressBar.getBoundingClientRect().top;
        if(progressTop<scrollHeight-200){
            i++
            if(i<95){
                CSSprogress.style.width=i+"%";
            }
            }
        
    }, 200);

})

window.addEventListener("scroll",function(){
    let scrollHeight=window.innerHeight;
    setInterval(() => {
        
   
        
        let progressTop=progressBar.getBoundingClientRect().top;
        if(progressTop<scrollHeight-200){
            i++
            if(i<88){
                jsprogress.style.width=i+"%";
            }
            }
        
    }, 200);

})

window.addEventListener("scroll",function(){
    let scrollHeight=window.innerHeight;
    setInterval(() => {
        
   
        
        let progressTop=progressBar.getBoundingClientRect().top;
        if(progressTop<scrollHeight-200){
            i++
            if(i<95){
                bootstrapProgress.style.width=i+"%";
            }
            }
        
    }, 200);

})


