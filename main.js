const toggle = document.querySelector('nav #toggler');
const flip = document.querySelector('nav ul');
const btn = document.querySelectorAll('button');
const errorBox = document.querySelector('.coming');
const clearComing = document.querySelector('div.clearComing');
const errorToggler = document.querySelectorAll('nav ul a')



errorToggler.forEach((n) => {
    n.addEventListener('click', function () {
        errorBox.classList.add('comingView')

    })
})

clearComing.addEventListener('click', (n) => {
    errorBox.classList.toggle('comingView')
})
const buttons = Array.from(btn);
toggle.addEventListener('click', (n) => {
    flip.classList.toggle('open');
})

buttons.forEach((n) => {
    n.addEventListener('mouseover', function () {
        this.style.color = 'white'
        this.style.backgroundColor = "black"
    });
    n.addEventListener('mouseout', (n) => {
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