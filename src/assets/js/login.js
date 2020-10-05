


var modal = document.getElementById("modalCadastro");

var btnCadastro = document.getElementById("btn-cadastro");

var btnFechar = document.getElementsByClassName("btn-close")[0];

var span = document.getElementsByClassName("close")[0];

btnCadastro.onclick = function() {
  modal.style.display = "flex";
}

btnFechar.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

btnFechar.addEventListener.

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



