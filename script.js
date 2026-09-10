/* =====================================================
   MEDWEAR
   Boutique vêtements médicaux
   ===================================================== */


/* ================= CONFIGURATION ================= */

/*
   IMPORTANT :
   Remplace ce numéro par le vrai numéro WhatsApp.

   Format :
   Maroc = 212 + numéro sans le 0

   Exemple :
   0612345678

   devient :

   212612345678
*/

const WHATSAPP_NUMBER = "212600000000";


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Scrub Essential",
        category: "Pyjamas médicaux",
        price: 349,
        badge: "BEST-SELLER",
        description: "Pyjama médical moderne, confortable et respirant.",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
        colors: ["#e9eeee", "#172f2d", "#dcece8"]
    },

    {
        id: 2,
        name: "Scrub Premium",
        category: "Pyjamas médicaux",
        price: 429,
        badge: "NOUVEAU",
        description: "Coupe premium pensée pour les longues journées.",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=85",
        colors: ["#f4f4f1", "#9abbb6", "#263e3d"]
    },

    {
        id: 3,
        name: "Blouse Classic",
        category: "Blouses",
        price: 249,
        badge: "",
        description: "Blouse blanche classique, légère et élégante.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
        colors: ["#ffffff"]
    },

    {
        id: 4,
        name: "Blouse Premium",
        category: "Blouses",
        price: 299,
        badge: "NOUVEAU",
        description: "Blouse professionnelle avec coupe moderne.",
        image: "https://images.unsplash.com/photo-1580281657527-47f249e8f3b5?auto=format&fit=crop&w=900&q=85",
        colors: ["#ffffff", "#edf4f2"]
    },

    {
        id: 5,
        name: "Combinaison Pro",
        category: "Combinaisons",
        price: 399,
        badge: "",
        description: "Combinaison professionnelle pratique et résistante.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
        colors: ["#e9efed", "#263f3d"]
    },

    {
        id: 6,
        name: "Polaire Soft",
        category: "Polaires",
        price: 299,
        badge: "POPULAIRE",
        description: "Polaire douce pour rester au chaud au travail.",
        image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=900&q=85",
        colors: ["#eff3f1", "#243b3a"]
    },

    {
        id: 7,
        name: "Polaire Medical",
        category: "Polaires",
        price: 349,
        badge: "",
        description: "Polaire légère et chaude pour les journées fraîches.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        colors: ["#ffffff", "#cadbd8"]
    },

    {
        id: 8,
        name: "Gants Medical",
        category: "Gants",
        price: 79,
        badge: "ESSENTIEL",
        description: "Gants médicaux adaptés à un usage professionnel.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
        colors: ["#e7f3ef", "#ffffff"]
    }

];


/* ================= VARIABLES ================= */

let cart = [];

let currentProduct = null;

let modalQuantity = 1;

let selectedSize = "M";

let selectedColor = "";


/* ================= DOM ================= */

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const productSearch =
    document.getElementById("productSearch");

const filters =
    document.querySelectorAll(".filter");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartFooter =
    document.getElementById("cartFooter");

const cartTotal =
    document.getElementById("cartTotal");

const overlay =
    document.getElementById("overlay");

const productModal =
    document.getElementById("productModal");

const toast =
    document.getElementById("toast");


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 700);

});


/* ================= NAVBAR ================= */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");

mobileMenu.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

    const icon =
        mobileMenu.querySelector("i");

    if (mobileNav.classList.contains("open")) {

        icon.className = "fa-solid fa-xmark";

    } else {

        icon.className = "fa-solid fa-bars";

    }

});


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            mobileMenu
                .querySelector("i")
                .className = "fa-solid fa-bars";

        });

    });


/* ================= RENDER PRODUCTS ================= */

function renderProducts(list = products) {

    productsGrid.innerHTML = "";

    if (!list.length) {

        emptyProducts.style.display = "block";

        return;

    }

    emptyProducts.style.display = "none";


    list.forEach((product, index) => {

        const card =
            document.createElement("article");

        card.className =
            "product-card reveal";

        card.style.transitionDelay =
            `${index * 60}ms`;


        const colors = product.colors
            .map(color =>
                `<span class="color-dot"
                       style="background:${color}">
                 </span>`
            )
            .join("");


        card.innerHTML = `

            <div class="product-image">

                ${product.badge
                    ? `<span class="product-badge">
                        ${product.badge}
                       </span>`
                    : ""
                }

                <button
                    class="product-favorite"
                    aria-label="Ajouter aux favoris">

                    <i class="fa-regular fa-heart"></i>

                </button>


                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy">

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="color-dots">
                    ${colors}
                </div>


                <div class="product-bottom">

                    <strong class="product-price">
                        ${product.price} DH
                    </strong>

                    <button
                        class="add-product"
                        data-id="${product.id}"
                        aria-label="Ajouter au panier">

                        <i class="fa-solid fa-plus"></i>

                    </button>

                </div>

            </div>
        `;


        /* ouvrir produit */

        card
            .querySelector(".product-image")
            .addEventListener("click", () => {

                openProduct(product.id);

            });


        /* empêcher favori d'ouvrir modal */

        card
            .querySelector(".product-favorite")
            .addEventListener("click", event => {

                event.stopPropagation();

                const icon =
                    event.currentTarget.querySelector("i");

                icon.classList.toggle("fa-regular");

                icon.classList.toggle("fa-solid");

            });


        /* ajouter panier */

        card
            .querySelector(".add-product")
            .addEventListener("click", event => {

                event.stopPropagation();

                openProduct(product.id);

            });


        productsGrid.appendChild(card);

    });


    setTimeout(() => {

        observeReveals();

    }, 20);

}


