let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".nav-links");
let navBtn = document.querySelector(".nav-btn");
let spanOne = document.querySelector(".ham-one");
let spanTwo = document.querySelector(".ham-two");
let spanThree = document.querySelector(".ham-three");

hamburger.addEventListener("click",()=>{
  navUl.classList.toggle("show");
  navBtn.classList.toggle("show");
  spanOne.classList.toggle("show");
  spanTwo.classList.toggle("show");
  spanThree.classList.toggle("show");
  
});

// logo link
let logoLink = document.querySelectorAll(".logo");
for(let i=0; i<logoLink.length; i++) {
  logoLink[i].addEventListener("click",()=>{
    location.href="index.html";
  });
}

// about-us link
let aboutUs = document.querySelectorAll("#about-us");
for(let i=0; i<aboutUs.length; i++){
  aboutUs[i].addEventListener("click",()=>{
    location.href="./starter-code/about.html";
  });
}