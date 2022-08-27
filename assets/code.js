let etiquetaBody = document.querySelector('body')
let navBar = document.createElement('nav')
navBar.className = 'navbar navbar-expand-lg bg-light'
etiquetaBody.appendChild(navBar)

let divHijoNavbar = document.createElement('div')
divHijoNavbar.className = 'container-fluid'
navBar.appendChild(divHijoNavbar)

let divDivHijoNavbar = document.createElement('div')
divDivHijoNavbar.className = 'nav-item'
divHijoNavbar.appendChild(divDivHijoNavbar)

let a_divDivHijoNavbar = document.createElement('a')
a_divDivHijoNavbar.className = 'nav-link'
a_divDivHijoNavbar.setAttribute('href', '#')
a_divDivHijoNavbar.innerText = 'INICIAR SECCION'
divDivHijoNavbar.appendChild(a_divDivHijoNavbar)