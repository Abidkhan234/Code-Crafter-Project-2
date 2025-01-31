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

// For pagination functionality

const products = [
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },



    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

];

const firstBtn = document.getElementById("1-btn");

const secondBtn = document.getElementById("2-btn");

const thirdBtn = document.getElementById("3-btn");

let firstValue = parseFloat(firstBtn.innerText);

let secondValue = parseFloat(secondBtn.innerText);

let thirdValue = parseFloat(thirdBtn.innerText);

const paginationFunction = (num) => {

    let totalItemPerPage = 16;

    let startIndex = (num - 1) * totalItemPerPage;

    let endIndex = num * totalItemPerPage;

    const productContent = document.querySelector(".product-section-content");

    productContent.innerHTML = "";

    products.slice(startIndex, endIndex).forEach((item) => {
        const prodectCard = document.createElement("div");
        prodectCard.classList.add("product-card");
        prodectCard.setAttribute("data-aos", "fade-up");

        prodectCard.innerHTML = `
        <div class="card-top">
                <img src="${item.image}" alt="...">
                <span class="bg-danger position-absolute text-white top-0 end-0 p-2">${item.dis}</span>
              </div>
              <div class="card-bottom p-3 d-flex gap-2 flex-column">
                <h5 class="fw-semibold">${item.title}</h5>
                <p>${item.subTitle}</p>
                <div class="d-flex gap-3">
                  <p style="font-size: large; font-weight: 600;" class="text-black fw-medium m-0 item-price">$ ${item.price}</p>
                  <s style="font-size: large; font-weight: 500;">${item.cutPrice}</s>
                </div>
              </div>
              <div class="card-overlay-content text-center d-flex flex-column gap-3 align-items-center">
                <button class="add-item">Add to cart</button>
                <div class="urls d-flex">
                  <i class="fas fa-share-nodes fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1 me-3">Share</a>
                  <i class="fas fa-arrow-right-arrow-left fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1 me-3">Compare</a>
                  <i class="fa-regular fa-heart fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1">Like</a>
                </div>
              </div>
              <div class="card-overlay"></div>
            </div>

        
        `;

        productContent.appendChild(prodectCard);

    });

}

firstBtn.addEventListener("click", () => paginationFunction(1));
secondBtn.addEventListener("click", () => paginationFunction(2));
thirdBtn.addEventListener("click", () => paginationFunction(3));


paginationFunction(1);

// For pagination functionality

// For active link functionnality

const paginationBtns = document.querySelectorAll(".pagination-btns button");

paginationBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        let checkedBtn = event.target;
        activeLink(checkedBtn);
    })
})

const activeLink = (btn) => {
    let btnChecked = btn.classList.contains("checked");

    if (btnChecked === false) {

        paginationBtns.forEach((button) => {
            button.classList.remove("checked");
        })

        btn.classList.add("checked");

    }
}

// For active link functionnality

// For Add to cart function

const addToCartBtns = document.querySelectorAll(".add-item");

addToCartBtns.forEach((buttton) => {
    buttton.addEventListener("click", (event) => {
        let productCard = event.target.closest(".product-card")
        addToCart(productCard);
    })
})

const addToCart = (event) => {

    const productTitle = event.querySelector(".card-bottom h5").innerText;

    const productPrice = event.querySelector(".card-bottom .item-price").innerText;

    const productImage = event.querySelector(".card-top img").src;

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

// For Add to cart function

// For item remove 

const removeItem = (item) => {

    let clickedItem = item.target.closest(".item");

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

const addItemBtn = document.querySelectorAll(".add-item");
let totalItem = 0;

addItemBtn.forEach((button) => {
    button.addEventListener("click", () => {
        cartTotalItemCount();
    })
});

const cartTotalItemCount = () => {

    const cartItemCountElement = document.getElementById("cart-item-count");

    const cartContent = document.querySelector(".cart-content");

    totalItem = cartContent.children.length;

    cartItemCountElement.innerText = totalItem;

}

// For cart item count


// For page re-directing func

const fromEle = document.getElementById("from");

const toEle = document.getElementById("to");

const DirectingFunc = () => {
    const reference = document.referrer;

    if (reference.includes("index.html")) {
        fromEle.innerText = "Home";
    } else if (reference.includes("contactPage.html")) {
        fromEle.innerText = "Contact";
    } else if (reference.includes("blogPage.html")) {
        fromEle.innerText = "Blog";
    } else if (reference.includes("cartPage.html")) {
        fromEle.innerText = "Cart";
    } else if (reference.includes("checkoutpage.html")) {
        fromEle.innerText = "Checkout";
    }

}


// For page re-directing func