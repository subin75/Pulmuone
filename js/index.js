
// ************************
// index 스크롤 탑&고객센터 팝업 버튼
// ************************

// 탑 버튼
$(document).ready(function() {
    $('.up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});


// 팝업 버튼
$(document).ready(function () {
    $('.call-btn').click(function () {
        $('.call-popup').fadeToggle(200);
    });

    $('.close-popup').click(function () {   
        $('.call-popup').fadeOut(200);
    });

    $(document).mouseup(function (e) {
        var popup = $(".call-popup");

        if (!popup.is(e.target) &&
        popup.has(e.target).length === 0 &&
        !$('.call-btn').is(e.target))

        {popup.fadeOut(200);}
    }); 
});

// ************************
// index 전체 마우스 휠 이벤트
// ************************

document.addEventListener("DOMContentLoaded", function () {
    // 모바일 환경을 구분시키기 위해 matchMedia를 사용해 화면 너비가 480px 이하인지 확인한다.
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    // 스크롤을 감지해서 이벤트를 제어하는 함수 실행
    function handleScrollEvent(event) {
        // 브라우저의 기본 스크롤을 막는다
        event.preventDefault();

        const sections = document.querySelectorAll("section");
        const footer = document.querySelector("footer");
        let currentSection = 0;
        // 현재 스크롤의 위치 변수
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;

        // 현재 스크롤위치 >= 섹션의 상단부터의 거리 - 윈도우높이/2
        sections.forEach((section, index) => {
            if (scrollY >= section.offsetTop - windowHeight / 2) {
                currentSection = index;
            }
        });

        // 아래로 스크롤 할 시엔
        if (event.deltaY > 0) {
            if (currentSection < sections.length - 1) {
                // 다음 섹션으로 이동하게 함
                smoothScroll(sections[currentSection + 1].offsetTop);
            } else {
                // 마지막 섹션이면 바로 푸터로 이동
                smoothScroll(footer.offsetTop);
            }
        } else {
            // 위로 스크롤 할 시에는
            if (scrollY >= footer.offsetTop - windowHeight / 2) {
                smoothScroll(sections[sections.length - 1].offsetTop);
            } else if (currentSection > 0) {
                smoothScroll(sections[currentSection - 1].offsetTop);
            }
        }
    }
    // 스크롤 부드럽게 만들기
    function smoothScroll(targetY) {
        window.scrollTo({
            top: targetY,
            behavior: "smooth",
        });
    }

    // 디바이스 체크 (모바일인지)
    function checkMobile() {
        // 480px 이하일 때는 스크롤 이벤트 삭제시켜버림
        if (mediaQuery.matches) {
            window.removeEventListener("wheel", handleScrollEvent);
        // 아닐 때는 활성화 시켜라
        } else {
            window.addEventListener("wheel", handleScrollEvent, { passive: false });
        }
    }
    // 실행할 때 화면 크기 보고
    // 웹사이트 크기가 바뀔 때마다 checkMobile 반복 실행 명령
    checkMobile();
    mediaQuery.addEventListener("change", checkMobile);
});



// *************
// section2 슬라이드
// *************

// 첫 번째 이미지에 'active' 클래스 추가
const imgWraps = document.querySelectorAll(".img-wrap");
imgWraps[0].classList.add("active");

// 활성된 이미지에서 active 제거 명령 함수
function clearActiveImage() {
    imgWraps.forEach(wrap => wrap.classList.remove("active"));
}

imgWraps.forEach((wrap) => {
    wrap.onclick = function (event) {
        event.stopPropagation();
        // 선택한 이미지에 active가 없을 경우엔
        // clearActiveImage()함수로 기존 active 제거하고
        // 선택한 이미지한테 새로운 active 추가하기
        if (!wrap.classList.contains("active")) {
            clearActiveImage();
            wrap.classList.add("active");
        }
    };
});

// 바깥쪽 클릭할 때에는 모든 active 제거시키고
// 첫번째 이미지에 추가시켜서 초기상태로 만들어놓기
window.addEventListener("click", () => {
    clearActiveImage();
    imgWraps[0].classList.add("active");
});

// *************
// section4 탭 메뉴
// *************

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})

// *************
// section4 탭 메뉴 사운드버튼
// *************

var track3 = new Audio();
track3.src = './srcs/music/foodsong.wav';

var customPlayButton = document.getElementById("customPlayButton");
var playButtonImage = customPlayButton.querySelector("img");

customPlayButton.addEventListener("click", function () {
    if (track3.paused) {
        track3.play();
        playButtonImage.src = "./img/index/index_tabcontsong_02.png";
    } else {
        track3.pause();
        playButtonImage.src = "./img/index/index_tabcontsong_01.png";
    }
});


// *************
// section5 swiper 
// *************

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// **********************
// section6 random image
// **********************

$(document).ready(function () {
    // imglist-1 배열
    const imglist1Data = [
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1312", imgSrc: "./img/index/index_mediaimg_01.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1777", imgSrc: "./img/index/index_mediaimg_02.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1313", imgSrc: "./img/index/index_mediaimg_03.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1314", imgSrc: "./img/index/index_mediaimg_04.jpg" },
        { link: "https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=1826", imgSrc: "./img/index/index_mediaimg_05.jpg" }
    ];

    // imglist-2 배열
    const imglist2Data = [
        { link: "https://youtu.be/fjiPWNKNJIU", imgSrc: "./img/index/index_mediaimgs_01.jpg" },
        { link: "https://youtu.be/2urLsOOWtQA", imgSrc: "./img/index/index_mediaimgs_02.jpg" },
        { link: "https://youtu.be/6e2jXPPMN7Y", imgSrc: "./img/index/index_mediaimgs_03.jpg" },
        { link: "https://youtu.be/dW05jeXvZDY?si=COmerhs4q4pA6Zk_", imgSrc: "./img/index/index_mediaimgs_04.jpg" },
        { link: "https://youtu.be/1eSHnEpyk7U?si=5O-wwHNrtmqWjJK_", imgSrc: "./img/index/index_mediaimgs_05.jpg" },
        { link: "https://youtu.be/rRiv7DcazXc?si=w39uyc3_ztK8ki_C", imgSrc: "./img/index/index_mediaimgs_06.jpg" },
        { link: "https://youtu.be/jOb6HQAtjcY?si=B1tG-1LtjkM14Dbe", imgSrc: "./img/index/index_mediaimgs_07.jpg" },
        { link: "https://youtu.be/NaZByPA1Ng0?si=XzbgozMtnty8Ydjf", imgSrc: "./img/index/index_mediaimgs_08.jpg" },
        { link: "https://youtu.be/bjMr00cTzg0?si=MeFUNLpgVeMfJRj5", imgSrc: "./img/index/index_mediaimgs_09.jpg" },
        { link: "https://youtu.be/zM_CgYPTD5Y?si=W0eXElla0XGKk7YM", imgSrc: "./img/index/index_mediaimgs_10.jpg" },
        { link: "https://youtu.be/dSIuzbIazC8?si=x0dKDhIs9ziPsY_1", imgSrc: "./img/index/index_mediaimgs_11.jpg" },
        { link: "https://youtu.be/KYLvO9ldrQk?si=j9A7NchKNk8Y8ZHV", imgSrc: "./img/index/index_mediaimgs_12.jpg" }
    ];

    // imglist-1 랜덤 데이터 관리
    // 랜덤 수 생성하기 (소수점빼고)
    const randomImglist1 = imglist1Data[Math.floor(Math.random() * imglist1Data.length)];
    // 선택된 이미지랑 링크를 HTML에 적용
    $(".imglist-1 a").attr("href", randomImglist1.link);
    $(".imglist-1 img").attr("src", randomImglist1.imgSrc);

    // imglist-2 중복없이 4개 넣기
    function getRandomImages(arr, num) {
        let result = [];
        // 원본 배열을 복사시키기
        let tempArr = [...arr];

        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * tempArr.length);
            result.push(tempArr[randomIndex]);
            // splice메서드로 선택한 배열 삭제
            tempArr.splice(randomIndex, 1);
        }

        return result;
    }

    // imglist-2 랜덤 데이터 관리
    // 랜덤으로 4개 선택
    const randomImages = getRandomImages(imglist2Data, 4);

    // li에 넣기
    $(".imglist-2 ul li").each(function(index) {
        const selectedImage = randomImages[index];
        // img랑 링크도 각각 적용
        $(this).find("a").attr("href", selectedImage.link);
        $(this).find("img").attr("src", selectedImage.imgSrc);
    });
});


