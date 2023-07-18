document.addEventListener('DOMContentLoaded', () => { 
    const player = new Plyr('#player');
    window.player = player;

    const starBtn = document.querySelector(".starBtn");

    starBtn.onclick = function() {
        this.classList.toggle("active");
    }

  
    // ---------- 공유 버튼 (링크 복사) -------------
    const url = window.document.location.href;
    const sBtn = document.querySelector(".shareBtn");
    
    sBtn.onclick = function() {
        window.navigator.clipboard.writeText(url).then(() => {
            alert("복사되었습니다.");
        });
    };
    
  });