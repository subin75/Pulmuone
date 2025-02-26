const pElements = document.querySelectorAll(".p");
const bElements = document.querySelectorAll(".b");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // .p가 화면에 보일 때 visible 추가
            
        }
    });
}, options);

pElements.forEach((p) => {
    observer2.observe(p);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // .b가 화면에 보일 때 visible 추가
            
        }
    });
}, options);

bElements.forEach((b) => {
    observer.observe(b);
});

//swiper
const swiperSlide = document.querySelectorAll(".mySwiper .swiper-slide");
const swiperSlide_img = document.querySelector(".tab-img-con01 img");
const swiperSlide_p = document.querySelector(".tab-img-con01 p");
        
swiperSlide.forEach((slide,i) => {
    slide.addEventListener("click", function() {
        // 기존 active 클래스 제거
        swiperSlide.forEach(s => s.classList.remove("active"));
        // 선택한 슬라이드에 active 클래스 추가
        this.classList.add("active");

        swiperSlide_img.src = slideCon[i].url;
        swiperSlide_p.innerHTML = slideCon[i].txt
    });
});

//이미지 변경 과 텍스트 변경
        let slideCon = [
            {url:'./img/company/history.jpg',txt:'1985년 12월, 현대백화점 풀무원참기름 즉석판매 매장'},
            {url:'./img/company/history02.jpg',txt:'1991년 8월, 충북 도안 건강보조식품 GMP공장 기공식'},
            {url:'./img/company/history03.jpg',txt:'1993년 6월, 내추럴하우스 매장'},
            {url:'./img/company/history04.jpg',txt:'1993년 8월, 풀무원식품 서울 홍은동 냉장물류센터'},
            {url:'./img/company/history05.jpg',txt:'1994년 4월, 충북 음성 ‘유리온실 재배실험실’ 준공'},
            {url:'./img/company/history06.jpg',txt:'1994년 7월, 풀무원식품 경남 의령공장 기공식'},
            {url:'./img/company/history07.jpg',txt:'1994년, 서울 서초동 풀무원 사옥 전경'},
            {url:'./img/company/history08.jpg',txt:'1996년 4월, 풀무원식품 충북 음성나물공장 준공식'},
            {url:'./img/company/history09.jpg',txt:'1999년 8월, 풀무원 두부 신제품 발표회'},
            {url:'./img/company/history10.jpg',txt:'2000년 5월, 푸드머스 창립총회'},
            {url:'./img/company/history11.jpg',txt:'2000년 5월, 서울 삼성동 코엑스 김치박물관 재개관'},
            {url:'./img/company/history12.jpg',txt:'2003년 4월, 충북 음성 제3두부공장 준공식'},
            {url:'./img/company/history13.jpg',txt:'2004년 1월, 풀무원·네슬레 먹는샘물 합작투자 조인식'},
            {url:'./img/company/history14.jpg',txt:'2009년, 서울 송파구 ‘올가 방이점’ 오픈'},
            {url:'./img/company/history15.jpg',txt:'2011년 2월, 충북 음성 국내 최대 저온 자동화 물류센터 준공'},
            {url:'./img/company/history16.jpg',txt:'2014년 3월, 서울 수서 본사 4층 풀무원어린이집 개원'},
            {url:'./img/company/history17.jpg',txt:'2016년 3월, 9년 연속 `열린 주주총회` 개최'},
            {url:'./img/company/history18.jpg',txt:'2018년 1월, 전문경영인체제 출범, 이효율 총괄CEO 취임'},
            {url:'./img/company/history19.jpg',txt:'2018년 5월, New CI 및 로하스 7대 전략 선포'},
            {url:'./img/company/history20.jpg',txt:'2018년 7월, 충북 괴산 `신선나또` 공장 준공'},
            {url:'./img/company/history21.jpg',txt:'2019년 5월 , 전북 익산 글로벌 김치공장 준공'},
            {url:'./img/company/history22.jpg',txt:'2019년 5월, 창사 35주년 ㈜풀무원, 글로벌기준 지주회사 지배구조체제 확립 선언'},
            {url:'./img/company/history23.jpg',txt:'2019년 12월, 새첨단 R&D `풀무원기술원` 준공'},
            {url:'./img/company/history24.jpg',txt:'2020년 3월, 13번째 `열린 주주총회` 개최'},
            {url:'./img/company/history25.jpg',txt:'2021년 5월 풀무원식품㈜, `최첨단 HMR 생면공장` 준공(충북 음성)'},

        ]

//swiper2

