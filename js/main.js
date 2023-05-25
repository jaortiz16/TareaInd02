var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
btn.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener("click", function (event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});