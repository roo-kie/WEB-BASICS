//슬라이드 이미지들 선택자
const $slides = document.querySelectorAll(".slide");

//현재 보이는 슬라이드 index값
let current = 0;

// 자동슬라이드기능
window.addEventListener("load", function() {
    setInterval(autoSlide, 3000);
});

const reset = () => {
    $slides.forEach((slide) => {
        slide.style.display = "none";
    });
};

const autoSlide = () => {
    reset ();
    if (current === $slides.lenght - 1) {
        current = -1
    }
    current ++
    $slides [current].style.display = "block";
};


// 수동 슬라이드 기능 : 화살표 

//왼쪽 화살표
const $btn_prev = document.querySelector(".btn_prev");
//오른쪽 화살표
const $btn_next = document.querySelector(".btn_next");

const slideToRight = () => {
    reset();
    if(current===$slides.length -1){
        current = -1;
    }
    current++;
    $slides[current].style.display = "block";
};

$btn_next.addEventListener("click", slideToRight);

const slideToLeft = () => {
    reset();
    if(current=== 0){
        current = $slides.length;
    }
    current--;
    $slides[current].style.display = "block";
};

$btn_prev.addEventListener("click", slideToLeft);


//메뉴창

// 메뉴 아이콘 선택자
const menuOpenEl = document.getElementById('icon_apps')

//사이드메뉴 선택자
const sideMenuEl = document.getElementById('gnb_service_lyr')


if  (sideMenuEl.style.display = 'none'){
    menuOpenEl.addEventListener("click", function(){
        sideMenuEl.style.display = 'block';
    })
} else if (sideMenuEl.style.display = 'block'){
    menuOpenEl.addEventListener("click", function(){
        sideMenuEl.style.display = 'none';
    })
}