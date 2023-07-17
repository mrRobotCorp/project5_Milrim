// ------------------- 요일 별 백그라운드 변경 ----------------
let date = new Date();
let day = date.getDay();

const dayList = document.querySelectorAll(".dayList");

for(let i=0; i<7; i++) {
    if(day == i+1) {
        dayList[i].style.background = "#ffd5628e";
    }
};




$(document).ready(function(){
    $('.slider').slick({
        dots: true, 
        arrow: true,
        infinite: true, 
        autoplay: true,
        autoplaySpeed : 1800,
        slidesToShow: 1,
        slidesToScroll: 1, 
    });
});