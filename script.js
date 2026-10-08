// =========================
// CART
// =========================

let cartCount = 0;
let cartTotal = 0;


// Add food to cart
function addToCart() {

    cartCount++;

    cartTotal += 50;

    document.getElementById("cart-count").textContent = cartCount;

    document.getElementById("cart-total").textContent =
        "₹" + cartTotal;

    showToast();
}


// =========================
// TOAST
// =========================

function showToast() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);
}


// =========================
// OPEN CART
// =========================

function openCart() {

    const cart = document.getElementById("cart-overlay");

    cart.classList.add("active");

}


// =========================
// CLOSE CART
// =========================

function closeCart() {

    const cart = document.getElementById("cart-overlay");

    cart.classList.remove("active");

}


// =========================
// SCROLL TO DEALS
// =========================

function scrollToDeals() {

    document.getElementById("deals").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// SELLER MESSAGE
// =========================

function showSellerMessage() {

    alert(
        "🏪 Seller registration is coming soon!\n\n" +
        "Soon you'll be able to turn surplus food into extra revenue."
    );

}


// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loading-screen");

    setTimeout(function () {

        loadingScreen.classList.add("hide");

    }, 1200);

});