const bar=document.querySelector(".bar");
const innerBar=document.querySelector(".fa-bars");
const overlay=document.querySelector(".overlay");
bar.addEventListener("click",()=>{
    overlay.style.display="flex"
});
innerBar.addEventListener("click",()=>{
    overlay.style.display="none"
});