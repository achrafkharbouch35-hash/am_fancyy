/* ============================================================
   SOINS & STYLE — script.js
   Modifier le numéro WhatsApp dans la constante WHATSAPP_NUMBER
   Modifier les produits dans le tableau PRODUCTS
   ============================================================ */

/* ---------- CONFIGURATION ---------- */
// Format international sans "+" ni espaces (ex: 212600000000)
const WHATSAPP_NUMBER = "212600000000";

/* ---------- CATALOGUE PRODUITS ---------- */
// Pour ajouter un produit : copier un objet et modifier ses valeurs.
const PRODUCTS = [
  {
    id: "p1",
    name: "Pyjama Médical Essential",
    category: "pyjamas",
    categoryLabel: "Pyjama médical",
    price: 249,
    badge: "populaire",
    description: "Ensemble deux pièces en tissu doux et respirant, coupe droite confortable pour un usage quotidien intensif.",
    colors: [
      { name: "Bleu ciel", hex: "#A7C2D1" },
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Vert sauge", hex: "#8AA88F" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p2",
    name: "Pyjama Médical Premium",
    category: "pyjamas",
    categoryLabel: "Pyjama médical",
    price: 329,
    badge: "nouveau",
    description: "Version premium avec tissu extensible 4 sens, poches renforcées et finitions haut de gamme.",
    colors: [
      { name: "Marine", hex: "#3B4C5A" },
      { name: "Bordeaux", hex: "#7B3B44" },
      { name: "Beige", hex: "#D8CBB4" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p3",
    name: "Blouse Médicale Classic",
    category: "blouses",
    categoryLabel: "Blouse médicale",
    price: 189,
    badge: "",
    description: "Blouse intemporelle à manches longues, col officier et fermeture pressions pour une allure nette.",
    colors: [
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Bleu ciel", hex: "#A7C2D1" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p4",
    name: "Blouse Médicale Premium",
    category: "blouses",
    categoryLabel: "Blouse médicale",
    price: 259,
    badge: "promo",
    description: "Blouse premium en tissu anti-tache, coupe cintrée et doublure intérieure pour plus de confort.",
    colors: [
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Vert sauge", hex: "#8AA88F" },
      { name: "Marine", hex: "#3B4C5A" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p5",
    name: "Tenue de Travail Comfort",
    category: "travail",
    categoryLabel: "Vêtement de travail",
    price: 279,
    badge: "",
    description: "Ensemble robuste et respirant conçu pour les métiers exigeants, avec poches multiples renforcées.",
    colors: [
      { name: "Gris", hex: "#8B8D87" },
      { name: "Marine", hex: "#3B4C5A" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p6",
    name: "Ensemble Médical Élégance",
    category: "pyjamas",
    categoryLabel: "Pyjama médical",
    price: 349,
    badge: "nouveau",
    description: "Ensemble raffiné à la coupe ajustée, idéal pour allier professionnalisme et élégance au quotidien.",
    colors: [
      { name: "Rose poudré", hex: "#D9BFC0" },
      { name: "Vert sauge", hex: "#8AA88F" },
      { name: "Blanc", hex: "#FFFFFF" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p7",
    name: "Sac à Dos Professionnel",
    category: "accessoires",
    categoryLabel: "Accessoire",
    price: 219,
    badge: "",
    description: "Sac à dos compact avec compartiments dédiés, pensé pour les déplacements professionnels quotidiens.",
    colors: [
      { name: "Noir", hex: "#2B2F2C" },
      { name: "Beige", hex: "#D8CBB4" }
    ],
    sizes: ["Unique"],
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p8",
    name: "Blouse Médicale Manches Courtes",
    category: "blouses",
    categoryLabel: "Blouse médicale",
    price: 169,
    badge: "promo",
    description: "Blouse légère à manches courtes, idéale pour les environnements chauds ou les longues gardes.",
    colors: [
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Bleu ciel", hex: "#A7C2D1" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p9",
    name: "Veste de Travail Renforcée",
    category: "travail",
    categoryLabel: "Vêtement de travail",
    price: 389,
    badge: "",
    description: "Veste résistante aux coutures renforcées, conçue pour un usage intensif sur le terrain.",
    colors: [
      { name: "Gris", hex: "#8B8D87" },
      { name: "Noir", hex: "#2B2F2C" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const BADGE_LABELS = { nouveau: "Nouveau", populaire: "Populaire", promo: "Promo" };

/* ---------- ÉTAT ---------- */
let currentFilter = "tous";
let currentSearch = "";
let currentSort = "default";
let cart = []; // { id, name, price, image, color, size, qty }
let activeProduct = null;
let activeColor = null;
let activeSize = null;
let activeQty = 1;
let activeImageIndex = 0;

/* ---------- UTILITAIRES ---------- */
function buildWhatsappLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatDH(n){
  return `${n} DH`;
}

/* ---------- PRELOADER ---------- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => preloader.classList.add("is-hidden"), 500);
});

/* ---------- NAVBAR : scroll + menu mobile ---------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 30);
});

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-menu-open");
  hamburger.classList.toggle("is-open", isOpen);
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-menu-open");
    hamburger.classList.remove("is-open");
  });
});

/* Liens de catégorie (navbar + footer) déclenchent le filtre produit */
document.querySelectorAll("[data-filter-link]").forEach(el => {
  el.addEventListener("click", (e) => {
    const filter = el.getAttribute("data-filter-link");
    currentFilter = filter;
    renderProducts();
    updateActiveChip();
  });
});

/* ---------- ANIMATIONS AU SCROLL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveal(){
  document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));
}

/* Hero : déclenchement immédiat */
window.requestAnimationFrame(() => {
  document.querySelectorAll(".hero-copy, .hero-visual").forEach(el => {
    setTimeout(() => el.classList.add("is-visible"), 150);
  });
});

/* ---------- COMPTEUR ANIMÉ ---------- */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

function animateCounter(el){
  const target = parseInt(el.getAttribute("data-count"), 10);
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll(".hero-stat-num").forEach(el => counterObserver.observe(el));

/* ---------- RENDU PRODUITS ---------- */
const productsGrid = document.getElementById("productsGrid");
const productsEmpty = document.getElementById("productsEmpty");

function getFilteredProducts(){
  let list = PRODUCTS.filter(p => currentFilter === "tous" || p.category === currentFilter);
  if (currentSearch.trim()){
    const q = currentSearch.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q));
  }
  if (currentSort === "asc") list = [...list].sort((a,b) => a.price - b.price);
  if (currentSort === "desc") list = [...list].sort((a,b) => b.price - a.price);
  return list;
}

function renderProducts(){
  const list = getFilteredProducts();
  productsGrid.innerHTML = "";
  productsEmpty.hidden = list.length !== 0;

  list.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = `${Math.min(i,6) * 0.06}s`;

    const badgeHtml = p.badge
      ? `<span class="product-badge badge-${p.badge}">${BADGE_LABELS[p.badge]}</span>`
      : "";

    const swatches = p.colors.slice(0,4).map(c =>
      `<span class="swatch" style="background:${c.hex}" title="${c.name}"></span>`
    ).join("");

    card.innerHTML = `
      <div class="product-media">
        ${badgeHtml}
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <p class="product-cat">${p.categoryLabel}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-swatches">${swatches}</div>
        <div class="product-price-row">
          <span class="product-price">${formatDH(p.price)}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline js-view-product" data-id="${p.id}">Voir le produit</button>
          <button class="btn btn-whatsapp js-quick-whatsapp" data-id="${p.id}">WhatsApp</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  productsGrid.querySelectorAll(".js-view-product").forEach(btn => {
    btn.addEventListener("click", () => openProductModal(btn.getAttribute("data-id")));
  });
  productsGrid.querySelectorAll(".js-quick-whatsapp").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = PRODUCTS.find(x => x.id === btn.getAttribute("data-id"));
      const msg = `Bonjour, je souhaite commander :\n\nProduit : ${p.name}\nPrix : ${formatDH(p.price)}\n\nMerci.`;
      window.open(buildWhatsappLink(msg), "_blank");
    });
  });
}

/* ---------- FILTRES / RECHERCHE / TRI ---------- */
const filterChips = document.getElementById("filterChips");
function updateActiveChip(){
  filterChips.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("is-active", chip.getAttribute("data-filter") === currentFilter);
  });
}
filterChips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  currentFilter = chip.getAttribute("data-filter");
  updateActiveChip();
  renderProducts();
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

/* ---------- FICHE PRODUIT (MODAL) ---------- */
const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");

function openProductModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeProduct = p;
  activeColor = p.colors[0].name;
  activeSize = p.sizes[0];
  activeQty = 1;
  activeImageIndex = 0;

  document.getElementById("modalBadge").textContent = p.badge ? BADGE_LABELS[p.badge] : p.categoryLabel;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalCategory").textContent = p.categoryLabel;
  document.getElementById("modalPrice").textContent = formatDH(p.price);
  document.getElementById("modalDesc").textContent = p.description;
  document.getElementById("qtyValue").textContent = activeQty;

  setModalImage(0);
  const thumbs = document.getElementById("modalThumbs");
  thumbs.innerHTML = p.images.map((img, i) =>
    `<img src="${img}" data-i="${i}" class="${i===0 ? 'is-active':''}" alt="Aperçu ${i+1}">`
  ).join("");
  thumbs.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => setModalImage(parseInt(img.getAttribute("data-i"),10)));
  });

  const colorsWrap = document.getElementById("modalColors");
  colorsWrap.innerHTML = p.colors.map(c =>
    `<button class="pill color-pill ${c.name===activeColor?'is-active':''}" style="background:${c.hex}" data-color="${c.name}" title="${c.name}"></button>`
  ).join("");
  colorsWrap.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeColor = btn.getAttribute("data-color");
      colorsWrap.querySelectorAll(".pill").forEach(b => b.classList.toggle("is-active", b === btn));
    });
  });

  const sizesWrap = document.getElementById("modalSizes");
  sizesWrap.innerHTML = p.sizes.map(s =>
    `<button class="pill ${s===activeSize?'is-active':''}" data-size="${s}">${s}</button>`
  ).join("");
  sizesWrap.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSize = btn.getAttribute("data-size");
      sizesWrap.querySelectorAll(".pill").forEach(b => b.classList.toggle("is-active", b === btn));
    });
  });

  productModal.classList.add("is-open");
  modalOverlay.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function setModalImage(i){
  activeImageIndex = i;
  document.getElementById("modalMainImg").src = activeProduct.images[i];
  document.querySelectorAll(".modal-thumbs img").forEach((img, idx) => {
    img.classList.toggle("is-active", idx === i);
  });
}

function closeProductModal(){
  productModal.classList.remove("is-open");
  modalOverlay.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeProductModal);
modalOverlay.addEventListener("click", closeProductModal);

document.getElementById("qtyMinus").addEventListener("click", () => {
  activeQty = Math.max(1, activeQty - 1);
  document.getElementById("qtyValue").textContent = activeQty;
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  activeQty += 1;
  document.getElementById("qtyValue").textContent = activeQty;
});

document.getElementById("addToCartBtn").addEventListener("click", () => {
  addToCart(activeProduct, activeColor, activeSize, activeQty);
  closeProductModal();
  openCart();
});

document.getElementById("modalWhatsappBtn").addEventListener("click", () => {
  const p = activeProduct;
  const msg = `Bonjour, je souhaite commander :\n\nProduit : ${p.name}\nTaille : ${activeSize}\nCouleur : ${activeColor}\nQuantité : ${activeQty}\nPrix : ${formatDH(p.price * activeQty)}\n\nMerci.`;
  window.open(buildWhatsappLink(msg), "_blank");
});

/* ---------- PANIER ---------- */
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");

function addToCart(product, color, size, qty){
  const existing = cart.find(i => i.id === product.id && i.color === color && i.size === size);
  if (existing){
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color, size, qty
    });
  }
  renderCart();
}

function renderCart(){
  cartItemsEl.innerHTML = "";
  cartEmptyEl.style.display = cart.length === 0 ? "block" : "none";

  let total = 0;
  let count = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    count += item.qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">${item.color} · ${item.size}</p>
        <div class="cart-item-row">
          <div class="cart-item-qty">
            <button data-action="minus" data-idx="${idx}">−</button>
            <span>${item.qty}</span>
            <button data-action="plus" data-idx="${idx}">+</button>
          </div>
          <button class="cart-item-remove" data-action="remove" data-idx="${idx}">Retirer</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  cartItemsEl.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      const action = btn.getAttribute("data-action");
      if (action === "plus") cart[idx].qty += 1;
      if (action === "minus") cart[idx].qty = Math.max(1, cart[idx].qty - 1);
      if (action === "remove") cart.splice(idx, 1);
      renderCart();
    });
  });

  cartTotalEl.textContent = formatDH(total);
  cartCountEl.textContent = count;
}

function openCart(){
  cartDrawer.classList.add("is-open");
  cartOverlay.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCart(){
  cartDrawer.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.getElementById("cartWhatsappBtn").addEventListener("click", () => {
  if (cart.length === 0){
    window.open(buildWhatsappLink("Bonjour, je souhaite avoir des renseignements sur vos produits."), "_blank");
    return;
  }
  let message = "Bonjour, je souhaite commander :\n";
  let total = 0;
  cart.forEach(item => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    message += `\nProduit : ${item.name}\nTaille : ${item.size}\nCouleur : ${item.color}\nQuantité : ${item.qty}\nPrix : ${formatDH(lineTotal)}\n`;
  });
  message += `\nTotal : ${formatDH(total)}\n\nMerci.`;
  window.open(buildWhatsappLink(message), "_blank");
});

/* ---------- BOUTONS WHATSAPP GÉNÉRIQUES ---------- */
function setGenericWhatsappLinks(){
  const genericMsg = "Bonjour, je souhaite avoir des renseignements sur vos produits.";
  const link = buildWhatsappLink(genericMsg);
  document.getElementById("navWhatsapp").href = link;
  document.getElementById("footerWhatsapp").href = link;
  document.querySelectorAll(".js-whatsapp-generic").forEach(el => el.href = link);
}

/* ---------- TÉMOIGNAGES (SLIDER) ---------- */
const testimonials = document.querySelectorAll(".testimonial");
const dotsWrap = document.getElementById("testimonialDots");
let testimonialIndex = 0;
let testimonialTimer = null;

function renderDots(){
  dotsWrap.innerHTML = "";
  testimonials.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === testimonialIndex) dot.classList.add("is-active");
    dot.addEventListener("click", () => showTestimonial(i));
    dotsWrap.appendChild(dot);
  });
}

function showTestimonial(i){
  testimonials[testimonialIndex].classList.remove("is-active");
  testimonialIndex = (i + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex].classList.add("is-active");
  [...dotsWrap.children].forEach((dot, idx) => dot.classList.toggle("is-active", idx === testimonialIndex));
  resetAutoplay();
}

function resetAutoplay(){
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => showTestimonial(testimonialIndex + 1), 6000);
}

document.getElementById("prevTestimonial").addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.getElementById("nextTestimonial").addEventListener("click", () => showTestimonial(testimonialIndex + 1));

/* ---------- INITIALISATION ---------- */
function init(){
  renderProducts();
  updateActiveChip();
  setGenericWhatsappLinks();

  testimonials[0].classList.add("is-active");
  renderDots();
  resetAutoplay();

  observeReveal();
}

document.addEventListener("DOMContentLoaded", init);

/* Fermer modal / panier avec la touche Échap */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape"){
    closeProductModal();
    closeCart();
  }
});
