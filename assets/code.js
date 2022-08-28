let etiquetaBody = document.querySelector('body')
let navBar = document.createElement('nav')
navBar.className = 'navbar navbar-expand-lg bg-dark navbar-dark'
etiquetaBody.appendChild(navBar)

let divHijoNavbar = document.createElement('div')
divHijoNavbar.className = 'container'
navBar.appendChild(divHijoNavbar)

let a_DivHijoNavbar = document.createElement('a')
a_DivHijoNavbar.className = 'navbar-brand'
a_DivHijoNavbar.setAttribute('href', '#')
divHijoNavbar.appendChild(a_DivHijoNavbar)

let imgHijoA = document.createElement('img')
imgHijoA.setAttribute('src', 'assets/img/logo.svg')
a_DivHijoNavbar.appendChild(imgHijoA)

let botonHamburguesaResponsive = document.createElement('button')
botonHamburguesaResponsive.className = 'navbar-toggler'
botonHamburguesaResponsive.setAttribute('type', 'button')
botonHamburguesaResponsive.setAttribute('data-bs-toggle', 'collapse')
botonHamburguesaResponsive.setAttribute('data-bs-target', '#navbarSupportedContent')
botonHamburguesaResponsive.setAttribute('aria-controls', 'navbarSupportedContent')
botonHamburguesaResponsive.setAttribute('aria-expanded', 'false')
botonHamburguesaResponsive.setAttribute('aria-label', 'Toggle navigation')
divHijoNavbar.appendChild(botonHamburguesaResponsive)
