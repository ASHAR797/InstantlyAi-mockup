var swiper = new Swiper(".mySwiper", {});

// section 5 Accordion
let accordion    = document.querySelector(".sec-5-accordion-container > div:nth-child(1)")
let accordion_child_conatiner = document.querySelector(".sec-5-accordion-container>div:nth-child(2)")
accordion   .addEventListener("click" ,  function(){
    if(accordion_child_conatiner.style.display = "none"){
        accordion_child_conatiner.style.display = "flex"
    }
    else{
        accordion_child_conatiner.style.display = "none"
    }
})

// Hamburger navigation 

let menu  = document.querySelector(".menu")
let navigation = document.querySelector("#navigation")

menu.addEventListener("click",function () {
   let visibility  = navigation.getAttribute("data-visible")
   if(visibility === "false") {
      navigation.setAttribute("data-visible",true)
      menu.setAttribute("aria-expanded",true)
   }
   else if(visibility === "true") {
       navigation.setAttribute("data-visible",false)
       menu.setAttribute("aria-expanded",false)
 }
})