import { Link, useLocation } from 'react-router-dom';
import { Bike, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar glass-panel">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="Velocity Logo" className="logo-img" style={{ height: '32px', width: 'auto', borderRadius: '4px' }} />
                    <span className="logo-text">Elite SuperBike Garage</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link to="/home" className={`nav-link ${isActive('/home')}`}>Buy</Link>
                    <Link to="/rentals" className={`nav-link ${isActive('/rentals')}`}>Rent</Link>
                    <Link to="/service" className={`nav-link ${isActive('/service')}`}>Service</Link>
                </div>

                {/* Mobile menu toggle */}
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/home" className="mobile-link" onClick={toggleMenu}>Buy</Link>
                    <Link to="/rentals" className="mobile-link" onClick={toggleMenu}>Rent</Link>
                    <Link to="/service" className="mobile-link" onClick={toggleMenu}>Service</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