const swiperSlide2 = document.querySelectorAll(".mySwiper2 .swiper-slide");
const swiperSlide2_img = document.querySelector(".tab-img-con02 img");
const swiperSlide2_p = document.querySelector(".tab-img-con02 p");

swiperSlide2.forEach((slide,i) => {
    slide.addEventListener("click", function() {
        // 기존 active 클래스 제거
        swiperSlide2.forEach(s => s.classList.remove("active"));

        // 선택한 슬라이드에 active 클래스 추가
        this.classList.add("active");

        swiperSlide2_img.src = slide2Con[i].url;
        swiperSlide2_p.innerHTML = slide2Con[i].txt
    });
});

let slide2Con = [
    {url:'./img/company/history01_01.jpg',txt:'2003년 5월, 초등학교 대상 ‘생명의 텃밭’ 사업'},
    {url:'./img/company/history01_02.jpg',txt:'2005년 3월, 임직원 기아체험 행사'},
    {url:'./img/company/history01_03.jpg',txt:'2005년 11월, 북한 어린이 콩우유 급식 원료 지원 사업'},
    {url:'./img/company/history01_04.jpg',txt:'2007년 3월, ‘굿바이 아토피!’ 캠페인 실시'},
    {url:'./img/company/history01_05.jpg',txt:'2009년 5월, 국내 최초 세계적인 물환경 교육 프로그램 ‘Project WET’ 시작'},
    {url:'./img/company/history01_06.jpg',txt:'2009년 7월, 풀무원 임직원 봉사단 ‘로하스디자이너’ 발족'},
    {url:'./img/company/history01_07.jpg',txt:'2010년 11월, ‘바른먹거리 캠페인’ 시작'},
    {url:'./img/company/history01_08.jpg',txt:'2012년 4월, 풀무원 재단 공식 출범'},
    {url:'./img/company/history01_09.jpg',txt:'2012년 9월, 풀무원-교육부, ‘학부모-아이 바른먹거리 캠페인’ 교육 업무 협약 체결'},
    {url:'./img/company/history01_10.jpg',txt:'2015년 9월, 로하스생활 교육 ‘바른청소교실’ 시작'},
    {url:'./img/company/history01_11.jpg',txt:'2015년 9월, ‘로하스식생활’ 교육 시작'},
    {url:'./img/company/history01_12.jpg',txt:'2018년 8월, ‘바른먹거리 교육’ 8년만에 10만명 교육 달성'},
    {url:'./img/company/history01_13.jpg',txt:'2019년 8월, 국내 최초 동물복지 식습관 어린이 바른먹거리 교육 실시'},
    {url:'./img/company/history01_14.jpg',txt:'2021년 11월, 발달장애인 자활 돕기 위해 ‘강화도 우리마을’ 생산 콩나물 90만 봉지로 판매 확대'},
    {url:'./img/company/history01_15.jpg',txt:'2022년 06월, 도심 거주 시니어 맞춤형 ‘시니어 생활습관 변화 프로젝트’ 실시'},
    {url:'./img/company/history01_16.jpg',txt:'2023년 07월, 장애인 자립 돕는 자회사형 장애인 표준사업장 ‘풀무원투게더’ 설립'},
]

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
});

//버튼 클릭시 해당페이지만 보이게 하고 다른페이지는 숨김
const tabItems = document.querySelectorAll(".tab-sub-head p");
const tabContents = document.querySelectorAll(".tab-sub-body > div");

tabItems.forEach((tab, index) => {
    tab.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 동작 방지

        // 모든 탭에서 active 클래스 제거
        tabItems.forEach(item => item.classList.remove("active"));
        tab.classList.add("active"); // 선택된 탭에 active 추가

        // 모든 콘텐츠 숨김
        tabContents.forEach(content => content.style.display = "none");

        // 선택된 콘텐츠 보이기
        if (index === 0) {
            document.querySelector(".tab-sub-con01").style.display = "block";
        } else {
            document.querySelector("#tab-sub-con02").style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-list li");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // 모든 탭에서 active 클래스 제거
            tabs.forEach(t => t.classList.remove("active"));

            // 클릭한 탭에 active 추가
            this.classList.add("active");
        });
    });
});

//상단버튼바 선택시 active 작동
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-list li a");

    tabs.forEach(tab => {
        // 현재 페이지의 URL과 탭의 href를 비교하여 active 클래스 추가
        if (window.location.href.includes(tab.getAttribute("href"))) {
            tab.parentElement.classList.add("active");
        }
    });
});