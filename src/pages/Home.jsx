import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';

const BIKES = [
    {
        id: 1,
        name: 'Ninja ZX-10R',
        brand: 'Kawasaki',
        price: '$18,500',
        engine: '998cc',
        power: '203 HP',
        image: 'https://www.bossrides.in/wp-content/uploads/2023/03/kawasaki-ninja-zx10r-1-min-scaled-1.jpg',
    },
    {
        id: 2,
        name: 'Panigale V4',
        brand: 'Ducati',
        price: '$24,000',
        engine: '1103cc',
        power: '214 HP',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'YZF-R1M',
        brand: 'Yamaha',
        price: '$26,900',
        engine: '998cc',
        power: '200 HP',
        image: 'https://tse3.mm.bing.net/th/id/OIP.Z19DZ8d76-V43klrdjUg3wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        id: 4,
        name: 'S 1000 RR',
        brand: 'BMW',
        price: '$20,500',
        engine: '999cc',
        power: '205 HP',
        image: 'https://th.bing.com/th/id/OIP.qnFE6GakUjQHtk27FM9nkAHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Own The <span className="gradient-text-primary">Apex</span>
                    </h1>
                    <p className="hero-subtitle">
                        Discover our curated collection of championship-winning superbikes.
                        Unleash unmatched power and precision on the road and track.
                    </p>
                    <div className="hero-cta">
                        <button className="btn-primary">
                            View Inventory <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
                        </button>
                        <button className="btn-outline" onClick={() => navigate('/more')}>Learn More</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-gradient-overlay"></div>
                    {/* using a placeholder image for hero but styled */}
                    <img
                        src="https://i.pinimg.com/736x/86/d6/e6/86d6e65b230b3526c23266a78abe72d7.jpg"
                        alt="BMW Superbike Hero"
                        className="hero-image"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card glass-panel">
                        <Zap size={40} className="feature-icon" color="var(--primary)" />
                        <h3>Raw Power</h3>
                        <p>Experience adrenaline-pumping acceleration with elite engines.</p>
                    </div>
                    <div className="feature-card glass-panel">
                        <Target size={40} className="feature-icon" color="var(--primary)" />
                        <h3>Precision</h3>
                        <p>Surgical handling and cornering capabilities built for the track.</p>
                    </div>
                    <div className="feature-card glass-panel">
                        <Shield size={40} className="feature-icon" color="var(--primary)" />
                        <h3>Certified</h3>
                        <p>Every bike passes a rigorous 150-point inspection and testing.</p>
                    </div>
                </div>
            </section>

            {/* Bike Inventory */}
            <section className="inventory-section">
                <div className="section-header">
                    <h2>Featured <span className="gradient-text-primary">Superbikes</span></h2>
                    <p>The latest arrivals in our showroom.</p>
                </div>

                <div className="banner-container" style={{ width: '100%', marginBottom: '40px', borderRadius: '16px', overflow: 'hidden' }}>
                    <img src="https://img.freepik.com/premium-photo/futuristic-superbike-showroom_968517-116616.jpg?w=1380" alt="Featured Superbikes Showroom" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                </div>

                <div className="bike-grid">
                    {BIKES.map((bike) => (
                        <div key={bike.id} className="bike-card glass-panel">
                            <div className="bike-image-container">
                                <img src={bike.image} alt={bike.name} className="bike-thumbnail" />
                                <div className="bike-brand-badge">{bike.brand}</div>
                            </div>
                            <div className="bike-details">
                                <h3>{bike.name}</h3>
                                <div className="bike-specs">
                                    <span>{bike.engine}</span> • <span>{bike.power}</span>
                                </div>
                                <div className="bike-footer">
                                    <span className="bike-price">{bike.price}</span>
                                    <button
                                        className="btn-primary buy-btn"
                                        onClick={() => navigate('/checkout')}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
