const iframe = document.querySelector('iframe');

const allButtons = document.querySelectorAll('.display-control span')

console.log(allButtons)
const desktopBtn = document.querySelector('.desktop')
const laptopBtn = document.querySelector('.laptop')
const tabletBtn = document.querySelector('.tablet')
const mobileHoriBtn = document.querySelector('.mobile-horizontal')
const mobileVertiBtn = document.querySelector('.mobile-vertical')

function clearActiveStatus() {
    allButtons.forEach(button => {
        button.classList.remove('active');
    })
}

desktopBtn.addEventListener('click', (e) => {
    iframe.style.width = '100%';
    clearActiveStatus();
    e.currentTarget.classList.add('active');
})

laptopBtn.addEventListener('click', (e) => {
    iframe.style.width = '1057px';
    clearActiveStatus();
    e.currentTarget.classList.add('active');
})

tabletBtn.addEventListener('click', (e) => {
    iframe.style.width = '837px';
    clearActiveStatus();
    e.currentTarget.classList.add('active');
})

mobileHoriBtn.addEventListener('click', (e) => {
    iframe.style.width = '657px';
    clearActiveStatus();
    e.currentTarget.classList.add('active');
})

mobileVertiBtn.addEventListener('click', (e) => {
    iframe.style.width = '457px';
    clearActiveStatus();
    e.currentTarget.classList.add('active');
})

// display controller buttons based on body width

// const body = document.querySelector('body');

// if (Number(body.offsetWidth) > 768 && Number(body.offsetWidth) < 991)  {
//     desktopBtn.classList.add('hidden')
//     laptopBtn.classList.add('hidden')
// }


// 768px

