
let popup = document.querySelector(".popup");
let flash = document.querySelectorAll(".open-window");
let close = document.querySelector(".popup_close");

//when you press the button 'flashcards' a window pops up
flash[0].onclick = function () {
    popup.style.display = "block";
};
//when you press the button 'virtual piano' a window pops up
flash[1].onclick = function () {
    popup.style.display = "block";
}

//when you press the button the window closes
close.onclick = function () {
    popup.style.display = "none";
};



