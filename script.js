const menuButton = document.getElementById("menuButton");
const menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", function () {
    if (window.innerWidth <= 992) { // 62rem = 992px
        if (menuList.style.display === "flex") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "flex";
            menuList.style.flexDirection = "column";
        }
    }
});

// Add event listener for window resize
window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
});
