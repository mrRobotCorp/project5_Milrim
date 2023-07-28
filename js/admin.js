// -------------------- 사이드 탭 --------------------------
const tabs = document.querySelectorAll(".nav li");
const href = window.location.href;

if (href.includes("mem")) {
    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");
    tabs[2].classList.remove("active");
} else if (href.includes("vid")) {
    tabs[0].classList.remove("active");
    tabs[1].classList.add("active");
    tabs[2].classList.remove("active");
} else {
    tabs[0].classList.remove("active");
    tabs[1].classList.remove("active");
    tabs[2].classList.add("active");
}

// --------------- 전체 선택 ----------------------
const allCh = document.querySelector("#allCh");
const memChBox = document.getElementsByName('memOne');
const pstChBox = document.getElementsByName('pstOne');
const vidChBox = document.getElementsByName('vidOne');

function selectAll(selectAll) {
    memChBox.forEach((e) => {
        e.checked = selectAll.checked;
    });
    pstChBox.forEach((e) => {
        e.checked = selectAll.checked;
    });
    vidChBox.forEach((e) => {
        e.checked = selectAll.checked;
    });

}

allCh.onclick = function () {
    selectAll(this);
}

// --------- 삭제 - 체크된 항목 배열에 넣기 ---------
const chArry = [];
const delBtn = document.querySelector(".delBtn");
const memCh = document.getElementsByName("memOne");
const pstCh = document.getElementsByName("pstOne");
const vidCh = document.getElementsByName("vidOne");

delBtn.onclick = function() {
    checkList();
    console.log(chArry);
}

function checkList() {
    memChBox.forEach((e, i) => {
        if(e.checked == true) {
            console.log(i + "번 check");
            chArry.push(memCh[i].value);
        }
    })
    pstChBox.forEach((e, i) => {
        if(e.checked == true) {
            console.log(i + "번 check");
            chArry.push(pstCh[i].value);
        }
    })
    vidChBox.forEach((e, i) => {
        if(e.checked == true) {
            console.log(i + "번 check");
            chArry.push(vidCh[i].value);
        }
    })
}

// ----------------------- modal ---------------------------------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("body").insertAdjacentHTML("afterbegin", `
        <div class="darkBg"></div>`);

    const bg = document.querySelector(".darkBg");
    const uptBtn = document.querySelector(".uptBtn");
    const closeBtn = document.querySelector(".modal-close");
    var elems = document.querySelector('.modal');
    var instances = M.Modal.init(elems, options);
    
    var listRow = document.querySelectorAll(".listRow");

    uptBtn.onclick = function() {
        instances.open();
        bg.classList.add("active");
    }
    
    closeBtn.onclick = function() {
        bg.classList.remove("active");
    }

    listRow.forEach((e) => {
        e.ondblclick = function() {
            instances.open();
            bg.classList.add("active");
        }
    });

    // ---- modal 영역 밖 클릭 시 닫기
    document.addEventListener('mouseup', function(e) {
        if(!elems.contains(e.target)) {
            instances.close();
            bg.classList.remove("active");
        }
    });

});
