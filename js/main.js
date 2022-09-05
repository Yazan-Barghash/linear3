// select landing page
var landing_Page = document.querySelector(".landing-page");
var key = document.querySelector(".key");
var settingsBox = document.querySelector(".settings-box");

// arr of images
let imgsArray = ["1.jpg" , "2.jpg", "3.jpg"];

// change background images
let num = 1;
setInterval(()=>{
    // get random number
    // let num = Math.ceil( Math.random() * imgsArray.length );
    
    // get circule page
    landing_Page.style.backgroundImage = `url("images/${num <= imgsArray.length ? num++ : num = 1 }.jpg")`;
}, 2000)

// open settings box
key.addEventListener("click" , function(){
    settingsBox.classList.toggle("open");
    // document.querySelector(".key h3").innerHTML = "open" ? "close" : "open";
})

let items = document.querySelectorAll(".color-list");

items.addEventListener("click" , function(){
    items.forEach((i)=>{
        i.classList.toggle("active")
    })
})