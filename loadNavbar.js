document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-left">
                    <a href="index.html" class="logo-container">
                        <img src="images/MInemeBlueMnowhite.png" alt="MineMe Logo" class="logo">
                        <span>MineMe</span>
                    </a>
                    <button class="hamburger" aria-label="Toggle menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
                <div class="nav-links">
                    <a href="index.html#features">Features</a>
                    <a href="team.html">Team</a>
                    <a href="careers.html">Careers</a>
                    <a href="contact.html">Contact Us</a>
                </div>
                <div class="nav-right">
                    <a href="demo.html" class="primary-btn" style="text-align: center;">Schedule A Demo</a>
                </div>
            </div>
        </nav>
        <div class="mobile-menu-overlay"></div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navRight = document.querySelector('.nav-right');
    const overlay = document.querySelector('.mobile-menu-overlay');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navRight.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && 
            !navLinks.contains(e.target) && 
            !navRight.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navRight.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Add smooth scrolling for the features link
    document.querySelector('a[href="index.html#features"]').addEventListener('click', function(e) {
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            e.preventDefault();
            document.getElementById('features').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 