
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
function show(input) {
    var container = input.closest('.projects-contianer');
    var desktopImage = container.querySelector('#desktop');
    var mobileImage = container.querySelector('#mobile');
    if (input.value == 1) {
        desktopImage.style.display = 'block';
        mobileImage.style.display = 'none';
    } else {
        mobileImage.style.display = 'block';
        desktopImage.style.display = 'none';
    }
} 
/* پایان پروژه */
