// JavaScript to trigger animations when the page scrolls
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animated");
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
            element.style.animationPlayState = "running";
        }
    });
});
