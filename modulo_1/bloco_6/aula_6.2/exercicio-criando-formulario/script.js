function addBotaoEnviar() {
  let pegarDivBotoes = document.getElementById("botoes");
  let botaoEnviar = document.createElement("button");
  botaoEnviar.type = "submitt";
  botaoEnviar.innerText = "Enviar";
  botaoEnviar.id = "botaoEnviar";
  botaoEnviar.className = "btn btn-success btn-primary btn-lg";
  botaoEnviar.style.margin = "20px";

  pegarDivBotoes.appendChild(botaoEnviar);
}

function interrompeAçaoEnviar() {
  let pegarBotaoEnviar = document.getElementById("botaoEnviar");
pegarBotaoEnviar.addEventListener("click", function(event) {
  event.preventDefault();
});
};

function addBotaoLimpar() {
  let pegarDivBotoes = document.getElementById("botoes");
  let botaoLimpar = document.createElement("button");
  botaoLimpar.type = "reset";
  botaoLimpar.innerText = "Apagar";
  botaoLimpar.id = "botaoLimpar";
  botaoLimpar.className = "btn btn-danger btn-primary btn-lg";
  botaoLimpar.style.margin = "20px";

  pegarDivBotoes.appendChild(botaoLimpar);
}

addBotaoEnviar();
interrompeAçaoEnviar();
addBotaoLimpar();
document.getElementById("date").DatePickerX.init();