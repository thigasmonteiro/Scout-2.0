
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll ('.dot');

function showSlide(index) {
    if (index >= items.length){
        currentIndex = 0;       
    }
    else if (index < 0 ) {
        currentIndex = items.length - 1;
    }
    else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
    updateDots();
}
function moveSlide(step){
    showSlide(currentIndex + step);
}
function currentSlide(index){
    showSlide(index);
}
function updateDots(){
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active')
}

let autoSlide = setInterval(() => moveSlide(1), 3000 );

document.querySelector('.carousel').addEventListener('mouseover', () => clearInterval(autoSlide));
document.querySelector('.carousel').addEventListener('mouseout', () => autoSlide = setInterval(() => moveSlide(1), 3000));

showSlide(currentIndex);