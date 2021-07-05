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
};

//when you press the button the window closes
close.onclick = function () {
    popup.style.display = "none";
};

const navMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const navlinks = document.querySelectorAll(".links li");

// Toogle nav
//     hamburger.onclick = function () {
//         links.classList.toggle('.link-active');
//     };
    hamburger.addEventListener('click', () => {
        links.classList.toggle('link-active');
        navlinks.forEach((link, index)=>{
            if (links.style.animation) {
                links.style.animation = '';
            }else{
                links.style.animation='hamburgerFade 0.5s ease forwards $(index/7+0.3)s'
            }

        })
        hamburger.classList.toggle('toogle')
    })
}
navMenu()
// //Animate links
//


