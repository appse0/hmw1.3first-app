import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main-content">
                <div className="footer-authors">
                    <img src="./public/footer-logo.svg" alt="Logo" />
                    <p>Built by <span>Nikolai Bain</span>.</p>
                    <p>Powered by <span>Webflow</span>.</p>
                </div>

                <div className="footer-info">
                    <ul>
                        <li>Features</li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <ul>
                        <li>Admin</li>
                        <li><a href="#">Style Guide</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Instructions</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Password</a></li>
                        <li><a href="#">404</a></li>
                    </ul>
                    <div className="footer-newsletter">
                        <h1>Newsletter</h1>
                        <p>Sign up for the latest news, company insights, and Whirl updates.</p>
                        <button className="footer-newsletter-button">
                            <p>Your email</p>
                            <img src="./public/footer-arrow.svg" alt="Arrow" />
                        </button>

                    </div>
                </div>
            </div>

            <div className="footer-line"></div>
            <p>© 2022 Whirl. All Rights Reserved. Illustrations by <span>Streamline</span>.</p>
        </footer>
    )
}

export default Footer;