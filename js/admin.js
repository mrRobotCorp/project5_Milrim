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

function selectAll(selectAll) {
    const memChBox = document.getElementsByName('memOne');
    
    memChBox.forEach((e) => {
        e.checked = selectAll.checked;
    })
}

allCh.onclick = function () {
    selectAll(this);
}

// ------------------ 페이지네이션, keyup 검색 ------------------------------
var options = {
    valueNames: ['memCheck', 'memId', 'memPw', 'name', 'emailAdr', 'pNumber', 'author' ],
    page: 9,
    pagination: true
};

var userList = new List('users', options);

for(let i=1; i<=20; i++) {

    userList.add({
        memCheck : `<input type="checkbox" name="memOne" id="mem` + i +`" value="">
        <label for="mem` + i + `"></label>`,
        memId: "thisisid" + i,
        memPw : "pww100" + i,
        name: "회원" + i,
        emailAdr : "exp" + i + "@naver.com",
        pNumber : "010-11" + i +"-2222",
        author : "member"
    });
}