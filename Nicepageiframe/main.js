const iframe = document.querySelector('iframe');

const desktopBtn = document.querySelector('.desktop')
const laptopBtn = document.querySelector('.laptop')
const tabletBtn = document.querySelector('.tablet')
const mobileHoriBtn = document.querySelector('.mobile-horizontal')
const mobileVertiBtn = document.querySelector('.mobile-vertical')

desktopBtn.addEventListener('click', () => {
    iframe.style.width = '100%';
})

laptopBtn.addEventListener('click', () => {
    iframe.style.width = '1057px';
})

tabletBtn.addEventListener('click', () => {
    iframe.style.width = '837px';
})

mobileHoriBtn.addEventListener('click', () => {
    iframe.style.width = '657px';
})

mobileVertiBtn.addEventListener('click', () => {
    iframe.style.width = '457px';
})