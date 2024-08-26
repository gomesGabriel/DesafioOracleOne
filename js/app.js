var texto = document.getElementById("texto");

function cript(){
    var encriptar = texto.value.trim();
    if(encriptar===''){
        alert("Inserir texto a ser criptografado!");
    }else{
        encriptar = encriptar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById('secaoDireita').innerHTML = '<section id="secaoDireitaAtt"> <textarea readonly id="textoArea">' + encriptar + '</textarea><div class="botoes2"><button id="copiar" onclick="copiar()">Copiar</button></div></section>';
    }
}

var encriptado = texto.value

function decript(){
    var descriptografar = texto.value.trim();
    
    if(descriptografar===''){
        alert("Inserir texto a ser descriptografado!");
    }else{
        descriptografar = descriptografar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById('secaoDireita').innerHTML = '<section id="secaoDireitaAtt"> <textarea readonly id="textoArea">' + descriptografar + '</textarea><div class="botoes2"><button id="copiar" onclick="copiar()">Copiar</button></div></section>';
    }
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById("textoArea").value);

    document.getElementById('secaoDireita').innerHTML = '<section id="secaoDireita"><img src="img/pessoa_com_lupa.png" alt="Pessoa com lupa"><p class="mensagemDestaque">Nenhuma mensagem encontrada</p><p class="mensagemObs">Digite um texto que você deseja<br>criptografar ou descriptografar.</p></section>';
}