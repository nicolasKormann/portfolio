/* ---------- DARK MODER / LIGHT MODE ----------- */
let body = document.querySelector('body')
let moon = document.querySelector('.moon')
let sun = document.querySelector('.sun')

function toggleTheme() {
  if (body.classList.contains('darkmode')) {
    body.classList.remove('darkmode')
    body.classList.add('lightmode')
  } else {
    body.classList.remove('lightmode')
    body.classList.add('darkmode')
  }
}

moon.addEventListener('click', toggleTheme)
sun.addEventListener('click', toggleTheme)

/* ---------- OPEN MENU - MOBILE ----------- */
let button = document.querySelector('#open-menu')

function openNavbar() {
  let myLinks = document.getElementById('myLinks')
  if (myLinks.style.display === 'block') {
    myLinks.style.display = 'none'
  } else {
    myLinks.style.display = 'block'
  }
}

button.addEventListener('click', openNavbar)

