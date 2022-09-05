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

//SECCION 1

let seccion1 = document.createElement('section')
seccion1.className = '.container col'
etiquetaBody.appendChild(seccion1)


let backImg1 = document.createElement('div')
backImg1.className = ' backimage2  col'
backImg1.style.height = '720px'
/*backImg1.style.backgroundImage = 'url("../assets/img/latam_upsell_hero1_weblandscape_2560x960_050422.jpeg")'
backImg1.style.backgroundPosition = 'center'
backImg1.style.backgroundRepeat = 'no-repeat'
backImg1.style.backgroundSize = 'cover'
backImg1.style.height = '960px'
backImg1.style.width = '100%'*/

seccion1.appendChild(backImg1)

let seccion1Contenido = document.createElement('section')
seccion1Contenido.className = 'container col'
backImg1.appendChild(seccion1Contenido)

let divSection1Contenido = document.createElement('div')
seccion1Contenido.appendChild(divSection1Contenido)

let pSection1Contenido = document.createElement('p')
pSection1Contenido.className = 'text-start fs-1 fw-bold col-5 text-white col pt-5 .container'
pSection1Contenido.innerText = 'HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS.   UNA MONTAÑA DE ENTRETENIMIENTO.'
backImg1.appendChild(pSection1Contenido)

let div2Section1Contenido = document.createElement('div')
div2Section1Contenido.className = 'col'
seccion1Contenido.appendChild(div2Section1Contenido)

let p2Section1Contenido = document.createElement('p')
p2Section1Contenido.className = 'text-start fs-6 col-3 text-white col mt-4'
p2Section1Contenido.innerText = 'Suscríbete por $13,900.00 COP al Mes.Cancela en cualquier momento.Únete ahora y obtén 7 días gratis.'
backImg1.appendChild(p2Section1Contenido)

let div3Section1Contenido = document.createElement('div')
div3Section1Contenido.className = 'd-grid gap-2 col-6'
backImg1.appendChild(div3Section1Contenido)
// Esto me queda pendiente 
let btnSection1Contenido = document.createElement('button')
btnSection1Contenido.className = ' btn btn-primary text-center fs-6 col-5 text-white mt-4'
btnSection1Contenido.innerText = 'Suscríbete'
div3Section1Contenido.appendChild(btnSection1Contenido)

let btn1Section1Contenido = document.createElement('button')
btn1Section1Contenido.className = ' btn btn-primary text-center fs-6 col-5 text-white '
btn1Section1Contenido.innerText = 'Suscríbete'
div3Section1Contenido.appendChild(btn1Section1Contenido)

let btn2Section1Contenido = document.createElement('button')
btn2Section1Contenido.className = ' btn btn-primary text-center fs-6 col-5 text-white'
btn2Section1Contenido.innerText = 'Suscríbete'
div3Section1Contenido.appendChild(btn2Section1Contenido)


let seccion2 = document.createElement('section')
seccion2.className = 'col'
etiquetaBody.appendChild(seccion2)

let divSeccion2 = document.createElement('div')
divSeccion2.className = 'backimage'
divSeccion2.innerText= 'hola mundo'
divSeccion2.style.height = '960px'
seccion2.appendChild(divSeccion2)