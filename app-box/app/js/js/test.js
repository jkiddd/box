
var btnOpen = document.getElementById("btn__open");
var btnClose = document.getElementById("btn__close");
var btnBaground = document.getElementById("btn__baground");
var open = document.querySelector(".windows__wrap");
var close = document.querySelector(".close");
var bodyBg = document.querySelector("body_wrap");



function openBtn() {
    open.style.display = "block";
};
 
function closeBtn() {
    open.style.display = "none";

};

function fonBaground(){
   bodyBg.style.backgroundColor = 'background color', 'green';    
};

btnOpen.addEventListener("click", openBtn);
close.addEventListener("click", closeBtn);
btnClose.addEventListener("click", closeBtn);
btnBaground.addEventListener("click", fonBaground);
