let burger = document.querySelector(".burger");
let x = document.querySelector(".x");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", ()=>{
    mobileMenu.style.left = "0px";
    x.style.display = "block";
    burger.style.display = "none";
})


x.addEventListener("click", ()=>{
    mobileMenu.style.left = "-100%";
    x.style.display = "none";
    burger.style.display = "block";
})
