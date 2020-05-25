const toggle = document.querySelector('nav #toggler');
const flip = document.querySelector('nav ul');
const btn = document.querySelectorAll('button');

const buttons = Array.from(btn);
toggle.addEventListener('click', function () {
    flip.classList.toggle('open');
})

buttons.forEach((n) => {
    n.addEventListener('mouseover', function () {
        this.style.color = 'white'
        this.style.backgroundColor = "black"
    });
    n.addEventListener('mouseout', function () {
        this.style.color = 'black'
        this.style.backgroundColor = "transparent"
    })
})

buttons.forEach((n) => {
    n.addEventListener('click', function () {
        this.innerHTML = "Added"
        this.style.color = "orange"
    })
})