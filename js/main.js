const nav = document.querySelector('#header nav')
const toggles = document.querySelectorAll('nav .toggle')
for (const toggle of toggles) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

// Colocar sombra no header quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination : {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
})

// Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    { interval: 100 }
)

// Back-to-top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Menu Ativo
// Pega todas as "section" de "main" que possuem "id"
const sections = document.querySelectorAll('main section[id]')
function activateMenu() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if (checkpointStart && checkpointEnd){
            const sectionActive = document.querySelector('nav ul li a[href*=' + sectionId + ']')
            sectionActive.classList.add('active')
        } else {
            const sectionActive = document.querySelector('nav ul li a[href*=' + sectionId + ']')
            sectionActive.classList.remove('active')
        }
    }
}

// Scroll da Tela
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activateMenu()
})