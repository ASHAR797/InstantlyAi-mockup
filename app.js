// Swiper js
var swiper = new Swiper(".mySwiper", {});

// Hamburger navigation 

let menu = document.querySelector(".menu")
let navigation = document.querySelector("#navigation")

menu.addEventListener("click", function () {
    let visibility = navigation.getAttribute("data-visible")
    if (visibility === "false") {
        navigation.setAttribute("data-visible", true)
        menu.setAttribute("aria-expanded", true)
    }
    else if (visibility === "true") {
        navigation.setAttribute("data-visible", false)
        menu.setAttribute("aria-expanded", false)
    }
})

// Gsap Animation
let tl = gsap.timeline()
tl.from(".sec-1>div>div:nth-child(1) , .sec-1>div>div:nth-child(2)", {
    duration: 1,
    y: 160,
    opacity: 0,
    stagger: 0.5,
})

tl.from(".sec-2 div:nth-child(1) img:nth-child(6)", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360 ,
    scrollTrigger: ".sec-2",
}).from(".sec-2 div:nth-child(1) img:nth-child(3)", {
    scale: 0,
    delay: 1,
    duration: 1,
    rotate: 360 ,
    scrollTrigger: ".sec-2",
})

