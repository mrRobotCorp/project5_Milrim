// ------------------- 요일 별 백그라운드 변경 ----------------
let date = new Date();
let day = date.getDay();

const dayList = document.querySelectorAll(".dayList");

for(let i=0; i<7; i++) {
    if (day == i+1) {
        dayList[i].style.background = "#fff4bb";
        dayList[i].style.border = "none";
    } else if (day == 0) {
        dayList[6].style.background = "#fff4bb";
        dayList[6].style.border = "none";
    }
};

AOS.init();

// ----- slider ------
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