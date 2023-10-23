//  FOR MAKING RESPONSIVE NAVBAR

// Resopnsive menu btn
const MenuBtn_Resp = document.querySelector('.navbar-responsive-icon');
// navbar appear on clicking on Responsive menu btn
const navbar = document.querySelector('.navbar');
// right nav
const rightNav = document.querySelector('.rightNav');
// left nav
const leftNav = document.querySelector('.leftNav');
// top banner
const topBanner = document.querySelector('.topBanner');
MenuBtn_Resp.addEventListener('click' , function(){
    
    navbar.classList.toggle('navbarResp');
    rightNav.classList.toggle('rightNavResp');
    leftNav.classList.toggle('leftNavResp');
    topBanner.classList.toggle('topBannerResp');
})

// const allImages = document.querySelectorAll('.image');
// const image1 = document.querySelector('.image');
// let i=0;


// function auto() {
//     if (i < allImages.length) {
//       allImages[i].style.transform = `translateX(${-768 * i}px)`;
//       i++;
//     } else {
//       i = 0;
//       allImages[0].style.transform = `translateX(0)`;
//     }
//   }
  

// setInterval(auto ,1000)

var firstIndex=0;
function auto(){
    setTimeout(auto , 2000);
    var pics;
    const img= document.querySelectorAll('.image');
    for(pics=0 ; pics<img.length ; pics++){
        img[pics].style.display = "none";
    }
    firstIndex++;
    if(firstIndex>img.length){
        firstIndex=1;
    }
    img[firstIndex-1].style.display = 'block';
}
auto();