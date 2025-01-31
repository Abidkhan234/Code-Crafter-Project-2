// For pre-loader

const preLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
    preLoader.style.display = "none";
    DirectingFunc()
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

cartOpenBtn.addEventListener("click", () => {
    cartList.classList.add("cart-list-open");
    removingItem();
})

cartCloseBtn.addEventListener("click", () => {
    cartList.classList.remove("cart-list-open");
})

// For cart open and close

// For cart item remove

const cartListItem = document.querySelectorAll(".item");

const removingItem = () => {

    cartListItem.forEach((value) => {
        const slectedItem = value.querySelector(".item-cancel i");

        slectedItem.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.parentElement.remove();
        })
    })

};

// For cart item remove

// For re-Directing func
const fromEle = document.getElementById("from");

const toEle = document.getElementById("to");

const DirectingFunc = () => {

    const reference = document.referrer;

    if (reference.includes("index.html")) {
        fromEle.innerText = "Home";
    } else if (reference.includes("shopPage.html")) {
        fromEle.innerText = "Shop";
    } else if (reference.includes("blogPage.html")) {
        fromEle.innerText = "Blog";
    }else if (reference.includes("cartPage.html")) {
        fromEle.innerText = "Cart";
    }else if (reference.includes("contactPage.html")) {
        fromEle.innerText = "Contact";
    }

}

// For re-Directing func