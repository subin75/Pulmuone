// ***********************
// ***********************
// ****news_enter페이지****
// ***********************
// ***********************

// section1 tab menu

$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})


// section1 tab menu 뉴스 정보 저장, 페이지 이동

$(document).ready(function () {
    const newsData = [
        [
            { link: "https://www.businesspost.co.kr/BP?command=article_view&num=383554", img: "./img/news/news_tabimg_01.png", text: "풀무원, 새만금 김 육상 양식 사업 위해 민·관·학 협약 체결…“기술개발 및 확산”", description: "풀무원은 새만금개발청, 전북특별자치도, 군산시, 한국농어촌공사, 전북지역어업인 단체, 공주대, 포항공대 등 11곳과 '새만금 글로벌 김 육상 양식 사업 성공을 위한 민·관·학 상생업무협약'을 체결했다고 14일 밝혔다. 풀무원은 이를 통해 새만금 국가산업단지에 육상 김 사업을 위한 부지를 추가 조성해 육상 김 사업 확대에 나선다.", date: "- 2025년 2월 14일" },
            { link: "https://www.koreaittimes.com/news/articleView.html?idxno=138358", img: "./img/news/news_tabimg_02.png", text: "풀무원, S&P Global 2024년 지속가능성 평가에서 2년 연속 글로벌 식품기업 Top5 선정", description: "풀무원(대표 이우봉)이 세계 3대 신용평가사 중 하나인 S&P Global이 발표한 2024년 기업 지속가능성 평가 CSA에서 작년에 이어 2년 연속 글로벌 식품기업 Top 5에 선정됐다고 13일 밝혔다.", date: "- 2025년 2월 13일" },
            { link: "https://www.edaily.co.kr/News/Read?newsId=02204166642041000&mediaCodeNo=257", img: "./img/news/news_tabimg_03.png", text: "풀무원, 美 두부·아시안 누들 쌍끌이에 K-간식까지…외형 성장·수익 개선 지속", description: "풀무원이 미국 현지 K-푸드 열풍과 식물성 식품 수요 확대에 힘입어 미국법인의 외형 성장과 수익 개선을 이어가고 있다. 풀무원은 미국법인의 주력 사업인 두부와 아시안 누들의 지난해 연매출이 전년 대비 각각 12.1%, 21.1% 성장하고 K-간식 카테고리의 매출은 182.2% 증가했다고 24일 밝혔다.", date: "- 2025년 1월 24일" },
            { link: "https://www.newspim.com/news/view/20250123000062", img: "./img/news/news_tabimg_04.png", text: "풀무원, 임직원 및 고객사 대상 온라인 복지몰 ‘엠버십’ 오픈...맞춤형 복지서비스 제공", description: "풀무원은 맞춤형 임직원 복지 서비스에 대한 수요 증가에 발맞춰 풀무원 임직원과 주요 고객사, 파트너사 임직원들도 이용할 수 있는 폐쇄형 복지 플랫폼 ‘엠버십(embership)’을 1월부터 오픈해 운영을 시작했다고 23일 밝혔다.", date: "- 2025년 1월 23일" }
        ],
        [
            { link: "https://www.kbei.org/new/05info/s_3.php?action=view&bid=client&idx=671&sopt=&sval=", img: "./img/news/news_tabimg_05.png", text: "풀무원, 국립공원공단과 ‘지리산국립공원의 지속가능한 보전과 ESG 활성화를 위한 업무협약’ 체결", description: "풀무원이 새해를 맞아 국립공원공단과 손잡고 지리산국립공원의 자원 생태 보호를 위한 사회공헌활동에 나선다. 풀무원(대표 이우봉)은 16일 경남 산청군 소재 지리산국립공원 경남사무소에서 국립공원공단(이사장 송형근)과 ‘지리산국립공원의 지속가능한 보전과 ESG 활성화를 위한 업무협약(MOU)’을 맺고, 지리산 자연환경의 보전과 복원을 위해 함께 협력하기로 했다고 17일 밝혔다.", date: "- 2025년 1월 17일" },
            { link: "https://www.joongang.co.kr/article/25304634", img: "./img/news/news_tabimg_06.png", text: "풀무원, 신임 이우봉 총괄CEO 취임...2기 전문경영인 체제 공식 출범", description: "풀무원이 새해를 맞아 신임 이우봉 총괄CEO가 3대 총괄CEO로 취임하며 2기 전문경영인 체제로 새롭게 출범한다. 풀무원은 2일 서울 수서 본사에서 신임 이우봉 총괄CEO 취임식을 갖고 국내 및 해외 전체 사업을 총괄하는 총괄CEO로서 본격적인 경영활동에 나섰다고 밝혔다.", date: "- 2025년 1월 02일" },
            { link: "https://www.newspim.com/news/view/20241223000035", img: "./img/news/news_tabimg_07.png", text: "풀무원, 생성형 AI 기반 인사 AI 챗봇 ‘두리번’ 오픈...임직원 대상 디지털 경험 제공", description: "풀무원(대표 이효율)이 직원들의 HR문의에 효율적으로 대응하기 위해 HR 특화 AI 챗봇 ‘두리번’을 오픈하며 임직원을 대상으로 혁신적인 디지털 경험을 제공하고 있다고 23일 밝혔다. ", date: "- 2024년 12월 23일" },
            { link: "https://www.newsquest.co.kr/news/articleView.html?idxno=236469", img: "./img/news/news_tabimg_08.png", text: "풀무원, 지속가능한 축산업 발전 위한 동물복지연구회 포럼 개최…지속가능한 동물복지 방향성 논의", description: "풀무원(대표 이효율)은 서울 강남 토즈타워점에서 지속가능한 축산업을 위해 새로운 동물복지 방향성을 모색하는 ‘동물복지 연구회 포럼 2024’를 개최했다고 18일 밝혔다.서울대학교가 주최하고 풀무원 등 9개 기업(기관)이 후원한 이번 포럼의 주제는 ‘지속가능한 축산업을 위한 농장동물 동물복지의 미래와 방향성’으로, 동물복지에 대한 중요성이 높아지는 가운데 반려동물, 유기동물, 실험동물에 비해 상대적으로 관심이 낮았던 농장동물 복지에 초점을 맞춘 것이 특징이다.", date: "- 2024년 12월 18일" }
        ]
    ];

    // 현재 페이지의 수를 0으로 설정
    let currentPage = 0;

    function updateNews() {
        const $newsWrapper = $("#newsWrapper");
        const $pageNumber = $(".news-page-number");

        // newsWrapper 내용 삭제
        $newsWrapper.empty().append(
            // newsData[currentPage]의 배열을 join을 사용해 문자열로 합치기
            newsData[currentPage].map(news => `
                <a href="${news.link}" target="_blank">
                    <div class="news-cont-1">
                        <img src="${news.img}" alt="뉴스 이미지">
                        <div class="tab-news-text">
                            <b>${news.text}</b>
                            <b>${news.description}</b>
                            <b>${news.date}</b>
                        </div>
                    </div>
                </a>
            `).join("")
        );

        // text를 사용해서 현재 페이지(0)+1 / 전체 페이지(2) 문자열 집어넣기
        $pageNumber.text(`${currentPage + 1} / ${newsData.length}`);

        // prop: 제이쿼리 프로퍼티를 가져옴, 실제적인 상태값을 가져옴
        // #prevBtn의 비활성화 조건:currentPage가 첫번째 페이지면 (0과 동일하면) 비활성화
        // #nextBtn의 비활성화 조건:currentPage가 전체페이지(3)의 -1일때 (2페이지일때) 비활성화
        $("#prevBtn").prop("disabled", currentPage === 0);
        $("#nextBtn").prop("disabled", currentPage === newsData.length - 1);
    }

    $("#prevBtn").on("click", function () {
        // 첫번째 페이지가 아닐 경우에만
        if (currentPage > 0) {
            // 이전 페이지로 이동
            currentPage--;
            // 페이지 정보 불러오기
            updateNews();
        }
    });

    $("#nextBtn").on("click", function () {
        // 2페이지가 아닐 때에만 실행.
        if (currentPage < newsData.length - 1) {
            currentPage++;
            updateNews();
        }
    });

    // 첫번째 데이터 불러오기
    updateNews();
});


