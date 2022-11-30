const Header = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");

const toggleMenu = () => {
    Header.classList.toggle("active")
}

menuBtn.addEventListener("click", () => toggleMenu());