// scroll
// Intersection Observer API를 사용하여 60% 이상 보일 때 'visible' 클래스를 추가
function scroll(){
    const options = {
        threshold: 0.5 // 50% 이상 보일 때
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const txt = entry.target;
            if (entry.isIntersecting) {
                // 50% 이상 보이면 'visible' 클래스를 추가
                txt.classList.add('visible');
                observer.unobserve(txt);  // 한 번 나타나면 더 이상 관찰하지 않음
            }
        });
    }, options);

    // 모든 텍스트 박스를 옵저버에 등록
    document.querySelectorAll('.ev-scroll').forEach(txt => {
        observer.observe(txt);
    });
}
scroll();


// tabmenu scroll
const elMenu = document.querySelector('.main-tab-menu');
const eltab = document.querySelectorAll('.main-tab-menu .tab-list li');

// 스크롤 이동
elMenu.scrollTo(localStorage.getItem('left'), 0);

// 브라우저 왼쪽에서부터 탭의 거리를 가져와 local storage에 저장.
// 이때 main의 padding값을 빼주어야 탭 전체가 다 보일 수 있음.
eltab.forEach(function(tab, i){
    tab.onclick = function(){
        localStorage.setItem('left', this.offsetLeft-25);
    }
})




// -----------------------------------------------------------------------------------------------------------------------------
// 3-1. 바른먹거리 원칙
// -----------------------------------------------------------------------------------------------------------------------------

function rule(){
    // popup
    const elbtns = document.querySelectorAll('.food-rule figure, .food-record .button');

    const elpopups = document.querySelectorAll('.rule-popup-box1, .rule-popup-box2, .rule-popup-box3, .record-popup-box1');
    const elclosebtn = document.querySelectorAll('.rule-popup-box1 .popup-close-btn, .rule-popup-box2 .popup-close-btn, .rule-popup-box3 .popup-close-btn, .record-popup-box1 .popup-close-btn');
    
    elbtns.forEach(function(btn, i){
        btn.onclick = function(event){
            elpopups[i].classList.add("open");
            document.body.style.overflow = 'hidden';
            event.preventDefault();
    
            // 버튼 클릭 시 모달 닫기
            elclosebtn[i].onclick = function(){
                elpopups[i].classList.remove("open");
                document.body.style.overflow = 'auto';
            }

            // 모달 바깥 영역 클릭 시 모달 닫기
            window.addEventListener('click', (e) => {
                if (e.target === elpopups[i]) {
                    elpopups[i].classList.remove("open");
                    document.body.style.overflow = 'auto';
                }
            });
        }
    })

}




// -----------------------------------------------------------------------------------------------------------------------------
// 3-2. 바른먹거리 캠페인
// -----------------------------------------------------------------------------------------------------------------------------

function campaign(){
    // link
    const linkLi = document.querySelectorAll('.food-campaign li');
    const link = [
        "https://www.pulmuonefoundation.org/curriculum/children",
        "http://foodforchange.or.kr/parentschild",
        "https://bdsenior.platfarm.co.kr/contents/view/VC2308210142552977B2100?menu=217&menuitem=1307"
    ]
    
    // linkLi.addEventListener('click', function() {
    //     window.location.href = "https://www.pulmuonefoundation.org/curriculum/children";
    // });
    
    linkLi.forEach(function(li, i){
        li.onclick = function(){
            window.location.href = link[i];
        }
    })
}




// -----------------------------------------------------------------------------------------------------------------------------
// 3-3. 식품안전 및 품질정책
// -----------------------------------------------------------------------------------------------------------------------------

