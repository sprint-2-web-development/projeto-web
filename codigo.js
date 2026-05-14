// script do login
function login() {
 let usuario = document.getElementById("usuario").value;
 let senha = document.getElementById("senha").value;

 if(usuario == "admin" &&
    senha == "123") {
    alert("Login realizado");
    }
 else {
  alert("Usuário incorreto");

    }
}