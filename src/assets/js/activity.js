var modal = document.getElementById("modal-activity");
var btn = document.getElementById("btn-activity");
var span = document.getElementsByClassName("close")[0];
var close = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
    modal.style.display = "flex";
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



