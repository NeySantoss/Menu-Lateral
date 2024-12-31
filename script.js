const closeMenuEl = document.getElementById("closeMenu");
const openMenuEl = document.getElementById("openMenu");
const menu = document.querySelector(".menu");

openMenuEl.addEventListener("click", () => {
    menu.style.display = "flex";
    menu.style.left = (menu.offsetWidth * -1) + "px";

    openMenuEl.style.display = "none"

    setTimeout(() => {
        menu.style.opacity = "1";
        menu.style.left = "0"
    }, 10)
})

closeMenuEl.addEventListener("click", () => {
    menu.style.opacity ="0";

    menu.style.left = (menu.offsetWidth * -1) + "px";
    
    setTimeout(() => {
        menu.removeAttribute("style");
        openMenuEl.removeAttribute("style");
    }, 200)
    
})