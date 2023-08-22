(function () {
    // Part 1: Timeline SlideIn Functionality
    const items = document.querySelectorAll(".timeline-section li");

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function slideIn() {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("slide-in");
            } else {
                items[i].classList.remove("slide-in");
            }
        }
    }

    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);

    // Part 2: Navigation Functionality
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            let targetSectionId = link.getAttribute("href").substring(1);

            if (document.getElementById(targetSectionId).classList.contains("fade-in")) {
                // If the target section is already visible, just return
                return;
            }

            // Hide all sections immediately
            sections.forEach((section) => {
                section.classList.remove("fade-in");
                section.style.display = 'none'; // hide them immediately
            });

            // Show the target section with a fade-in effect
            let targetSection = document.getElementById(targetSectionId);
            targetSection.style.display = 'block'; // show it immediately
            setTimeout(() => {
                targetSection.classList.add("fade-in"); // add the fade-in effect
            }, 10); // a very short delay to ensure the display change takes effect first
        });
    });
})();
