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
    location.href="../index.html";
  });
}


// form

const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const company = document.getElementById("company");
const title = document.getElementById("title");
const message = document.getElementById("message");


form.addEventListener("submit", (e)=> {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue =username.value.trim();
  const emailValue = email.value.trim();
  const companyValue = company.value.trim();
  const titleValue = title.value.trim();
  const messageValue = message.value.trim();
  
  if(usernameValue === "") {
    setErrorFor(username, "This field can't be empty");
  } else {
    setSuccessFor(username);
  }
  if(emailValue === "") {
    setErrorFor(email, "This field can't be empty");
  } else {
    setSuccessFor(email);
  }
  if(companyValue === "") {
    setErrorFor(company, "This field can't be empty");
  } else {
    setSuccessFor(company);
  }
  if(titleValue === ""){
    setErrorFor(title, "This field can't be empty");
  }
  if(messageValue === "") {
    setErrorFor(message, "This field can't be empty");
  } else {
    setSuccessFor(messege);
  }

};

function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}