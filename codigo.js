// armazenamento de dados
let usuarioArmazenado = "";
let senhaArmazenada = "";

// criando conta
function criarConta() {
 usuarioArmazenado = document.getElementById("novoUsuario").value;

 senhaArmazenada = document.getElementById("novaSenha").value;

 if(usuarioArmazenado == "" || senhaArmazenada == "") {
  alert("Preencha tudo");
 }
 else {
  alert("Conta criada");
}

}
// script do login
function login() {
 let usuario = document.getElementById("usuario").value;
 let senha = document.getElementById("senha").value;

 if(usuario == usuarioArmazenado && senha == senhaArmazenada) {
    alert("Login realizado");
  }
 else {
  alert("Usuário incorreto");
 }
}
// formulario
function formulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome == "" || email == "") {
        alert("Preencha todos os campos");
    } else {
        alert("Formulário enviado");
    }
}
