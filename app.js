const bar =document.getElementById('bar');
const close=document.getElementById('close');
const navbar=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
        

    })
}
if(close){
    close.addEventListener('click',()=>{
        // console.log("close");
        // navbar.style.display="none";
        navbar.classList.remove('active');
    })
}