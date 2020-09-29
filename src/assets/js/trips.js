var modal = document.getElementById("modal-trip");
var btn = document.querySelectorAll(".btn-edit");
var span = document.getElementsByClassName("close")[0];
var close = document.getElementsByClassName("close-btn")[0];


for(i=0; i < btn.length; i++){
    btn[1].onclick = function() {
        modal.style.display = "flex";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



