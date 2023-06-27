
//star header//

//  ساید بار شروع //  ساید بار شروع 



function openSideNav() {
  document.getElementsByClassName('sideNav')[0].style.right = '0';
  document.getElementsByClassName('sideNav')[0].style.width = '50vw';
}



function closeSideNav() {
  document.getElementsByClassName('sideNav')[0].style.right = '-400px';
  document.getElementsByClassName('sideNav')[0].style.width = '0';
}



// ساید بار پایان  ساید بار پایان 

// شروع اسلاید هدر

const panels=document.querySelectorAll('.panel')
let currentIndex = 0;
/*باز شدن اسلاید توسط کاربر*/
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        /*پاک شدن تابع نمایش اتوماتیک اسلاید توسط کلیک کاربز*/
        clearInterval(intervalId)
        panel.classList.add('active')
    })
})

function  removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}
/*باز بسته شدن اسلاید به صورت اتوماتیک*/
// const intervalId = setInterval(show, 4000);

function show() {
    panels.forEach((panel, index) => {
      if (index === currentIndex) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  
    currentIndex = (currentIndex + 1) % panels.length;
  }

// پایان اسلاید هدر
//end header//

// start section one
 
// ابتدا المان‌ها را دریابید
const adventureCarts = document.querySelector('.adventure');
const holidaysCarts = document.querySelector('.holidays');
const buttonOfSectionOne= document.querySelectorAll('.choose-trip-box')
// تعریف تابع displayAdventureCarts
function displayAdventureCarts(button) {
  holidaysCarts.classList.remove('active');
  adventureCarts.classList.add('active');
  buttonOfSectionOne[0].style.backgroundColor = '#fff';
  button.style.backgroundColor = '#F4F7C5';
}

// تعریف تابع displayHolidaysCarts
function displayHolidaysCarts(button) {
  adventureCarts.classList.remove('active');
  holidaysCarts.classList.add('active');
  buttonOfSectionOne[1].style.backgroundColor = '#fff';
  button.style.backgroundColor = '#F4F7C5';
}
 


// function backGroundColor(){
//   let buttonOfSectionOne= document.querySelectorAll('.choose-trip-box')
//   if(holidaysCarts.classList.contains('active')){
//    buttonOfSectionOne[0].style.backGroundColor='#F4F7C5'
//   }
//   else(buttonOfSectionOne[1].style.backGroundColor='#F4F7C5')
// }
