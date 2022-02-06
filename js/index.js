// ========== My Skills ========== 
gsap.from('.skills_bar abbr', {
    scrollTrigger: '.skills_bar',
    left: 0,
    ease: Power2.easeInOut,
    duration: 2,
    stagger: 0.1
});

gsap.from('.skills_bar span', {
    scrollTrigger: '.skills_bar',
    width: '0px',
    ease: Power2.easeInOut,
    duration: 2,
    stagger: 0.1
});


// nav trigger 
const nav = document.querySelector('.nav');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', function(){
    nav.classList.toggle('active')
    trigger.classList.toggle('active');
});