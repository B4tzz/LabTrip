var modal = document.getElementById("modal-trip");
var modalEdit = document.getElementById("modal-edit");
var modalDelete = document.getElementById("modal-delete");
var modalNew = document.getElementById("modal-new");
var btnEdit = document.getElementsByClassName("btn-edit");
var btnDelete = document.getElementsByClassName("btn-delete");
var btnNew = document.getElementById("btn-new");
var span = document.getElementsByClassName("close");
var close = document.getElementsByClassName("close-btn");

for(i=0; i < btnEdit.length; i++){
    btnEdit[i].onclick = function() {
        modal.style.display = "flex";
        modalEdit.style.display = "flex";
        modalDelete.style.display = "none";
        modalNew.style.display = "none";
    }
}

for(i=0; i < btnDelete.length; i++){
    btnDelete[i].onclick = function() {
        modal.style.display = "flex";
        modalDelete.style.display = "flex";
        modalEdit.style.display = "none";
        modalNew.style.display = "none";
    }
}

for(i=0; i < span.length; i++){
    span[i].onclick = function() {
        modal.style.display = "none";
    }
}

for(i=0; i < close.length; i++){
    close[i].onclick = function() {
        modal.style.display = "none";
    }
}

btnNew.onclick = function() {
    modal.style.display = "flex";
    modalNew.style.display = "flex";
    modalEdit.style.display = "none";
    modalDelete.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



