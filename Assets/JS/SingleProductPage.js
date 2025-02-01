// For pre-loader

const preLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
    preLoader.style.display = "none";
    showingData();
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

// For retrieving Data 

const productContentData = JSON.parse(sessionStorage.getItem("productData")) || [];

const productNameHeading = document.querySelector(".product-name");

const HeroImage = document.getElementById("mainHeroImg");

const detailsHeading = document.querySelector(".detailsHeading");

const productPrice = document.querySelector(".price");

const showingData = () => {
    productContentData.forEach(v => {
        productNameHeading.innerText = v.title;
        detailsHeading.innerText = v.title;
        productPrice.innerText = v.price;
        HeroImage.src = v.imageSrc;
    });
}

// For retrieving Data 

// For Add to cart Functionalty

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    addToCart();
})

const addToCart = () => {

    const productTitle = detailsHeading.innerText;

    const productPrice = document.querySelector(".price").innerText;

    const productImage = HeroImage.src;

    const cartContent = document.querySelector(".cart-content");

    const cartItem = document.createElement("div");

    cartItem.classList.add("item");

    // For Duplicate Item Checking start

    const cartItemTitle = cartContent.querySelectorAll(".item-title");

    for (const itemTitle of cartItemTitle) {
        if (itemTitle.innerText === productTitle) {
            alert("This item already exist in cart.");
            return;
        }
    }

    const productContentObj = JSON.parse(sessionStorage.getItem("productContentObj")) || [];

    productContentObj.unshift({
        imageSrc: productImage,
        title: productTitle,
        price: productPrice
    });

    sessionStorage.setItem("productContentObj", JSON.stringify(productContentObj));

    // For Duplicate Item Checking end

    cartItem.innerHTML = `

                <div class="container-fluid overflow-hidden">
                    <div class="row">
                        <div class="col-sm-4 mb-3">
                            <div class="item-image">
                                <img src="${productImage}" alt="">
                            </div>
                        </div>

                        <div class="col-sm-8">

                            <div class="item-info d-flex gap-4 align-items-center h-100">

                                <div class="d-flex flex-column gap-3">
                                    <h4 class="item-title m-0 fw-semibold">${productTitle}</h4>
                                    <div class="item-quantity-info d-flex justify-content-between align-items-center">
                                        <input type="number" class="item-quantity" value="1">
                                        <p class="item-price m-0 fs-6 fw-medium">${productPrice}</p>
                                    </div>
                                </div>

                                <div>
                                    <i class="fas fa-xmark" onclick = "removeItem(event)"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

    `;

    cartContent.appendChild(cartItem);

    // For quantity change Total price

    cartItem.querySelector(".item-quantity").addEventListener("change", (event) => {
        let quantity = event.target;

        if (isNaN(quantity.value) || quantity.value <= 0) {
            quantity.value = 1;
        }

        totalPriceUpdate();
    })

    // For quantity change Total price


    totalPriceUpdate();

}


// For Add to cart Functionalty

// For item remove 

const removeItem = (item) => {

    let clickedItem = item.target.closest(".item");

    const productContentObj = JSON.parse(sessionStorage.getItem("productData")) || [];

    productContentObj.pop();

    sessionStorage.setItem("productData", JSON.stringify(productContentObj))

    clickedItem.remove();

    cartTotalItemCount();

    totalPriceUpdate();

}

// For item remove 

// For total Price update

const totalPriceUpdate = () => {

    const totalItem = document.querySelectorAll(".item");

    const totalPriceElement = document.getElementById("totalPrice");

    let total = 0;

    totalItem.forEach((item) => {
        const priceElement = item.querySelector(".item-price");
        const quantityElement = item.querySelector(".item-quantity");
        const price = parseFloat(priceElement.innerText.replace("$ ", ""));
        const quantity = quantityElement.value;

        total += price * quantity;
    })

    totalPriceElement.innerText = `$ ${total}`;

}


// For total Price update

// For cart item count

let totalItem = 0;

addBtn.addEventListener("click", () => {
    cartTotalItemCount();
})

const cartTotalItemCount = () => {

    const cartItemCountElement = document.getElementById("cart-item-count");

    const cartContent = document.querySelector(".cart-content");

    totalItem = cartContent.children.length;

    cartItemCountElement.innerText = totalItem;

}

// For cart item count