renderProducts();


/* ================= FILTERS ================= */

let activeFilter = "all";


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item =>
            item.classList.remove("active")
        );

        filter.classList.add("active");

        activeFilter =
            filter.dataset.filter;

        applyFilters();

    });

});


/* ================= SEARCH ================= */

productSearch.addEventListener("input", () => {

    applyFilters();

});


function applyFilters() {

    const search =
        productSearch.value
            .toLowerCase()
            .trim();


    let filtered = products.filter(product => {

        const categoryMatch =
            activeFilter === "all" ||
            product.category === activeFilter;


        const searchMatch =
            product.name
                .toLowerCase()
                .includes(search) ||

            product.category
                .toLowerCase()
                .includes(search) ||

            product.description
                .toLowerCase()
                .includes(search);


        return categoryMatch && searchMatch;

    });


    renderProducts(filtered);

}


/* ================= CATEGORY CARDS ================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            const category =
                card.dataset.category;


            filters.forEach(filter => {

                filter.classList.remove("active");

                if (
                    filter.dataset.filter === category
                ) {

                    filter.classList.add("active");

                }

            });


            activeFilter = category;

            applyFilters();

            document
                .getElementById("shop")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


/* ================= SHOW ALL ================= */

document
    .getElementById("showAll")
    .addEventListener("click", () => {

        activeFilter = "all";

        productSearch.value = "";

        filters.forEach(filter =>
            filter.classList.remove("active")
        );

        document
            .querySelector('[data-filter="all"]')
            .classList.add("active");

        renderProducts();

    });


/* ================= PRODUCT MODAL ================= */

function openProduct(id) {

    currentProduct =
        products.find(product => product.id === id);

    if (!currentProduct) return;


    modalQuantity = 1;

    selectedSize = "M";

    selectedColor =
        currentProduct.colors[0];


    document
        .getElementById("modalImage")
        .src = currentProduct.image;


    document
        .getElementById("modalName")
        .textContent = currentProduct.name;


    document
        .getElementById("modalCategory")
        .textContent = currentProduct.category;


    document
        .getElementById("modalPrice")
        .textContent =
        `${currentProduct.price} DH`;


    document
        .getElementById("modalDescription")
        .textContent =
        currentProduct.description;


    document
        .getElementById("modalQty")
        .textContent = modalQuantity;


    renderColors();

    setupSizes();


    productModal.classList.add("open");

    document.body.classList.add("no-scroll");

}


function closeProductModal() {

    productModal.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


document
    .getElementById("closeModal")
    .addEventListener("click", closeProductModal);


productModal.addEventListener("click", event => {

    if (event.target === productModal) {

        closeProductModal();

    }

});


/* ================= SIZES ================= */

function setupSizes() {

    const sizeOptions =
        document.getElementById("sizeOptions");


    sizeOptions
        .querySelectorAll("button")
        .forEach(button => {

            button.classList.toggle(
                "selected",
                button.textContent === selectedSize
            );


            button.onclick = () => {

                sizeOptions
                    .querySelectorAll("button")
                    .forEach(item =>
                        item.classList.remove("selected")
                    );


                button.classList.add("selected");

                selectedSize =
                    button.textContent;

            };

        });

}


/* ================= COLORS ================= */

function renderColors() {

    const container =
        document.getElementById("colorOptions");


    container.innerHTML = "";


    currentProduct.colors.forEach((color, index) => {

        const button =
            document.createElement("button");


        button.className =
            "color-choice";


        if (index === 0) {

            button.classList.add("selected");

        }


        button.style.background = color;


        button.addEventListener("click", () => {

            container
                .querySelectorAll(".color-choice")
                .forEach(item =>
                    item.classList.remove("selected")
                );


            button.classList.add("selected");

            selectedColor = color;

        });


        container.appendChild(button);

    });

}


/* ================= MODAL QUANTITY ================= */

document
    .getElementById("minusQty")
    .addEventListener("click", () => {

        if (modalQuantity > 1) {

            modalQuantity--;

            document
                .getElementById("modalQty")
                .textContent = modalQuantity;

        }

    });


document
    .getElementById("plusQty")
    .addEventListener("click", () => {

        if (modalQuantity < 20) {

            modalQuantity++;

            document
                .getElementById("modalQty")
                .textContent = modalQuantity;

        }

    });


/* ================= ADD TO CART ================= */

document
    .getElementById("modalAdd")
    .addEventListener("click", () => {

        addToCart(
            currentProduct,
            selectedSize,
            selectedColor,
            modalQuantity
        );

        closeProductModal();

    });


function addToCart(product, size, color, quantity) {

    const existing =
        cart.find(item =>
            item.id === product.id &&
            item.size === size &&
            item.color === color
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            size: size,

            color: color,

            quantity: quantity

        });

    }


    updateCart();

    showToast(
        "Produit ajouté",
        `${product.name} est dans votre panier.`
    );

}


