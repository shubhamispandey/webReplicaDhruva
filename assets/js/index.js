// Loader
const body = document.body
const loader = document.querySelector('.loader')

window.onload = () => {
    setTimeout(() => {
        body.classList.remove('no-scroll')
        loader.classList.remove('active')
    }, 1000)
}

// Socials
const social_open_btn = document.querySelector('.socials-menu-btn')
const social_close_btn = document.querySelector('.socials-close-btn')
const socials = document.querySelector('.socials')
social_open_btn.addEventListener('click', () => {
    socials.classList.add('active')
})
social_close_btn.addEventListener('click', () => {
    socials.classList.remove('active')
})

// Carousel Header
let counter = 1
const carouselHeader = document.querySelector('.carousel-header')
const carouselPrepend = document.querySelector('.carousel-prepend')
setInterval(() => {
    let item = counter % 3
    carouselPrepend.classList.remove('active')
    setInterval(() => {
        carouselPrepend.classList.add('active')
    }, 1)
    Array.from(carouselHeader.children).forEach(el => {
        el.classList.remove('active')
    });
    carouselHeader.children[item].classList.add('active')
    counter++
}, 4000);

// Carousel Projects
const carouselBtnRight = document.querySelector('.carousel-btn-project-right')
const carouselBtnLeft = document.querySelector('.carousel-btn-project-left')
const carousel = document.querySelector('.carousel-project')

carouselBtnRight.addEventListener('click', () => {

    const s1coords = carousel.getBoundingClientRect();
    console.log(s1coords)

    Items = carousel.querySelectorAll('.projects__item')
    Items.forEach((item) => {
        item.classList.remove('active')
    })
    Items[2].classList.add('active')

    carousel.scrollTo({
        left: s1coords.left + 700,
        top: s1coords.top + carousel.pageYOffset,
        behavior: 'smooth',
    });
})
carouselBtnLeft.addEventListener('click', () => {

    const s1coords = carousel.getBoundingClientRect();
    console.log(s1coords)

    Items = carousel.querySelectorAll('.projects__item')
    Items.forEach((item) => {
        item.classList.remove('active')
    })
    Items[0].classList.add('active')

    carousel.scrollTo({
        left: s1coords.left - 700,
        top: s1coords.top + carousel.pageYOffset,
        behavior: 'smooth',
    });
})

// Carousel Projects
const carouselBtnCRight = document.querySelector('.carousel-btn-client-right')
const carouselBtnCLeft = document.querySelector('.carousel-btn-client-left')
const carouselLast = document.querySelector('.carousel-clients')

carouselBtnCRight.addEventListener('click', () => {

    const scrd = carouselLast.getBoundingClientRect();
    console.log(scrd)


    carouselLast.scrollTo({
        left: scrd.left + 700,
        top: scrd.top + carouselLast.pageYOffset,
        behavior: 'smooth',
    });
})
carouselBtnCLeft.addEventListener('click', () => {

    const scrd = carouselLast.getBoundingClientRect();
    console.log(scrd)


    carouselLast.scrollTo({
        left: scrd.left - 700,
        top: scrd.top + carouselLast.pageYOffset,
        behavior: 'smooth',
    });
})