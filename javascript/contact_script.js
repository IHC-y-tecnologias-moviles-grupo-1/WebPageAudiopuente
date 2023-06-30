/*Script para el menu hamburguer en dipositivos moviles*/ 
const bar = document.getElementById('bar')
const navbar = document.getElementById('nav-buttons');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        navbar.classList.remove('active');
    })
}

