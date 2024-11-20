document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>MineMe</h4>
                    <ul>
                        <li><a href="platform.html">Platform Overview</a></li>
                        <li><a href="solutions.html">Solutions</a></li>
                        <li><a href="cases.html">Use Cases</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="documentation.html">Documentation</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="platform.html">Overview</a></li>
                        <li><a href="automation.html">Integration</a></li>
                        <li><a href="enterprise.html">Enterprise</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="updates.html">Platform Updates</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="privacy.html">Privacy & Terms</a></li>
                        <li><a href="cookies.html">Cookie Policy</a></li>
                        <li><a href="status.html">System Status</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="careers.html">Careers</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="social-icons">
                    <a href="mailto:contact@mineme.com">
                        <img src="Images/mailicon.svg" alt="Email" class="social-icon">
                    </a>
                    <a href="https://linkedin.com/company/mineme" target="_blank">
                        <img src="Images/linkedinicon.svg" alt="LinkedIn" class="social-icon">
                    </a>
                    <a href="https://x.com/mineme" target="_blank">
                        <img src="Images/xicon.svg" alt="X" class="social-icon">
                    </a>
                    <a href="https://instagram.com/mineme" target="_blank">
                        <img src="Images/instaicon.svg" alt="Instagram" class="social-icon">
                    </a>
                    <a href="https://tiktok.com/@mineme" target="_blank">
                        <img src="Images/youtubeicon.svg" alt="Youtube" class="social-icon">
                    </a>
                </div>
                <p class="copyright">© 2024 MineMe. All rights reserved.</p>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}); 