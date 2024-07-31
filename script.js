const menuButton = document.getElementById("menuButton");
const menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", function() {
    if (menuList.style.display === "none" || menuList.style.display === "") {
        menuList.style.display = "flex"; // Show the menu list
        menuList.style.flexDirection = "column"; // Ensure it is displayed in a column
        menuList.style.textAlign = "center"; // Center the text
    } else {
        menuList.style.display = "none"; // Hide the menu list
    }
});
