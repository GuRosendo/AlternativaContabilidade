const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

reveals.forEach(el => revealObserver.observe(el));

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }

        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;

            if(current >= target){
                current = target;
                clearInterval(timer);
            }

            el.textContent = Math.floor(current).toLocaleString("pt-BR");
        }, 16);

        counterObserver.unobserve(el);
    });
}, {
    threshold: 0.5
});

counters.forEach(c => counterObserver.observe(c));
