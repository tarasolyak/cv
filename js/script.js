"use strict";
 
function slideHistory() {
    let btnArrow = document.querySelector('.left_arrow');
    let blockHistory = document.querySelector('.block-right');
    let slideRight = document.querySelector('.slide-right');
    btnArrow.addEventListener('click', () => {
        blockHistory.classList.add('show');
        slideRight.classList.add('zIndex');
    });
    document.addEventListener('mouseover', (e) => {
        if (e.target === slideRight) {
            slideRight.classList.remove('zIndex');
            blockHistory.classList.remove('show');
        }
    });
}

slideHistory();

let titleCss = document.querySelectorAll('.info-title');

function infoTitleAdd() {
    titleCss.forEach(element => {
        element.classList.add('opacity1');
    });
}

function infoTitleRemove() {
    titleCss.forEach(element => {
        element.classList.remove('opacity1');
    });
}

function lock() {
    let clickLock = document.querySelector('.lock-svg'),
    info = document.querySelector('.info'),
    opacityCss = document.querySelector('.lock'),
    style = document.createElement('style');

    clickLock.addEventListener('click', () => {
        if (clickLock.classList.contains('active')) {
            info.classList.remove('wth270px');
            info.classList.remove('boxShadow');
            opacityCss.classList.remove('opacity1');
            clickLock.classList.remove('fill-red');
            infoTitleRemove(); 
            clickLock.classList.remove('active');
            
        } else {
            clickLock.classList.add('active');
            clickLock.classList.add('fill-red');
            info.classList.add('wth270px');
            info.classList.add('boxShadow');
            opacityCss.classList.add('opacity1');
            opacityCss.classList.add('opacity1');
            infoTitleAdd();
        }
    });
}

lock();


function uncoverList() {
    let lists = document.querySelectorAll('.uncoverBlock');
    let uncoverBtns = document.querySelectorAll('.uncoverBtn');
    let darkModal = document.querySelector('.dark-modal');
    let hoverBtn = document.querySelectorAll('svg.change-hover');
    let photo = document.querySelector('.box-img');
    let skills = document.querySelector('.skills');
    let shadow = document.querySelectorAll('.outShadow');
    uncoverBtns.forEach((item, i) => {
        item.addEventListener('click', (e) => {

            if (item.classList.contains('active-btn')) {
                lists[i].classList.remove('uncover-active');
                darkModal.classList.remove('show_opacity_modal');
                uncoverBtns[i].classList.remove('active-btn');
                hoverBtn[i].classList.remove('change-hover-active');
                photo.style.cssText = "opacity: 1; position: inherit; transition: 1s all";
                skills.style.cssText = "transform: translateY(0%); transition: 1s all; margin-bottom: 1.875rem;";
                shadow[i].style.cssText = "opacity: 1; transition: 1s all";
                if (i == 0) {
                    lists[0].style.overflow = "hidden";
                }

            } else {
                lists[i].classList.add('uncover-active');
                darkModal.classList.add('show_opacity_modal');
                uncoverBtns[i].classList.add('active-btn');
                hoverBtn[i].classList.add('change-hover-active');
                shadow[i].style.cssText = "opacity: 0; transition: 1s all";
                if (i == 0) {
                    photo.style.cssText = "opacity: 0; position: absolute; transition: 1s all; z-index: -1";
                    lists[0].style.overflow = "auto";
                } 
                if (i == 3) {
                    skills.style.cssText = "transform: translateY(-25%); transition: 1s all";
                }
            }
        });
    });
}

uncoverList();



let btnLeft = document.querySelector('.portfolio-btn-left');
let btnRight = document.querySelector('.portfolio-btn-right');
let slide = document.querySelectorAll('.slide');

let j = 0;

// slide[1].style.filter = `blur(8px)`;

let quantitySlides = slide.length - 1;

btnRight.addEventListener('click', (e) => {
    if (e.target === btnRight && (j < quantitySlides && j >= 0)) {
        j += 1;
        for (let i = 0; i <= quantitySlides; i++) {
            slide[i].style.transition = `.5s all`;
            slide[i].style.transform = `translateX(-${j}00%)`;
        }
    }
});

btnLeft.addEventListener('click', (e) => {
    if (e.target === btnLeft && (j <= quantitySlides && j > 0)) {
        j -= 1;
        slide.forEach(element => {    
            element.style.transition = `1s all`;
            element.style.transform = `translateX(-${j}00%)`;
        });
    }
});

let linkArrows = document.querySelector('.link-arrows'),
    arrowsPortfolio = document.querySelector('.portfolio-link-arrows');
    arrowsPortfolio.style.display = 'none';

    linkArrows.addEventListener('click', (e) => {
        // e.preventDefault();
        console.log(e.target);
        const targetClick = e.target;
        if (targetClick.classList.contains('rotate-90')) {
            arrowsPortfolio.style.display = 'block';
        } else if (targetClick.classList.contains('rotate90')) {
            arrowsPortfolio.style.display = 'none';
        }
    });
