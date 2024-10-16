class Elements {
    constructor(slider) {
        this.slides = this.els(slider + ' .img-slider--slides > .slide');
        this.miniatures = this.els(slider + ' .img-slider--miniatures > .miniature');
        this.leftBtn = this.el(slider + ' .left-btn');
        this.rightBtn = this.el(slider + ' .right-btn');
        this.center = this.el(slider + ' .center');
        console.log(slider);
    }

    el(element) {
        return document.querySelector(element);
    }

    els(elements) {
        return document.querySelectorAll(elements);
    }
}

export class Slider extends Elements {
    firstStartTimeout = 7000;
    changeSlideTimeout = 5000;
    slide = this.startFromSlide();
    setTimeoutId = null;
    touchStartX = null;

    constructor(parameters) {
        super(parameters.slider);
        this.events();
    }

    start() {
        this.setTimeoutId = setTimeout(() => this.run(), this.firstStartTimeout);
    }

    stop() {
        clearTimeout(this.setTimeoutId);
    }

    run() {
        this.slider();
        this.setTimeoutId = setTimeout(() => this.run(), this.changeSlideTimeout);
    }

    slider() {
        this.animationOn();
        this.increment();
        this.changeSlide();
    }

    prev() {
        this.stop();
        this.animationOff();
        this.decrement();
        this.changeSlide();
        this.start();
    }

    next() {
        this.stop();
        this.animationOff();
        this.increment();
        this.changeSlide();
        this.start();
    }

    increment() {
        this.slide++;

        if (this.slide > (this.slides.length - 1)) {
            this.slide = 0;
        }
    }

    decrement() {
        this.slide--;

        if (this.slide < 0) {
            this.slide = (this.slides.length - 1);
        }
    }

    animationOn() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove('na');
        }
    }

    animationOff() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add('na');
        }
    }

    changeSlide() {
        this.slides[this.slide].classList.add('active');
        this.miniatures[this.slide].classList.add('active');

        for (let i = 0; i < this.slides.length; i++) {
            if (i != this.slide) {
                this.slides[i].classList.remove('active');
                this.miniatures[i].classList.remove('active');
            }
        }
    }

    changeSlideById(e) {
        this.stop();
        this.animationOff();

        this.slide = Number(e.srcElement.getAttribute('data-slide'));

        this.changeSlide();
        this.start();
    }

    swipeStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }

    swipeEnd(e) {
        if (this.touchStartX > e.changedTouches[0].clientX) {
            this.prev();
        } else {
            this.next();
        }
    }

    startFromSlide() {
        for (let i = 0; i < this.slides.length; i++) {
            if (this.slides[i].classList.contains('active')) {
                return i;
            }
        }
    }

    events() {
        if (this.leftBtn != null) {
            this.leftBtn.addEventListener('click', () => this.prev());
        }

        if (this.rightBtn != null) {
            this.rightBtn.addEventListener('click', () => this.next());
        }

        if (this.center != null) {
            this.center.addEventListener('touchstart', (e) => this.swipeStart(e));
            this.center.addEventListener('touchend', (e) => this.swipeEnd(e));
        }

        for (let i = 0; i < this.miniatures.length; i++) {
            this.miniatures[i].addEventListener('click', (e) => this.changeSlideById(e));
        }
    }
}