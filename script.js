document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to the navigation links
    document.getElementById("home").addEventListener("click", function () {
        updateContent("Welcome to Your Website! This is the home page content.");
    });

    document.getElementById("privacy").addEventListener("click", function () {
        updateContent("Read our Privacy Policy here.");
    });

    document.getElementById("terms").addEventListener("click", function () {
        updateContent("Read our Terms & Conditions here.");
    });

    document.getElementById("about").addEventListener("click", function () {
        updateContent("Learn more about us on the About Us page.");
    });
});

function updateContent(content) {
    document.getElementById("content").innerHTML = "<p>" + content + "</p>";
}
