import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';

const BIKES = [
    {
        id: 1,
        name: 'Ninja ZX-10R',
        brand: 'Kawasaki',
        price: '₹14,80,000',
        engine: '998cc',
        power: '203 HP',
        image: 'https://www.bossrides.in/wp-content/uploads/2023/03/kawasaki-ninja-zx10r-1-min-scaled-1.jpg',
    },
    {
        id: 2,
        name: 'Panigale V4',
        brand: 'Ducati',
        price: '₹19,20,000',
        engine: '1103cc',
        power: '214 HP',
        image: 'https://www.bing.com/th/id/OIP.HoLgwR6zayFzqGVKoqhknAHaEK?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
    {
        id: 3,
        name: 'YZF-R1M',
        brand: 'Yamaha',
        price: '₹21,52,000',
        engine: '998cc',
        power: '200 HP',
        image: 'https://tse3.mm.bing.net/th/id/OIP.Z19DZ8d76-V43klrdjUg3wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        id: 4,
        name: 'S 1000 RR',
        brand: 'BMW',
        price: '₹16,40,000',
        engine: '999cc',
        power: '205 HP',
        image: 'https://th.bing.com/th/id/OIP.qnFE6GakUjQHtk27FM9nkAHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        id: 5,
        name: 'Hayabusa',
        brand: 'Suzuki',
        price: '₹15,20,000',
        engine: '1340cc',
        power: '190 HP',
        image: 'https://tse3.mm.bing.net/th/id/OIP.KFNa1elnURZAS8yo7kMGmQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        id: 6,
        name: 'Ninja H2',
        brand: 'Kawasaki',
        price: '₹25,20,000',
        engine: '998cc',
        power: '228 HP',
        image: 'https://wallpapercat.com/w/middle-retina/c/e/3/1741836-2015x1512-desktop-hd-kawasaki-ninja-h2-wallpaper-photo.jpg',
    },
    {
        id: 7,
        name: 'RSV4 Factory',
        brand: 'Aprilia',
        price: '₹20,79,920',
        engine: '1099cc',
        power: '217 HP',
        image: 'https://i.pinimg.com/736x/e3/dd/f5/e3ddf5ff458235471fee8e19ef8eb261.jpg',
    },
    {
        id: 8,
        name: 'F4',
        brand: 'MV Agusta',
        price: '₹17,60,000',
        engine: '998cc',
        power: '195 HP',
        image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/131003-f4-01.jpeg?quality=70&strip=info&w=680&h=453&crop=1',
    },
    {
        id: 9,
        name: 'CBR1000RR-R',
        brand: 'Honda',
        price: '₹23,12,000',
        engine: '1000cc',
        power: '214 HP',
        image: 'https://www.bing.com/th/id/OIP.g7okAq3RIu1bHsuj-jLBBAHaEf?w=273&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    },
    {
        id: 10,
        name: 'Streetfighter V4 S',
        brand: 'Ducati',
        price: '₹20,39,600',
        engine: '1103cc',
        power: '208 HP',
        image: 'https://tse2.mm.bing.net/th/id/OIP.1GnnBT3YqjsvhkHYl8kR0wHaNJ?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
        id: 11,
        name: '1290 Super Duke R',
        brand: 'KTM',
        price: '₹16,39,920',
        engine: '1301cc',
        power: '180 HP',
        image: 'https://wallpapercave.com/wp/wp2503672.jpg',
    },
    {
        id: 12,
        name: 'MT-10 SP',
        brand: 'Yamaha',
        price: '₹13,51,920',
        engine: '998cc',
            power: '164 HP',
            image: 'https://tse3.mm.bing.net/th/id/OIP.F3yBGmffcbrb0-uTaaZCeAHaE8?w=3000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3',
    }
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
                                        onClick={() => navigate('/checkout', { state: { type: 'purchase', bike } })}
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
