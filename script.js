document.getElementById("button").addEventListener("click",clicarBotao )

function clicarBotao(){ 

   if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ) {
    alert("Pronto! Voce receberá novidades por e-mail!");
  }else{
    alert("Preencha os campos Nome e E-mail!");
  }
  
}