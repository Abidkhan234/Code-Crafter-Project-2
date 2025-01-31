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

// For pagination functionality

const posts = [
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-1.png",
        postDesTitle: "Going all-in with millennial design",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-2.png",
        postDesTitle: "Exploring new ways of decorating",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-3.png",
        postDesTitle: "Handmade pieces that took time to make",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-2.png",
        postDesTitle: "Exploring new ways of decorating",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-3.png",
        postDesTitle: "Handmade pieces that took time to make",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-1.png",
        postDesTitle: "Going all-in with millennial design",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-3.png",
        postDesTitle: "Handmade pieces that took time to make",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-1.png",
        postDesTitle: "Going all-in with millennial design",
    },
    {
        postImage: "../Assets/Images/blog/post-section/post-sec-image-2.png",
        postDesTitle: "Exploring new ways of decorating",
    }
];


const paginationFunc = (num) => {

    let totalPostPerPage = 3;

    let startIndex = (num - 1) * totalPostPerPage;

    let endIndex = num * totalPostPerPage;

    const postSection = document.querySelector(".post-content-contianer");

    postSection.innerHTML = "";

    posts.slice(startIndex, endIndex).forEach((post) => {

        const postSectionContent = document.createElement("div");

        postSectionContent.classList.add("post-container");
        postSectionContent.setAttribute("data-aos", "fade-up");

        postSectionContent.innerHTML += `

                            <div class="post-image d-flex flex-column">

                                <img src="${post.postImage}" alt="..."
                                    class="mw-100 h-auto">

                                <div class="image-post-info d-flex flex-wrap gap-4 mt-2">
                                    <div class="d-flex gap-2 align-items-center">
                                        <i class="fas fa-user fs-5"></i>
                                        <p class="m-0 fw-medium fs-5">Admin</p>
                                    </div>
                                    <div class="d-flex gap-2 align-items-center">
                                        <i class="fas fa-calendar fs-5"></i>
                                        <p class="m-0 fw-medium fs-5">14 Oct 2024</p>
                                    </div>
                                    <div class="d-flex gap-2 align-items-center">
                                        <i class="fas fa-tag fs-5"></i>
                                        <p class="m-0 fw-medium fs-5">Wood</p>
                                    </div>
                                </div>

                                <div class="image-description mt-4 d-flex flex-column gap-3">

                                    <h2 class="m-0">${post.postDesTitle}</h2>
                                    <p class="m-0 fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do.</p>

                                    <div class="image-description-btn">
                                        <button>Read More</button>
                                    </div>

                                </div>

                            </div>
 
        `;
        postSection.appendChild(postSectionContent);
    });

}

const firstBtn = document.getElementById("1-btn");

const secondBtn = document.getElementById("2-btn");

const thirdBtn = document.getElementById("3-btn");

let firstValue = parseFloat(firstBtn.innerText);

let secondValue = parseFloat(secondBtn.innerText);

let thirdValue = parseFloat(thirdBtn.innerText);

firstBtn.addEventListener("click", () => paginationFunc(1));
secondBtn.addEventListener("click", () => paginationFunc(2));
thirdBtn.addEventListener("click", () => paginationFunc(3));

paginationFunc(1);

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

// For re-Directing func

const fromEle = document.getElementById("from");

const toEle = document.getElementById("to");

const DirectingFunc = () => {
    const reference = document.referrer;

    if (reference.includes("index.html")) {
        fromEle.innerText = "Home";
    } else if (reference.includes("shopPage.html")) {
        fromEle.innerText = "Shop";
    } else if (reference.includes("contactPage.html")) {
        fromEle.innerText = "Contact";
    } else if (reference.includes("checkoutpage.html")) {
        fromEle.innerText = "Checkout";
    } else if (reference.includes("cartPage.html")) {
        fromEle.innerText = "Cart";
    }   

}

// For re-Directing func