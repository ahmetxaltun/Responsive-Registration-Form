var nameInput = document.querySelector(".nm-snm");
var emailInput = document.querySelector(".email");
var passInput = document.querySelector(".pass-input");
var glassArea = document.querySelector(".glass-area");

nameInput.addEventListener("click", function(){
  glassArea.style.top = "37px";
  glassArea.style.opacity="0";
  glassArea.style.visibility="hidden";
})

emailInput.addEventListener("click", function(){
  glassArea.style.top = "37px";
  glassArea.style.opacity="0";
  glassArea.style.visibility="hidden";
})

passInput.addEventListener("click", function(){
  if(window.innerWidth > 550){
    glassArea.style.top = "45px";
    glassArea.style.opacity="1";
    glassArea.style.visibility="visible";
  } else{
    glassArea.style.top = "43px";
    glassArea.style.opacity="1";
    glassArea.style.visibility="visible";
  }
})
