
document.addEventListener("DOMContentLoaded", function () {
    
    const postAll = document.querySelectorAll(".postAll");
    const morePost = document.querySelector(".morePost");
    const section = document.querySelector(".postSection");

    // -----------------------------------------------
    document.getElementById("scrollTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

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
    const Height = $("#scrollTop").height();
    $("#scrollTop").hide();

    $(window).scroll(function () {
        var rolling = $(this).scrollTop() >= Height;
        if (rolling) {
            $("#scrollTop").fadeIn(500).css({ "position": "fixed" });
        }
        else {
            $("#scrollTop").fadeOut(300);
        }

    });



})

// ----------------------------------------------------------------------
$.fn.boom = function(e) {
	var colors = [
		'#F95700',
		'#f9bb00',
		'#9500f9',
	];
	var shapes = [
		'<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>', 
		'<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
		'<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
	];

	var btn = $(this);
	var group = [];
	var num = Math.floor(Math.random() * 50) + 30;

	for(i = 0; i < num; i++) {
		var randBG = Math.floor(Math.random() * colors.length);
		var getShape = Math.floor(Math.random() * shapes.length);
		var c = Math.floor(Math.random() * 10) + 5;
		var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
		var x = Math.floor(Math.random() * (150 + 100)) - 100;
		var y = Math.floor(Math.random() * (150 + 100)) - 100;
		var sec = Math.floor(Math.random() * 1700) + 1000;
		var shape = $('<svg class="shape">'+shapes[getShape]+'</svg>');
		
		shape.css({
			top: e.pageY - btn.offset().top + 30,
			left: e.pageX - btn.offset().left + 50,
			'transform': 'scale(0.'+scale+')',
			'transition': sec + 'ms',
			'fill': colors[randBG]
		});

		btn.siblings('.particles').append(shape);

		group.push({shape: shape, x: x, y: y});
	}
	
	for (var a = 0; a < group.length; a++) {
		var shape = group[a].shape;
		var x = group[a].x, y = group[a].y;
		shape.css({
			left: x + 50,
			top: y + 15,
			'transform': 'scale(0)'
		});
	}
	
	setTimeout(function() {
		for (var b = 0; b < group.length; b++) {
			var shape = group[b].shape;
			shape.remove();
		}
		group = [];
	}, 2000);

}	

let pBtn = document.querySelectorAll(".pBtn");
pBtn.forEach((e) =>
    e.onclick = function(ob) {
        $(this).boom(ob);
    }
);


