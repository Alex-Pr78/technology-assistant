//  Burger
const burger = document.querySelector('.burger');
const navOverlay = document.getElementById('mobile-nav-overlay');
const nav = document.querySelector('.header__mobile-list');

burger.onclick = toggleMobileNav;

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  
});
function toggleMobileNav () {
    navOverlay.classList.toggle('mobile-nav-overlay--open');
    nav.classList.toggle('header__mobile-list--open');
    document.body.classList.toggle('no-scroll');
  }
// Slider

const initSlider = () => {
    const DEFAULT_SPEED = 2;

    const slider = document.querySelector(".slider");
    if (!slider) return;

    const wrapper = document.querySelector(".slider-track");

    wrapper.innerHTML += wrapper.innerHTML;

    let speed = DEFAULT_SPEED;
    let position = 0;

    slider.addEventListener("mouseenter", () => {
      speed = DEFAULT_SPEED / 2;
    });

    slider.addEventListener("mouseleave", () => {
      speed = DEFAULT_SPEED;
    });

    function animate() {
      position -= speed;

      if (Math.abs(position) >= wrapper.scrollWidth / 2) {
        position = 0;
      }

      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  initSlider();

// Matrix
let str = document.getElementById('str')
let ctx = str.getContext('2d')
str.height = window.innerHeight
str.width = window.innerWidth
let matrix = 'QWERTYUIOPASDFGHJKLZXCVBNM<!@#$%^&*()1234567890'
matrix = matrix.split('')
let font_size = 14;
let columns = str.width / font_size
let drops = []
for(let x = 0; x < columns; x++)
  drops[x] = 90

function draw(){
  ctx.fillStyle = 'rgba(33, 32, 32, 0.08)'
  ctx.fillRect(0,0,str.width,str.height)
  ctx.fillStyle = '#0f0'
  ctx.font = font_size + 'px arial'

  for(let i = 0; i < drops.length; i++){
    let text = matrix[Math.floor(Math.random() * matrix.length)]

    ctx.fillText(text, i * font_size, drops[i] * font_size)
    if(drops[i] * font_size > str.height && Math.random() > 0.975)
      drops[i] = 0
    drops[i]++
  }
}
setInterval(draw, 40)  
// Black 
const styleToggle = document.querySelector('.btn-light');
const styleToggleMobil = document.querySelector('.angle');
let styleMode = localStorage.getItem('styleMode');

const enableDarkStyle = () => {
  document.body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
}
const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', null);
}
styleToggleMobil.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
})

styleToggle.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
})
if (styleMode === 'dark') {
  enableDarkStyle();
}