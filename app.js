class PageContainer {
    constructor(id) {
        this.element = document.getElementById(id);
        this.isVisible = false;
    }

    load(animation) {
        this.element.style.animation = animation;
    }

    remove(animation) {
        this.element.style.animation = animation;
    }
}

class Slideshow {
    constructor() {
        this.slides = document.getElementsByClassName("slide");
        this.index = 0;
        this.timeout = null;
    }

    show() {
        for (let slide of this.slides) {
            slide.style.display = "none";
        }
        this.index++;
        if (this.index > this.slides.length) this.index = 1;
        if (this.index < 1) this.index = this.slides.length;
        this.slides[this.index - 1].style.display = "block";
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.show(), 6000);
    }

    changeSlide(n) {
        this.index += n - 1;
        this.show();
    }
}

function trackScrollPosition() {
    let ctn2 = new PageContainer('page-ctn-2');
    let ctn3 = new PageContainer('page-ctn-3');
    let h4Text = document.getElementById('second-page-content');
    let contentCtn3 = document.querySelectorAll('.content-ctn-3'); // Get the elements for ctn3

    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        if (scrollPosition < 800 && ctn2.isVisible) {
            ctn2.remove('panOut 1s ease forwards');
            ctn2.isVisible = false;
            h4Text.style.opacity = '0';

        } else if (scrollPosition > 800) {
            ctn2.load('panIn .8s ease forwards');
            ctn2.isVisible = true;
            h4Text.style.opacity = '1';

            if (scrollPosition < 2500 && ctn3.isVisible) {
                ctn3.remove('panOut .8s ease forwards');
                ctn3.isVisible = false;
                contentCtn3.forEach(el => el.style.opacity = '0');  // Hide content for ctn3
            }
        }
        if (scrollPosition > 2500) {
            ctn3.load('panIn .8s ease forwards');
            ctn3.isVisible = true;
            contentCtn3.forEach(el => el.style.opacity = '1');

        }
    });
}

function motionPolkadots() {
    let e = window.event;
    let posX = e.clientX;
    let posY = e.clientY;
    let polkadot1 = document.getElementById('polkadot1');
    let polkadot2 = document.getElementById('polkadot2');
    let polkadot3 = document.getElementById('polkadot3');
    let polkadot4 = document.getElementById('polkadot4');
    let polkadot5 = document.getElementById('polkadot5');
    let polkadot6 = document.getElementById('polkadot6');
    let polkadot7 = document.getElementById('polkadot7');
    let polkadot8 = document.getElementById('polkadot8');
    polkadot1.style.top = posY/6 + "px"
    polkadot1.style.left = posX/6 + "px"
    polkadot2.style.top = 100 + posY/7 + "px"
    polkadot2.style.left = 700 + posX/7 + "px"
    polkadot3.style.top = 500 + posY/11 + "px"
    polkadot3.style.left = 450 + posX/11 + "px"
    polkadot4.style.top = 100 + posY/8 + "px"
    polkadot4.style.left = 400 + posX/13 + "px"
    polkadot5.style.top = 200 + posY/13 + "px"
    polkadot5.style.left = 1100 + posX/9 + "px"
    polkadot6.style.top = 350 + posY/8 + "px"
    polkadot6.style.left = 1200 + posX/8 + "px"
    polkadot7.style.top = 500 + posY/9 + "px"
    polkadot7.style.left =  posX/9 + "px"
    polkadot8.style.top = 600 + posY/12 + "px"
    polkadot8.style.left = 950 + posX/12 + "px"
    console.log(posY);
    console.log(posX);
}

document.addEventListener('DOMContentLoaded', function() {
    let slideshow = new Slideshow();
    slideshow.show();
    document.querySelector(".prev").addEventListener('click', function() {
        slideshow.changeSlide(-1);
    });
    document.querySelector(".next").addEventListener('click', function() {
        slideshow.changeSlide(1);
    });

    trackScrollPosition();
    document.addEventListener('mousemove', motionPolkadots);

});




