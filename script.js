
/* شروع خانه */
const hamburgerBtn=document.querySelector('.hamburger-btn')
const xBtn=document.querySelector('.x-btn')

hamburgerBtn.addEventListener('click', ()=>{
document.querySelector('.side-nav').style.right='0'
})
xBtn.addEventListener('click',()=>{
    document.querySelector('.side-nav').style.right='-100%' 
})
/* پایان خانه */

/* شروع پروژه */
const rangeBtn=document.querySelector('.mode-toggle')

function show(){
if(rangeBtn.value==1){
document.getElementById('desktop').style.display='block'
document.getElementById('mobile').style.display='none'
}
else{
document.getElementById('mobile').style.display='block'
document.getElementById('desktop').style.display='none'
}
}
rangeBtn.addEventListener('input', show);
/* پایان خانه */
