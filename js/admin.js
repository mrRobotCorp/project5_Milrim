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

function selectAll(selectAll) {

    memChBox.forEach((e) => {
        e.checked = selectAll.checked;
    })
}

allCh.onclick = function () {
    selectAll(this);
}

// ---- 체크된 항목 true 값으로 반환해서 배열에 넣기 -----
const chArry = [];
const isCheck = false;
const delBtn = document.querySelector(".delBtn");

delBtn.onclick = function() {
    checkList();
}

function checkList() {
    memChBox.forEach((e, i) => {
        if(e.checked == true) {
            console.log(i + "번 check");
        }
    })
}



// ------------------ 멤버 조회 - 페이지네이션, keyup 검색 ------------------------------
var options = {
    valueNames: ['memCheck', 'memId', 'memPw', 'name', 'emailAdr', 'pNumber', 'author'],
    page: 9,
    pagination: true
};

var userList = new List('users', options);

for (let i = 1; i <= 20; i++) {
    userList.add({
        memCheck: `<input type="checkbox" name="memOne" id="mem` + i + `" value="">
        <label for="mem` + i + `"></label>`,
        memId: "thisisid" + i,
        memPw: "pww100" + i,
        name: "회원" + i,
        emailAdr: "exp" + i + "@naver.com",
        pNumber: "010-11" + i + "-2222",
        author: "member"
    });
}


// ----------------------- modal ---------------------------------
document.addEventListener('DOMContentLoaded', function () {
    
    var elems = document.querySelector('.modal');
    var instances = M.Modal.init(elems, options);
    
    var listRow = document.querySelectorAll(".listRow");
    listRow.forEach((e) => {
        e.ondblclick = function() {
            instances.open();
        }
    });

    // ---- modal 영역 밖 클릭 시 닫기
    document.addEventListener('mouseup', function(e) {
        if(!elems.contains(e.target)) {
            instances.close();
        }
    });

});