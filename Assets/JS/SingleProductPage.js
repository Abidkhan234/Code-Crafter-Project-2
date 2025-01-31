// For pre-loader

const preLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
    preLoader.style.display = "none";
})

// For pre-loader

// For Navbar

const sideMenu = document.getElementById("side-nav-menu");

const navBar = document.getElementById("nav-bar");

const navCross = document.getElementById("nav-cross");

navBar.addEventListener("click", () => {
    sideMenu.classList.add("side-nav-menu-open");
});

navCross.addEventListener("click", () => {
    sideMenu.classList.remove("side-nav-menu-open");
});

// For Navbar

// For cart open and close

const cartOpenBtn = document.getElementById("cart-open-btn");

const cartCloseBtn = document.getElementById("cart-close-btn");

const cartList = document.querySelector(".cart-list");

const cartListOverlay = document.querySelector(".cart-list-overlay");

cartOpenBtn.addEventListener("click", () => {
    cartList.classList.add("cart-list-open");
    cartListOverlay.classList.add("cart-list-overlay-show");
})

cartCloseBtn.addEventListener("click", () => {
    cartList.classList.remove("cart-list-open");
    cartListOverlay.classList.remove("cart-list-overlay-show");
})

// For cart open and close


// Description code starts

function showDescription() {
    // Hide the other paragraphs
    document.getElementById("additionalInformationContent").style.display = "none";

    // Show the description content
    document.getElementById("descriptionContent").style.display = "block";

    document.getElementById("reviewContent").style.display = "none";

    document.getElementById("heading1").style.color = "black";

    document.getElementById("heading2").style.color = "#9F9F9F";

    document.getElementById("heading3").style.color = "#9F9F9F";




}

function showAdditionalInformation() {
    // Hide the other paragraphs
    document.getElementById("descriptionContent").style.display = "none";

    // Show the additional information content
    document.getElementById("additionalInformationContent").style.display = "block";

    document.getElementById("reviewContent").style.display = "none";

    document.getElementById("heading1").style.color = "#9F9F9F";

    document.getElementById("heading2").style.color = "black";

    document.getElementById("heading3").style.color = "#9F9F9F";


}

function review() {
    // Hide the other paragraphs
    document.getElementById("descriptionContent").style.display = "none";

    // Show the additional information content
    document.getElementById("additionalInformationContent").style.display = "none";

    document.getElementById("reviewContent").style.display = "block";

    document.getElementById("heading1").style.color = "#9F9F9F";

    document.getElementById("heading2").style.color = "#9F9F9F";

    document.getElementById("heading3").style.color = "black";


}