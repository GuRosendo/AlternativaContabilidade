const scrollTopBtn = document.getElementById("scroll-top");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 400){
        scrollTopBtn.classList.add("show");

        return;
    }

    scrollTopBtn.classList.remove("show");
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
