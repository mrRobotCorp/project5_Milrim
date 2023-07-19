
document.addEventListener("DOMContentLoaded", function () {
    
    const postAll = document.querySelectorAll(".postAll");
    const morePost = document.querySelectorAll(".morePost");
    const section = document.querySelector(".postSection");

    // -----------------------------------------------
    // document.getElementById("scrollTop").onclick = function () {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //     });
    // };

    // ---------------- post hide -------------------
    const hideBtn = document.querySelectorAll(".hide");

    hideBtn.forEach( (e, i) => {
        e.onclick = function() {
            const hideCh = confirm("해당 게시글을 숨기시겠습니까?");
            if(hideCh) {
                postAll[i].style.display = "none"; 
            }
        }
    });


    // --------------- copy ----------------
    const postObj = document.querySelectorAll(".pContent p");
    const copy = document.querySelectorAll(".copy");

    copy.forEach( (e, i) => {
        e.onclick = function() {
            const postTxt = postObj[i].innerText;
            window.navigator.clipboard.writeText(postTxt).then(() => {
                alert("복사되었습니다.");
            });
        };
    });

    // -------------- more list --------------
    const pMore = document.querySelectorAll(".postMore");
    const moreList = document.querySelectorAll(".moreList");
    const cmmtMore = document.querySelectorAll(".cmmtMore");
    const cmmtMoreList = document.querySelectorAll(".cmmtMoreList");
    
    document.addEventListener('mouseup', function(e) {
        for(let i=0; i<moreList.length; i++) {
            if(!moreList[i].contains(e.target)) {
                moreList[i].classList.remove("active");
            }
        }
    });
    
    pMore.forEach( (e, i) => {
        e.onclick = function() {
            moreList[i].classList.toggle("active");
        };
    });
    
    cmmtMore.forEach( (e, i) => {
        e.onclick = function() {
            cmmtMoreList[i].classList.toggle("active");
        };
    });


    // -------------- like, comment btn --------------
    const like = document.querySelectorAll(".like");
    like.forEach( (e) => {
        e.onclick = function() {
            this.classList.toggle("active");
        };
    });
    
    const disCommt = document.querySelectorAll(".disCommt");
    const cmmtBtn = document.querySelectorAll(".cmmtBtn");
    cmmtBtn.forEach( (e, i) => {
        e.onclick = function() {
            if( disCommt[i] != null) {
                disCommt[i].classList.toggle("active");
            }

        }
    });


})

$(document).ready(function () {

    // --------------- post more -------------------
    load('.postSection', '3');

    $(".morePost").on("click", function () {
        load('.postSection', '3', $(".morePost"));
    })
    
    function load(id, cnt, btn) {
        let plist = id + " .postAll:not(.active)";
        let plength = $(plist).length;
        let postTotal;
        if (cnt < plength) {
            postTotal = cnt;
        } else {
            postTotal = plength;
            $(btn).hide();
        }
        $(plist + ":lt(" + postTotal + ")").addClass("active");
    }
    
    
    
    // ---------------------- scrollTop ------------------------------
    // const Height = $("#scrollTop").height();
    // $("#scrollTop").hide();

    // $(window).scroll(function () {
    //     var rolling = $(this).scrollTop() >= Height;
    //     if (rolling) {
    //         $("#scrollTop").fadeIn(500).css({ "position": "fixed" });
    //     }
    //     else {
    //         $("#scrollTop").fadeOut(300);
    //     }

    // });



})