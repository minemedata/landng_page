document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>MineMe</h4>
                    <ul>
                        <li><a href="https://www.minemedata.com/">Platform Overview</a></li>
                        <li><a href="index.html#features">Features</a></li>
                        <!-- <li><a href="cases.html">Use Cases</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="documentation.html">Documentation</a></li> -->
                    </ul>
                </div>

                <!-- <div class="footer-section">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="platform.html">Overview</a></li>
                        <li><a href="automation.html">Integration</a></li>
                        <li><a href="enterprise.html">Enterprise</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="updates.html">Platform Updates</a></li>
                    </ul>
                </div> -->

                <div class="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="team.html#vision">Our Vision</a></li>
                        <li><a href="team.html#team">Our Team</a></li>
                        <!-- <li><a href="blog.html">Blog</a></li> -->  
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Get In Touch</h4>
                    <ul>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="demo.html">Schedule Demo</a></li>
                       <li><a href="careers.html">Careers</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="privacy-terms.html">Privacy & Terms</a></li>
                        <li><a href="cookie-policy.html">Cookie Policy</a></li>
                       <!-- <li><a href="status.html">System Status</a></li> -->
                    </ul>
                </div>
            </div>


            <div class="footer-bottom">
                <div class="social-icons">
                    <a href="mailto:info@minemedata.com">
                        <img src="images/mailicon.svg" alt="Email" class="social-icon">
                    </a>
                    <a href="https://linkedin.com/company/mineme" target="_blank">
                        <img src="images/linkedinicon.svg" alt="LinkedIn" class="social-icon">
                    </a>
                    <a href="https://x.com/MineMeData" target="_blank">
                        <img src="images/xicon.svg" alt="X" class="social-icon">
                    </a>
                    <a href="https://instagram.com/mineme_data" target="_blank">
                        <img src="images/instaicon.svg" alt="Instagram" class="social-icon">
                    </a>
                    <a href="https://www.youtube.com/@MineMeData" target="_blank">
                        <img src="images/youtubeicon.svg" alt="Youtube" class="social-icon">
                    </a>
                </div>
                <p class="copyright">© 2024 MineMe. All rights reserved.</p>
            </div>
        </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}); 