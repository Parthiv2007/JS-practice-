const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
let slideNumber = 1;
const length = images.length;

const next = () => {
    slider.style.transform = `translateX(-${slideNumber * 500}px)`
    slideNumber++;
};
const previous = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`
    slideNumber--;
};
const first = () => {
    slider.style.transform = `translateX( 0px)`
    slideNumber = 1;
}
const last = () => {
    slider.style.transform = `translateX(-${(length - 1) * 500} px)`
    slideNumber = length;
}
right.addEventListener('click', () => {
     slideNumber < length ? next() : first() ;
});
left.addEventListener('click', () => {
    slideNumber < length ? previous() : last() ;
});