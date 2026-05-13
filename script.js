function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Load dark mode preference on page load
window.addEventListener("load", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});