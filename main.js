document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var navList = document.querySelector(".navlist");

    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation();  // Prevent the click event from bubbling up to the document
        navList.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove("show");
        }
    });

    document.addEventListener("scroll", function() {
        navList.classList.remove("show");
    });
});
