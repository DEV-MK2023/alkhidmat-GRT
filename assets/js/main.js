// ==========================================
// NAVBAR INITIALIZATION
// ==========================================

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    const hamburger = document.querySelector(".hamburger");

    const navLinks = document.querySelector(".nav-links");

    const dropdowns = document.querySelectorAll(".dropdown");

    if (!navbar) return;

    // ==========================================
    // SCROLL EFFECT
    // ==========================================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        }

        else {

            navbar.classList.remove("scrolled");

        }

    });

    // ==========================================
    // MOBILE MENU
    // ==========================================

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    // ==========================================
    // MOBILE DROPDOWNS
    // ==========================================

    dropdowns.forEach(dropdown => {

        dropdown.addEventListener("click", () => {

            if (window.innerWidth <= 992) {

                dropdown.classList.toggle("active");

            }

        });

    });

}