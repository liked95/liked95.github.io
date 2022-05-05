const button = document.querySelector('button');
const table = document.querySelector('table');
button.addEventListener('click', () => {
    let para = document.querySelector('p');
    if (para.className !== 'active'){
        para.textContent = 'Sorry for clicking my parent!'
        para.classList.toggle('active');
        table.classList.toggle('show');

    } else {
        para.textContent = 'Click my parent(button) to make me green';
        para.classList.toggle('active');
        table.classList.toggle('show');
    }
});
