const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menuOverlay");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// a nav comeca escura por estar sobre a hero
navbar.classList.add("scrolled");

function handleMenuClick(){
    hamburger.addEventListener("click", () => {
        if(hamburger.classList.contains("opened")){
            hamburger.classList.remove("opened");
            menuOverlay.classList.remove("opened");

            return;
        }

        hamburger.classList.add("opened");
        menuOverlay.classList.add("opened");
    });

    menuOverlay.addEventListener("click", (e) => {
        if(e.target === menuOverlay){
            hamburger.classList.remove("opened");
            menuOverlay.classList.remove("opened");
        }
    });

    menuOverlay.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("opened");
            menuOverlay.classList.remove("opened");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    handleMenuClick();
});
