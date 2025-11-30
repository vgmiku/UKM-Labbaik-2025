let ticking = false;

function updateParallax() {
    const sections = [
        { section: ".ukmSejarahimg", img: ".bgSejarah" },
        { section: ".ukmDeptimg", img: ".bgDept" }
    ];

    sections.forEach(({ section, img }) => {
        const sectionEl = document.querySelector(section);
        const imgEl = document.querySelector(img);

        if (sectionEl && imgEl) {
            const rect = sectionEl.getBoundingClientRect();
            const speed = 0.4;

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = rect.top * speed * -1;
                imgEl.style.transform = `translateY(${offset}px)`;
            }
        }
    });

    ticking = false;
}

document.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
