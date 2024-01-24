document.addEventListener('DOMContentLoaded', () => {

    const player = new Plyr('#player');
    window.player = player;

    const starBtn = document.querySelector(".starBtn");

    starBtn.onclick = function () {
        this.classList.toggle("active");
    }

    // ---------- 공유 버튼 (링크 복사) -------------

    const url = window.document.location.href;
    const sBtn = document.querySelector(".shareBtn");

    sBtn.onclick = function () {
        window.navigator.clipboard.writeText(url).then(() => {
            alert("복사되었습니다.");
        });
    };

    // ---------
    const full = document.querySelector("button[data-plyr=fullscreen]");
    const vid = document.querySelector(".plyr__video-wrapper");
    full.onclick = function() {
        vid.classList.toggle("active");
    }

    function escCode(e) {
        if(e.keyCode == 27) {
            alert("esc");
        }
    }

    vid.addEventListener("keyup", event => {
        escCode(event);
    })


});