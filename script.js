//your JS code here. If required.
let circles=document.querySelectorAll(".circle");
let bars=document.querySelectorAll(".bar");
let nBtn=document.querySelector("#next"); 
let pBtn=document.querySelector("#prev");

circles[0].classList.add("active");
let countB=0;
pBtn.disabled = true;

nBtn.addEventListener("click",()=>{
	 
	if (countB < circles.length - 1) {
    countB++;
    circles[countB].classList.add("active");
    bars[countB - 1].classList.add("active");
  }

  
  pBtn.disabled = false;

  
  if (countB === circles.length - 1) {
    nBtn.disabled = true;
  }
});
pBtn.addEventListener("click", () => {
  if (countB > 0) {
    
    circles[countB].classList.remove("active");
    bars[countB - 1].classList.remove("active");
    countB--;
  }


  nBtn.disabled = false;


  if (countB === 0) {
    pBtn.disabled = true;
  }
});


