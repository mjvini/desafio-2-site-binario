cont = 0

function binaryToString(binary){
    string = String.fromCharCode(parseInt(binary, 2))
    return string
}

function stringToBinary(evt){
    const textoTraduzidoContainer = document.getElementById("textotraduzido")

    const textInput = evt.currentTarget.value

    var strBinarios = ""

    for (var i = 0; i < textInput.length; i++) {
        strBinarios = strBinarios.concat(textInput[i].charCodeAt(0).toString(2) + " ")
    }

    textoTraduzidoContainer.innerHTML = strBinarios
}

function separaString(string){
    let array = string.split(" ")
    
    return array
}

function carregaInput(evt){
        const textotraduzido = document.getElementById("textotraduzido")

        const textInput = evt.currentTarget.value

        let strCaracteres = ""
        
        arrCaracteres = separaString(textInput)

        for(let i = 0; i < arrCaracteres.length; i++){
            if(parseInt(arrCaracteres[i], 2) >= 32 && parseInt(arrCaracteres[i], 2) <= 126){
                strCaracteres = strCaracteres.concat(binaryToString(arrCaracteres[i]))
            }
        }
        
        textotraduzido.innerHTML = strCaracteres
}

function trocaTraducao(evt){
    const lingua1 = document.getElementById("linguagem1")
    const lingua2 = document.getElementById("linguagem2")

    cont++;

    const textInput = document.getElementById("textinput");

    var temp;
    temp = lingua1.innerHTML
    lingua1.innerHTML = lingua2.innerHTML
    lingua2.innerHTML = temp

    if(cont % 2 == 1){
        botaoInverte.removeEventListener("keyup", carregaInput)
        textInput.addEventListener("keyup", stringToBinary);
    }
    else{
        textInput.removeEventListener("keyup", stringToBinary);
        botaoInverte.addEventListener("keyup", carregaInput)
    }
}

window.onload = function() {
    const textInput = document.getElementById("textinput");
    const botaoInverte = document.getElementById("botao-inverte")

    textInput.addEventListener("keyup", carregaInput);

    botaoInverte.addEventListener("click", e =>{
        const lingua1 = document.getElementById("linguagem1")
        const lingua2 = document.getElementById("linguagem2")
    
        cont++;
    
        const textInput = document.getElementById("textinput");
    
        var temp;
        temp = lingua1.innerHTML
        lingua1.innerHTML = lingua2.innerHTML
        lingua2.innerHTML = temp
        
        if(cont % 2 == 1){
            textInput.removeEventListener("keyup", carregaInput);
            textInput.addEventListener("keyup", stringToBinary);
        }
        else{
            textInput.removeEventListener("keyup", stringToBinary);
            textInput.addEventListener("keyup", carregaInput);
        }
    });

    // ANIMAÇÃO HEADER
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
    });
}