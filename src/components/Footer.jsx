import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2 className="logo-text">VELOCITY</h2>
                    <p className="footer-tagline">Experience the ultimate ride. Premium superbikes for sale, rent, and specialized service.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h3>Explore</h3>
                        <a href="/">Buy</a>
                        <a href="/rentals">Rent</a>
                        <a href="/service">Service</a>
                    </div>
                    <div className="link-group">
                        <h3>Contact</h3>
                        <p>1-800-VELOCITY</p>
                        <p>info@velocitybikes.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Velocity Superbikes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