// *****************
// *****************
// 반응형 스크립트 모음
// *****************
// *****************


// **********************
// tablet section2 slider
// **********************

$(document).ready(function() {
    // 작은 이미지 클릭 시
    $(".small-img").click(function() {
        // data-속성값 가져오기
        var newSrc = $(this).attr("data-img");
        var newTitle = $(this).attr("data-title");
        var newDesc = $(this).attr("data-desc");

        $("#main-img").attr("src", newSrc);
        $("#main-title").text(newTitle);
        $("#main-desc").text(newDesc);

        // 선택한 이미지 강조시키기
        $(".small-img").removeClass("active");
        $(this).addClass("active");
    });
});

// section5 뉴스 데이터 관리
const newsData = [
    [
        {
            link: "https://www.industrynews.co.kr/news/articleView.html?idxno=60203",
            imgSrc: "./img/index/index_newsimg_01.jpg",
            text: "풀무원, 새만금 김 육상 양식 사업 위해\n민·관·학 협약 체결…“기술개발 및 확산”"
        },
        {
            link: "https://www.metroseoul.co.kr/article/20250213500203",
            imgSrc: "./img/index/index_newsimg_02.jpg",
            text: "풀무원, S&P Global 2024년\n지속가능성 평가에서 2년 연속 Top5 선정"
        }
    ],
    [
        {
            link: "https://www.foodnews.co.kr/news/articleView.html?idxno=111705",
            imgSrc: "./img/index/index_newsimg_03.jpg",
            text: "풀무원 뮤지엄김치간, \n올해 7500명 대상 ‘김치학교’ 운영"
        },
        {
            link: "https://www.k-health.com/news/articleView.html?idxno=76965",
            imgSrc: "./img/index/index_newsimg_04.jpg",
            text: "풀무원투게더, ‘올해의 편한 일터’\n 고용노동부 장관상 수상"
        }
    ],
    [
        {
            link: "https://www.asiae.co.kr/article/2025021008411049835",
            imgSrc: "./img/index/index_newsimg_05.jpg",
            text: "풀무원다논, '액티비아 150g'\n 출시…한 컵으로 아침식사 해결"
        },
        {
            link: "https://www.insightkorea.co.kr/news/articleView.html?idxno=218261",
            imgSrc: "./img/index/index_newsimg_06.jpg",
            text: "올가홀푸드, 정월대보름 \n안심먹거리 기획전 진행"
        }
    ]
];

