const elObserve = document.querySelectorAll('h2,b,p,li,img,.info,.sb-03'
    ,''
);


let callback = function(entries, observe){  
    entries.forEach(function(item){
        if(item.isIntersecting){
            item.target.classList.add('act');
            observe.unobserve(item.target);
        }
    })
}


let ob = new IntersectionObserver(callback);
elObserve.forEach(function(item){
    ob.observe(item);
})

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