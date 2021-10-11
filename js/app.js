const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu li");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle('toggle');
    navMenu.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

function closeNavbar() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('toggle');
    links.forEach(link => {
        link.classList.remove('fade');
    });
};

links.forEach(n => n.addEventListener("click", closeNavbar));

window.onscroll = () =>{
    let pos = window.scrollY - 1500;
    console.log(pos);
    text1.style.right = `${pos}px`;
    text2.style.left = `${pos}px`;
};

// AOS.init({
//     offset: 400,
//     duration: 1000
// });