document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sideMenu = document.querySelector(".side-menu");

    // Toggle the side menu when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        sideMenu.classList.toggle("show");
    });
});