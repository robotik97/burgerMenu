const popup = document.querySelector(".popup");
const flash = document.querySelectorAll(".open-window");
const close = document.querySelector(".popup_close");

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

const navMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links Li");

// Toggle nav
    hamburger.onclick = function () {
        links.classList.toggle('link-active');
//Animate links
        navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `hamburgerFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        });
        //Hamburger animationn
    hamburger.classList.toggle('toggle');
    };
}
navMenu();


