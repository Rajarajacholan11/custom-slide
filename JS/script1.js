let select=document.getElementById("dc");
select.addEventListener("change",()=>{
    let selectedclass=document.querySelector(`.${select.value}`);
    selectedclass.classList.toggle="show";
    let container=document.querySelector(".container");
    let childes=container.children;
    for( let i=0;i<childes.length;i++)
        {
            if(childes[i].classList.contains(`${select.value}`)){
                childes[i].classList.add("show");
            }
            else
            {
                childes[i].classList.remove("show");
            }
        
        console.log(childes[i]);
        
            
        }    
    
})


let slideIndex=0;
function showSlides(){
    let slides=document.getElementsByClassName("slide");
    console.log(slides);
    
    for(let i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";

    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex=1}
    
        slides[slideIndex-1].style.display="block";
        setTimeout(showSlides,2000);
    
    function plusSlide(n){
        showSlides(slideIndex +=n);
    }
}
document.addEventListener("DOMContentLoaded",()=>{showSlides()});


let slideIndex2=0;
function showSlides2(){
    let slides2=document.getElementsByClassName("slide2");
    
    for(let i=0;i<slides2.length;i++)
    {
        slides2[i].style.display="none";

    }
    slideIndex2++;
    if(slideIndex2 > slides2.length){slideIndex2=1}
    
        slides2[slideIndex2-1].style.display="block";
        setTimeout(showSlides2,2000);
    
    function plusSlide2(n){
        showSlides2(slideIndex2 +=n);
    }
}
document.addEventListener("DOMContentLoaded",()=>{showSlides2()});

let slideIndex3=0;
function showSlides3(){
    let slides3=document.getElementsByClassName("slide3");
    
    for(let i=0;i<slides3.length;i++)
    {
        slides3[i].style.display="none";

    }
    slideIndex3++;
    if(slideIndex3 > slides3.length){slideIndex3=1}
    
        slides3[slideIndex3-1].style.display="block";
        setTimeout(showSlides3,2000);
    
    function plusSlide3(n){
        showSlides3(slideIndex3 +=n);
    }
}
document.addEventListener("DOMContentLoaded",()=>{showSlides3()});