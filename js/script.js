class Slide{

    constructor() {
        this.slides = document.querySelectorAll(".slide");
        this.btnLeft = document.getElementById("left");
        this.btnRight = document.getElementById("right");
        this.body = document.querySelector("body");
        this.activeSlide = 0;
        this.app();
    }

    app(){
        this.eventClick();
    }

    eventClick(){
        this.btnLeft.addEventListener("click", () => {
            this.activeSlide --;
            if (this.activeSlide < 0){
               this.activeSlide =  this.slides.length - 1;
            }
            this.setBackground();
            this.setActive();
        });

        this.btnRight.addEventListener("click", () => {
            this.activeSlide ++;
            if (this.activeSlide > this.slides.length - 1){
                this.activeSlide = 0;
            }

            this.setBackground();
            this.setActive();
        });
    }

    setBackground(){
        this.body.style.backgroundImage = this.slides[this.activeSlide].style.backgroundImage
    }

    setActive(){
        this.slides.forEach((slide) => slide.classList.remove("active"))

        this.slides[this.activeSlide].classList.add("active");
    }

}

const s = new Slide();