// append
$('body').append('<div class="t1"></div>');
$('body').append('<div class="t2"></div>');
$('.t1').load('./include.html header')
$('.t2').load('./include.html footer',inc)


// ***********************************
// ***********************************
// *******include/header&footer*******
// ***********************************
// ***********************************

function  inc() {
    // header script
    $('body').prepend($('.t1').html());
    $('body').append($('.t2').html());
    $('.t1, .t2').remove();

    // *header*

    $('.navigation > li').each(function () {
        // 타이머
        let hideTimer;

        // 마우스 호버 시 서브메뉴 열기
        $(this).hover(
            function () {
                clearTimeout(hideTimer);
                // 서브메뉴가 내려오게 만들기 (slideDown)
                // stop(true,true) : 애니메이션 중복을 방지한다
                $(this).find('> div').stop(true, true).slideDown(200);
            },
            // 마우스가 나가면 0.4초 후에 사라지게 만들기 (slideUp)
            function () {
                const submenu = $(this).find('> div');
                hideTimer = setTimeout(function () {
                    submenu.stop(true, true).slideUp(200);
                }, 400);
                $(this).data('hideTimer', hideTimer);
            }
        );
    });

    // 햄버거 메뉴
    // 서브메뉴 내려오면 전체 스크롤은 사라지게 만들기/다시 누르면 생성됨

    const hamMenu = document.querySelector('.header-icons');
    const navDown = document.querySelector('.nav-down');
    const body = document.body;

    hamMenu.onclick = () => {
        const isActive = navDown.classList.toggle('active');
        hamMenu.classList.toggle('active');

        if (isActive) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    };



    // *footer*

   // 드롭다운 메뉴
    $('.dropbtn').on('click', function (event) {
        event.stopPropagation();

        const $dropdownContent = $(this).next(); // 바로 다음 요소 선택

        $('.dropdown-content1, .dropdown-content2, .dropdown-content3').not($dropdownContent).hide();

        $dropdownContent.toggle();
    });

    // 바깥 영역 클릭 시 드롭다운 닫기
    $(window).on('click', function (event) {
        if (!$(event.target).closest('.dropdown1, .dropdown2, .dropdown3').length) {
            $('.dropdown-content1, .dropdown-content2, .dropdown-content3').hide();
        }
    });

}

