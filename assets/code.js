let etiquetaBody = document.querySelector('body')
let navBar = document.createElement('nav')
navBar.className = 'navbar navbar-expand-lg bg-transparent fixed-top'
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


/*let botonHamburguesaResponsive = document.createElement('button')
botonHamburguesaResponsive.className = 'navbar-toggler'
botonHamburguesaResponsive.setAttribute('type', 'button')
botonHamburguesaResponsive.setAttribute('data-bs-toggle', 'collapse')
botonHamburguesaResponsive.setAttribute('data-bs-target', '#navbarSupportedContent')
botonHamburguesaResponsive.setAttribute('aria-controls', 'navbarSupportedContent')
botonHamburguesaResponsive.setAttribute('aria-expanded', 'false')
botonHamburguesaResponsive.setAttribute('aria-label', 'Toggle navigation')
divHijoNavbar.appendChild(botonHamburguesaResponsive)


*/
let divBarraHalo = document.createElement('div')
divBarraHalo.className = 'navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-content-center'
divHijoNavbar.appendChild(divBarraHalo)

let ulBarraHalo = document.createElement('ul')
ulBarraHalo.className = 'navbar-nav me-auto mb-2 mb-lg-0 border-start text-white'
divBarraHalo.appendChild(ulBarraHalo)

let liBarraHalo = document.createElement('li')
liBarraHalo.className = 'nav-item ms-3'
liBarraHalo.innerText = 'HALO :'
ulBarraHalo.appendChild(liBarraHalo)

let li2BarraHalo = document.createElement('li')
li2BarraHalo.className = 'nav-item ms-3'
li2BarraHalo.innerText = 'VER AHORA'
ulBarraHalo.appendChild(li2BarraHalo)

let divIniciarSeccion = document.createElement('div')
divIniciarSeccion.className = 'navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-content-center'
divHijoNavbar.appendChild(divIniciarSeccion)

let h3IniciarSeccion = document.createElement('a')
h3IniciarSeccion.className = 'navbar-brand me text-white fs-6'
h3IniciarSeccion.setAttribute('href', '#')
h3IniciarSeccion.innerText = 'INICIAR SESIÓN'
divHijoNavbar.appendChild(h3IniciarSeccion)

let seccion1 = document.createElement('section')
seccion1.className = '.container'
etiquetaBody.appendChild(seccion1)

let backImg1 = document.createElement('div')
backImg1.style.backgroundImage = 'url("../assets/img/latam_upsell_hero1_weblandscape_2560x960_050422.jpeg")'
backImg1.style.backgroundPosition = 'center'
backImg1.style.backgroundRepeat = 'no-repeat'
backImg1.style.backgroundSize = 'cover'
backImg1.style.height = '960px'
backImg1.style.width = '100%'
seccion1.appendChild(backImg1)

