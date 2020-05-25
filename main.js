const toggle = document.querySelector('nav #toggler');
const flip = document.querySelector('nav ul');
toggle.addEventListener('click', function () {
    flip.classList.toggle('open')
})