function safety(){
    // scroll
        // 텍스트 박스를 나타내는 함수
        // function handleScroll() {
        //     const texts = document.querySelectorAll('.ev-scroll');
            
        //     texts.forEach((txt) => {
        //         const rect = txt.getBoundingClientRect();
        //         if (rect.top < window.innerHeight && rect.bottom >= 0) {
        //             // 화면에 보일 때 'visible' 클래스를 추가
        //             txt.classList.add('visible');
        //         }
        //     });
        // }
        // // 스크롤 이벤트 리스너 추가
        // window.addEventListener('scroll', handleScroll);
        // // 페이지가 처음 로드될 때도 확인
        // handleScroll();
        // Intersection Observer API를 사용하여 60% 이상 보일 때 'visible' 클래스를 추가

        // get data
    const eltabBtn = document.querySelectorAll('.safety-tab-menu li');
    const eltabCont = document.querySelector('.safety-tab-content ul');
    const eltabTxt = document.querySelector('.safety-tab-content > span');
        
    // data0 : tab menu 클릭에 따라 가져올 메뉴 바로 하단의 span
    const data0 = [
        '풀무원은 고객의 건강과 식품안전을 핵심가치로 삼고 있으며, 이를 위해 글로벌 식품안전 규정과원칙을 준수하고 있습니다. <br> 이 규정과 원칙은 생산단계부터 최종 소비단계에 이르기까지 엄격히 적용되며, 모든 풀무원 제품은 관련 법률과 규제를 준수하여 제공됩니다.',
        '풀무원은 식품 공급망 전반에 걸쳐 최신 기술을 활용한 식품안전 및 품질 관리 프로세스를 구축하고 있습니다. <br> 안전한 원료 공급 및 지속 가능한 생산을 위해 디지털 기술을 도입하여 풀무원만의 품질 기준 및 관련 규정이 준수되는지 철저하게 확인합니다.',
        '풀무원은 식품안전의 지속 가능한 실현을 위해 전사 회의체를 통해 다양한 실행 전략들을 수립하고, 체계적으로 개선해 나갈 것입니다. <br> 내부 식품안전 및 품질 역량 강화를 위한 교육 프로그램을 운영하고, 지속적인 개선을 위한 글로벌 수준의 식품안전 요구사항을 정기적인 감사를 통해 검증할 것입니다.'
    ]

    // data : tab menu 클릭에 따라 가져올 컨텐츠
    // data = obj{ array[ obj{} ] }
    const data = {
        tab01: [
            {
                img: './img/food/food_tab01_01.png',
                title: '풀무원 법규 통합관리 시스템',
                subtitle: 'PRIS (Pulmuone Regulation Integrate System)',
                caption: '법령과 기준 대비 부적합 사항을 자동화된 방식으로 검출하는 디지털 표시 심의 통합 관리 시스템을 시행하고 있습니다.'
            },
            {
                img: './img/food/food_tab01_02.png',
                title: '풀무원 식품안전관리 시스템',
                subtitle: 'LIMS (Laboratory Information Management System)',
                caption: '시험·검사 등을 효율적으로 관리하는 시스템으로 영양성분, 식품첨가물, 원재료 정보 등록 관리 등을 통해 법규와 기준규격을 준수합니다.'
            },
            {
                img: './img/food/food_tab01_03.png',
                title: '풀무원 첨가물원칙',
                caption: '고객 먹거리의 안전과 안심을 최우선으로 스스로 더 엄격한 기준을 적용하고 첨가물 사용을 최소화하는 바른먹거리 원칙에 따라 제품을 개발합니다.'
            }
        ],
        tab02: [
            {
                img: './img/food/food_tab02_01.png',
                title: '풀무원 품질 관리 시스템',
                subtitle: 'PQMS (Pulmuone Quality Management System)',
                caption: '품질관리와 규정 준수 모니터링을 디지털화하여 보다 효과적이고 통합적으로 관리·운영해 나가고 있습니다.'
            },
            {
                img: './img/food/food_tab02_02.png',
                title: 'Smart HACCP',
                caption: '풀무원은 사물인터넷(IoT), 빅데이터 등 4차 산업혁명 기술을 활용하여 \'식품 디지털 클러스터 스마트 공장\'을 구축하여 생산, 품질 관리 측면에서 운영 효율성을 극대화 하였습니다.'
            },
            {
                img: './img/food/food_tab02_03.png',
                title: '물류 관리 시스템',
                caption: '품질과 안전을 위해 모든 식재료의 생산, 저장, 운송, 판매, 소비에 이르기까지 유통 전 과정에 걸쳐 철저하게 저온을 유지하는 \'저온유통시스템\'을 운영하고 있습니다.'
            }
        ],
        tab03: [
            {
                img: './img/food/food_tab03_01.png',
                title: '식품안전 협의체',
                caption: '전사 식품안전 리스크 및 품질 결과 등에 대해 경영진이 정기적으로 논의하고, 정책을 수립할 수 있는 협의체를 운영해 나가겠습니다.'
            },
            {
                img: './img/food/food_tab03_02.png',
                title: '식품안전 컨퍼런스',
                caption: '협력사 식품안전 및 품질 스킬 향상을 위한 식품안전 컨퍼런스를 매년 개최하고 있으며, 식품안전 및 품질과 관련된 주제별 전문가를 양성하는 교육 프로그램을 마련할 것입니다.'
            },
            {
                img: './img/food/food_tab03_03.png',
                title: '식품안전 검증 시스템',
                caption: '생산처의 특성 및 수준에 따라 식품안전 검증의 레벨을 1, 2, 3로 차등 관리하여 자사 및 협력사의 식품안전경영시스템을 정기적으로 검증하고 있습니다.'
            }
        ]
    }
    
    // list 함수 실행을 위해 data(object)의 key값 가져오기 => tab01, tab02, tab03
    let keys = Object.keys(data);

    // data를 입력하는 함수.
    // 함수 실행 시 tName(obj의 key)을 입력. 이때 tName은 string 형태.
    function list(tName){
        // sData라는 빈 태그를 만들어 data 저장.
        let sData = '';
        data[tName].forEach((item, i) => {
            // item은 data 내 array, i는 array의 index => tName(tab01~03)[item({}, {}, {})]
            sData += `<li class="ev-scroll">
                        <div class="food-content-left"><img src="${item.img}" alt="tab1-1"></div>
                        <div class="safety-content-right">
                            <strong>${item.title}</strong>`;

            // subtitle이 있는 경우에만 data 저장.
            if (item.subtitle) {
                sData += `<p>${item.subtitle}</p>`;
            }
        
            sData += `<span>${item.caption}</span>
                    </div>
                </li>`;
        });

        // sData에 저장한 data를 ul에 넣어 화면에 나타냄.
        eltabCont.innerHTML = sData; 
    }
    
    // tab 메뉴 클릭 시 나타날 이벤트 함수.
    eltabBtn.forEach(function(btn, i){
        btn.onclick = function(event){
            // Add class of button
            if(!btn.classList.contains('active')){
                eltabBtn.forEach(function(removeact){
                    removeact.classList.remove("active");
                })
            }
            this.classList.add("active");
            event.preventDefault();
            
            // Change data of span
            let sData0 = '';
            sData0 += data0[i];
            
            eltabTxt.innerHTML = sData0;
            
            // data 함수, scroll 함수 실행.
            list(`${keys[i]}`);
            scroll();
        }
    })
}


let pathname = window.location.pathname;
if(pathname.includes('rule')){
    rule();
}else if(pathname.includes('campaign')){
    campaign();
}else{
    safety();
}

