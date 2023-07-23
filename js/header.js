    
const myProfile = document.querySelector(".myProfile");
const mpList = document.querySelector(".mpList");


myProfile.addEventListener("mouseover", function() {
    mpList.classList.add("active");
});

myProfile.addEventListener("mouseleave", function() {
    mpList.classList.remove("active");
});

mpList.addEventListener("mouseover", function() {
    mpList.classList.add("active");
});

mpList.addEventListener("mouseleave", function() {
    mpList.classList.remove("active");
});

// -------------------------------------
const mypageAll = document.querySelector(".mypageAll");
const adminAll = document.querySelector(".adminAll");
const loc = window.location.href;

if(loc.includes("home")) {
    mypageAll.style.display = "none";
}

if(loc.includes("admin")) {
    adminAll.style.display = "flex";
    myProfile.style.display = "none";
}