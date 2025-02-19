//your JS code here. If required.
let circles=document.querySelectorAll(".circle");
let bars=document.querySelectorAll(".bar");
let nBtn=document.querySelector("#next"); 
let pBtn=document.querySelector("#prev");

let countB=0;

nBtn.addEventListener("click",()=>{
	 
	circles[countB+1].style.background="#9883e5"
	bars[countB].style.background="#9883e5"
		if(countB<bars.length-1 ){
	
	     countB++
	}	 
});

pBtn.addEventListener("click",()=>{ 
	circles[countB+1].style.background="none"
	bars[countB].style.background="none"
		if(countB>0 ){ 
	
	countB--
	}
})

