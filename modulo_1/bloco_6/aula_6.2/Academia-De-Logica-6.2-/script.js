const checkin = document.querySelector('.inputCheckin');  
const checkout = document.querySelector('.inputCheckout'); 
const bedroom = document.querySelectorAll('.bedroom'); 
const select = document.querySelector('.nPessoas'); 
const textArea = document.querySelector('.obs'); 
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto(){
  for (let i = 0; i <bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas(){
  return select.options[select.selectedIndex].value;
}

function getData(value){
  const valueDate = value + 'T03:00:00.000Z'
  data = new Date(valueDate)
  dataFormatada = data.toLocaleDateString('pt-BR') ; 
  return dataFormatada;
}

function criaLista() {
  btnSubmit.addEventListener("click", function() {
   for (let index = 1; index <= 3; index++) {
     let criaLi = document.createElement("li");
     
     
   }
  })
}
criaLista();