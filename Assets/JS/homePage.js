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

// For Storing data

const addToCartBtns = document.querySelectorAll(".add-item");

addToCartBtns.forEach((buttton) => {
    buttton.addEventListener("click", (event) => {
        let productCard = event.target.closest(".product-card")
        productData(productCard);
    })
})

const productData = (event) => {

    const productTitle = event.querySelector(".card-bottom h5").innerText;
    const productPrice = event.querySelector(".card-bottom p").innerText;
    const productImage = event.querySelector(".card-top img").src;

    const productDataObj = JSON.parse(sessionStorage.getItem("productData")) || [];

    productDataObj.unshift({
        imageSrc: `${productImage}`,
        title: `${productTitle}`,
        price: `${productPrice}`
    })

    sessionStorage.setItem("productData", JSON.stringify(productDataObj));

}

// For Storing data

// For Product Section

const productsRowTwo = document.querySelector(".product-section-content-row-2");

const productBtn = document.getElementById("showMoreProductBtn");

productBtn.addEventListener("click", () => {
    if (productsRowTwo.classList.contains("product-section-content-row-2-open")) {
        productsRowTwo.classList.remove("product-section-content-row-2-open");
        productBtn.innerText = "Show More";
    } else {
        productsRowTwo.classList.add("product-section-content-row-2-open");
        productBtn.innerText = "Show Less";
    }
});

// For Product Section

// For Insperation-section 

// Ins-section-slider

const insImage = document.getElementById("ins-image");

const insNext = document.getElementById("ins-next");

const insPre = document.getElementById("ins-pre");

let images = [
    "Assets/Images/home/insperation-section/image-1.png",
    "Assets/Images/home/insperation-section/image-2.png",
    "Assets/Images/home/insperation-section/image-3.png"
];

let imageCounter = 0;

insNext.addEventListener("click", () => {
    imageCounter++;


    if (imageCounter >= images.length) {
        imageCounter = 0;
    }


    insImage.src = images[imageCounter];
});


insPre.addEventListener("click", () => {

    if (imageCounter <= 0) {
        imageCounter = images.length;
    }

    imageCounter--;


    insImage.src = images[imageCounter];
});

// Ins-section-slider

// For Insperation-section 