// armazenamento de dados
let usuarioArmazenado = "";
let senhaArmazenada = "";

// criando conta
function criarConta() {
 usuarioArmazenado = document.getElementById("novoUsuario").value;

 senhaArmazenada = document.getElementById("novaSenha").value;

 if(usuarioArmazenado == "" || senhaArmazenada == "") {
  alert("Preencha os campos para criar a conta");
 }
 else {
  alert("Conta criada");
}

}
// script do login
function login() {
 let usuario = document.getElementById("usuario").value;
 let senha = document.getElementById("senha").value;

 if(usuario == "" || senha == "") {
    alert("Preencha todos os campos de login");

 }

 else if(usuario == usuarioArmazenado && senha == senhaArmazenada) {
    alert("Login realizado");
  }
 else {
  alert("Usuário não encontrado");
 }
}
// formulario
function formulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome == "" || email == "") {
        alert("Preencha todos os campos do formulário");
    } else {
        alert("Formulário enviado");
    }
}
// slideshow
 let imagens = [
    "slide1.webp",
    "slide2.webp",
    "slide3.webp"
];
 let indice = 0;
 function slideshow() {
    indice++;
    if(indice>= imagens.length) {
        indice = 0;
    }
    document.getElementById("slide").src = imagens[indice];
};
// evento DOM
let botao =
document.getElementById("botaoDOM");

botao.addEventListener(
 "click",
    function() {
 document.getElementById("evento").innerHTML ="você clicou no botão";
    setTimeout(function() {
        document.getElementById("evento").innerHTML = "";
    }, 1000);
}
);
// prompt de boas vindas
let nomeUsuario = prompt("Digite seu nome");
alert("Bem vindo ao site " + nomeUsuario);