/* ================= CART ================= */

function updateCart() {

    const totalQuantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    cartTotal.textContent =
        `${total} DH`;


    renderCart();


    if (cart.length === 0) {

        cartEmpty.style.display = "flex";

        cartFooter.style.display = "none";

    } else {

        cartEmpty.style.display = "none";

        cartFooter.style.display = "block";

    }

}


function renderCart() {

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const element =
            document.createElement("div");


        element.className = "cart-item";


        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}">

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    Taille : ${item.size}
                </p>

                <p>
                    Quantité : ${item.quantity}
                </p>

                <div class="cart-item-price">
                    ${item.price * item.quantity} DH
                </div>


                <div class="cart-quantity">

                    <button
                        data-action="minus"
                        data-index="${index}">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="plus"
                        data-index="${index}">
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-cart"
                data-index="${index}">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(element);

    });


    cartItems
        .querySelectorAll(".remove-cart")
        .forEach(button => {

            button.addEventListener("click", () => {

                cart.splice(
                    Number(button.dataset.index),
                    1
                );

                updateCart();

            });

        });


    cartItems
        .querySelectorAll(".cart-quantity button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);


                if (
                    button.dataset.action === "plus"
                ) {

                    cart[index].quantity++;

                } else if (
                    cart[index].quantity > 1
                ) {

                    cart[index].quantity--;

                }


                updateCart();

            });

        });

}


/* ================= OPEN CART ================= */

function openCart() {

    cartDrawer.classList.add("open");

    overlay.classList.add("open");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    cartDrawer.classList.remove("open");

    overlay.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


document
    .getElementById("openCart")
    .addEventListener("click", openCart);


document
    .getElementById("closeCart")
    .addEventListener("click", closeCart);


overlay.addEventListener("click", closeCart);


document
    .getElementById("continueShopping")
    .addEventListener("click", closeCart);


/* ================= WHATSAPP ORDER ================= */

document
    .getElementById("whatsappOrder")
    .addEventListener("click", () => {

        if (!cart.length) return;


        let message =
            "Bonjour, je souhaite passer une commande :%0A%0A";


        cart.forEach((item, index) => {

            message +=
                `${index + 1}. ${item.name}%0A`;

            message +=
                `Taille : ${item.size}%0A`;

            message +=
                `Quantité : ${item.quantity}%0A`;

            message +=
                `Prix : ${item.price * item.quantity} DH%0A%0A`;

        });


        const total =
            cart.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );


        message +=
            `TOTAL : ${total} DH%0A%0A`;

        message +=
            "Merci de me confirmer la disponibilité et la livraison.";


        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


        window.open(url, "_blank");

    });


/* ================= CONTACT WHATSAPP ================= */

function openWhatsApp(message = "") {

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


document
    .getElementById("contactWhatsApp")
    .addEventListener("click", event => {

        event.preventDefault();

        openWhatsApp(
            "Bonjour, j'aimerais avoir plus d'informations sur vos produits médicaux."
        );

    });


document
    .getElementById("footerWhatsapp")
    .addEventListener("click", event => {

        event.preventDefault();

        openWhatsApp(
            "Bonjour, je souhaite avoir des informations sur votre boutique."
        );

    });


/* ================= SEARCH OVERLAY ================= */

const searchOverlay =
    document.getElementById("searchOverlay");

const bigSearch =
    document.getElementById("bigSearch");


document
    .getElementById("openSearch")
    .addEventListener("click", () => {

        searchOverlay.classList.add("open");

        document.body.classList.add("no-scroll");

        setTimeout(() => {

            bigSearch.focus();

        }, 300);

    });


document
    .getElementById("closeSearch")
    .addEventListener("click", closeSearch);


function closeSearch() {

    searchOverlay.classList.remove("open");

    document.body.classList.remove("no-scroll");

}


bigSearch.addEventListener("input", () => {

    productSearch.value =
        bigSearch.value;

    applyFilters();

});


bigSearch.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        closeSearch();

        document
            .getElementById("shop")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

});


/* ================= TOAST ================= */

let toastTimeout;


function showToast(title, message) {

    document
        .getElementById("toastTitle")
        .textContent = title;


    document
        .getElementById("toastMessage")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


/* ================= SCROLL REVEAL ================= */

let revealObserver;


function observeReveals() {

    if (revealObserver) {

        revealObserver.disconnect();

    }


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            if (
                !element.classList.contains("visible")
            ) {

                revealObserver.observe(element);

            }

        });

}


observeReveals();


/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProductModal();

        closeCart();

        closeSearch();

    }

});


/* ================= INITIAL CART ================= */

updateCart();
