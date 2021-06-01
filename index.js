let popup = document.querySelector(".popup");
let flash = document.querySelectorAll(".open-window");
let close = document.querySelector(".popup_close");

flash[0].onclick = function () {
    popup.style.display = "block";
};
flash[1].onclick = function () {
    popup.style.display = "block";
}
close.onclick = function () {
    popup.style.display = "none";
};