// ***********************
// ***********************
// ****news_enter페이지****
// ***********************
// ***********************

// section2 news box 추가하기

$(document).ready(function () {
    const $newsContainer = $(".esg-news-container");
    const $loadMoreBtn = $(".esg-news-btn");
    const $sec2 = $(".sec2");

    // 그룹만들기 (1그룹당 뉴스 2개씩) 총 2그룹 (html속 1그룹 제외)
    const additionalNews = [
        [
            `
            <a href="https://news.pulmuone.co.kr/pulmuone/newsroom/viewNewsroom.do?id=2969" target="_blank">
                <div class="esg-news-box">
                    <img src="./img/news/news_esgbox_03.png" alt="">
                    <div class="esg-text">
                        <b>기획자료</b>
                        <b>"중요한 것은 진정성"\n바른먹거리로 \nESG경영 실현한다</b>
                        <b>원경선 원장부터 시작된 ‘이웃사랑’과 ‘생명존중’ 정신을 ESG 경영으로 계승∙발전 환경∙공급망∙인권∙정보 보안∙사회공헌∙지배구조 등 ESG 전반에 걸쳐 실질적 계획 수립, 실행 예정 풀무원 원료, 생산, 배송부터 제품까지 Supply Chain 전 과정에서 ESG 경영 이어나갈 것</b>
                        <b>- 2023년 7월 21일</b>
                    </div>
                </div>
            </a>
            `,
            `
            <a href="https://news.pulmuone.co.kr/pulmuone/newsroom/viewEsg.do?id=2963" target="_blank">
                <div class="esg-news-box">
                    <img src="./img/news/news_esgbox_04.png" alt="">
                    <div class="esg-text">
                        <b>기획자료</b>
                        <b>풀무원이\n 함께 사는 사회를\n 위해 하는 일</b>
                        <b>대표 CSV 사업 ‘강화도 우리마을’ 콩나물 사업에 이은 ‘로하스 투게더’ 공장 준공 장애인 표준사업장으로 사회적 역할 충실히 수행하며 공유가치창출에 앞장선다</b>
                        <b>- 2023년 7월 13일</b>
                    </div>
                </div>
            </a>
            `
        ],
        [
            `
            <a href="https://heypop.kr/n/53028/" target="_blank">
                <div class="esg-news-box">
                    <img src="./img/news/news_esgbox_05.png" alt="">
                    <div class="esg-text">
                        <b>기획자료</b>
                        <b>먹어서 지구를 지킨다!\n What's in \n지구식단 캠퍼스?</b>
                        <b>탄소 배출을 줄이기 위한 다양한 기업들의 ESG 전략과 실천...</b>
                        <b>- 2023년 4월 27일</b>
                    </div>
                </div>
            </a>
            `,
            `
            <a href="https://www.ebn.co.kr/news/articleView.html?idxno=1601660" target="_blank">
                <div class="esg-news-box">
                    <img src="./img/news/news_esgbox_06.png" alt="">
                    <div class="esg-text">
                        <b>기획자료</b>
                        <b>1.5℃를 지키기 위한\n 풀무원의\n 초록빛 노력</b>
                        <b>지구 평균기온 1.5℃ 상승은 기후 재앙의 마지노선 풀무원, 2025년까지 온실가스 배출량 12% 이상 감축 예정 1.5℃를 지키기 위해 친환경 공정 개선, 신재생에너지∙전기수소화물차 도입∙확대 등에 나서.</b>
                        <b>- 2023년 3월 17일</b>
                    </div>
                </div>
            </a>
            `
        ]
    ];
    
    let addedNewsCount = 0;

    $loadMoreBtn.on("click", function () {
        if (addedNewsCount < 2) {
            $newsContainer.append(additionalNews[addedNewsCount].join(""));
            addedNewsCount++;
    
            // 화면 크기별 높이 추가하기
            let additionalHeight = 1000;
    
            if (window.innerWidth <= 1024 && window.innerWidth > 480) {
                additionalHeight = 800;
            } else if (window.innerWidth <= 480) {
                additionalHeight = 700;
            }
    
            let newHeight = $sec2.height() + additionalHeight;
            $sec2.css("height", newHeight + "px");
    
            if (addedNewsCount === 2) {
                $loadMoreBtn.hide();
            }
        }
    });
    
    
});

