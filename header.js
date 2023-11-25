// ANIMAÇÃO HEADER
window.onload = function(){
    const menu =document.getElementById('menu');
    const navbar = document.getElementById('navbar-titulo')

    var cont = 0;

    menu.addEventListener('click', e=>{
        if(cont){
            navbar.style.display = 'none';
        }
        else{
            navbar.style.display = 'inline-flex'
        }
        cont = (cont + 1) % 2
    })
}