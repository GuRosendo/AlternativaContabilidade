document.querySelectorAll(".faq-item").forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-toggle svg");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item").forEach(i => {
            i.classList.remove("open");

            const ic = i.querySelector(".faq-toggle svg");

            if(ic){
                ic.innerHTML = '<path d="M3 7h8M7 3v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
            }
        });

        if(isOpen){
            return;
        }

        item.classList.add("open");

        if(icon){
            icon.innerHTML = '<path d="M3 7h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
        }
    });
});
