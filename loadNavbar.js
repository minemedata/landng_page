document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-left">
                    <a href="index.html" class="logo-container">
                        <img src="images/mineme_logo.png" alt="MineMe Logo" class="logo">
                        <span>MineMe</span>
                    </a>
                    <div class="nav-links">
                        <a href="index.html#features">Features</a>
                        <a href="team.html">Team</a>
                        <a href="careers.html">Careers</a>
                        <a href="contact.html">Contact Us</a>
                    </div>
                </div>
                <div class="nav-right">
                    <a href="demo.html" class="demo-btn">Schedule A Demo</a>
                </div>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

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