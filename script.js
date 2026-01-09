document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".launch-btn");
    const meteors = document.getElementById("meteors");

    if (!button || !meteors) return;

    button.addEventListener("click", () => {
        meteors.classList.remove("active"); // reset animation
        void meteors.offsetWidth;           // force reflow
        meteors.classList.add("active");    // trigger meteor
    });
});