let currentPage = 0;

function updateNews() {
    const newsWrapper = document.getElementById("newsWrapper");
    const pageNumberElement = document.querySelector(".news-page-number");
    
    // 기존 뉴스 없앰
    newsWrapper.innerHTML = "";

    // 현재 페이지 뉴스 추가
    newsData[currentPage].forEach(news => {
        const newsContainer = document.createElement("div");
        newsContainer.classList.add("news-container");

        newsContainer.innerHTML = `
            <a href="${news.link}" target="_blank">
                <img src="${news.imgSrc}" alt="뉴스 이미지">
                <div class="news-text">
                    <b>${news.text}</b>
                </div>
            </a>
        `;

        // newsContainer를 newsWrapper에 자식요소로 추가하기
        newsWrapper.appendChild(newsContainer);
    });

    // 페이지 넘버 설정하기 현재페이지(0)+1 / 전체페이지 길이
    pageNumberElement.textContent = `${currentPage + 1} / ${newsData.length}`;

    // 버튼 비활성화 시키기
    // currentPage === 0 현재페이지가 첫번째 페이지일 때, 이전버튼 비활성화
    // currentPage === newsData.length - 1 현재 페이지가 마지막 페이지일 때, 다음버튼 비활성화
    document.getElementById("prevBtn").disabled = currentPage === 0;
    document.getElementById("nextBtn").disabled = currentPage === newsData.length - 1;
}

// prevBtn 클릭 시,
// currentPage를 1 감소. 이전 뉴스로 이동
document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updateNews();
    }
});

// nextBtn 클릭 시,
// currentPage를 1 증가.  다음 뉴스로 이동
document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < newsData.length - 1) {
        currentPage++;
        updateNews();
    }
});

updateNews();
