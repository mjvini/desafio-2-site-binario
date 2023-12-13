/*
// ANIMAÇÃO HEADER
window.onload = function(){
    const menu =document.getElementById('menu');
    const navbar = document.getElementById('nav-itens')

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
}*/

document.addEventListener("DOMContentLoaded", function(){
    let botao = document.querySelector(".menu-btn");
    let navbar = document.querySelector(".overlay");
    let logo = document.querySelector(".logo");
    let corpoPagina = document.querySelector(".corpo");

    botao.addEventListener("click", function(){
        if (navbar.classList.contains("visivel")) {
            // Se a classe "visivel" estiver presente no navbar, fecha o navbar, mostra o conteúdo e mostra o corpo da página.
            navbar.classList.remove("visivel");
            logo.style.display = "block";
            corpoPagina.classList.remove("visivel");
          } else {
            // Caso contrário, abre o navbar, oculta o conteúdo e oculta o corpo da página.
            navbar.classList.add("visivel");
            logo.classList.add("sem-logo");
            corpoPagina.classList.add("visivel");
          }
    })

});
