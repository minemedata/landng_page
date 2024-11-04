// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mobile menu toggle
    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle?.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks?.contains(e.target) && !mobileMenuToggle?.contains(e.target)) {
            navLinks?.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Pricing page specific functionality
    if (window.location.pathname.includes('pricing.html')) {
        // Billing toggle functionality
        const billingToggle = document.getElementById('billing-toggle');
        const priceElements = document.querySelectorAll('.amount');
        const originalPrices = Array.from(priceElements).map(el => parseInt(el.textContent.replace('$', '')));

        billingToggle?.addEventListener('change', function() {
            priceElements.forEach((el, index) => {
                const originalPrice = originalPrices[index];
                if (this.checked) {
                    // Annual pricing (20% discount)
                    el.textContent = `$${Math.round(originalPrice * 0.8)}`;
                } else {
                    // Monthly pricing
                    el.textContent = `$${originalPrice}`;
                }
            });
        });
    }

    // Platform page specific functionality
    if (window.location.pathname.includes('platform.html')) {
        // Tab switching functionality
        const tabButtons = document.querySelectorAll('.tab-btn');
        const previewContents = document.querySelectorAll('.preview-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tab = button.dataset.tab;

                // Update active states
                tabButtons.forEach(btn => btn.classList.remove('active'));
                previewContents.forEach(content => content.classList.remove('active'));

                // Show selected content
                button.classList.add('active');
                document.querySelector(`#${tab}`).classList.add('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based navbar styling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
// Add this at the beginning of main.js
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
                // After loading navbar, initialize its functionality
                initializeNavbar();
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
});

// Separate function for navbar initialization
function initializeNavbar() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mobile menu toggle
    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle?.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    (function (C, A, L) {
        let p = function (a, ar) {
            a.q.push(ar);
        };
        let d = C.document;
        C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
            }
            if (ar[0] === L) {
                const api = function () {
                    p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
                return;
            }
            p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", {origin: "https://cal.com"});
}