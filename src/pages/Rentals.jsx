import { useNavigate } from 'react-router-dom';
import './Rentals.css';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const RENTAL_BIKES = [
    {
        id: 1,
        name: 'BMW R 1250 GS',
        type: 'Adventure',
        daily: '₹12,000',
        weekly: '₹68,000',
        image: 'https://rustsports.com/wp-content/uploads/2020/03/P90322916_highRes_bmw-r-1250-gs-hp-09--scaled.jpg',
        features: ['Unlimited Miles', 'Insurance Included', 'Helmet & Gear']
    },
    {
        id: 2,
        name: 'Triumph Tiger 900',
        type: 'Adventure',
        daily: '₹10,400',
        weekly: '₹60,000',
        image: 'https://mcn-images.bauersecure.com/wp-images/225328/2024-triumph-tiger-900-rally-pro-review-01.jpg',
        features: ['GPS Equipped', 'Roadside Assistance', 'Helmet & Gear']
    },
    {
        id: 3,
        name: 'Harley-Davidson Fat Boy',
        type: 'Cruiser',
        daily: '₹12,800',
        weekly: '₹72,000',
        image: 'https://tse4.mm.bing.net/th/id/OIP.a3CP96VxqpCi8ZVoE0c6qQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' ,
        features: ['Unlimited Miles', 'Insurance Included', 'Passenger Backrest']
    },
    {
        id: 4,
        name: 'Honda CBR600RR',
        type: 'Sport',
        daily: '₹9,600',
        weekly: '₹56,000',
        image: 'https://www.team-bhp.com/forum/attachments/superbikes-imports/2527817d1699356311-2024-honda-cbr600rr-unveiled-458373_24ym_cbr600rr.jpg',
        features: ['Track Prep Available', 'Insurance Included', 'Helmet & Gear']
    },
    {
        id: 5,
        name: 'Kawasaki Versys 1000',
        type: 'Touring',
        daily: '₹11,200',
        weekly: '₹64,000',
        image: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Versys_1000_SE_Lifestyle_1.jpg',
        features: ['Comfort Seat', 'Top Case Included', 'Roadside Assistance']
    },
    {
        id: 6,
        name: 'Ducati Multistrada V4',
        type: 'Adventure',
        daily: '₹14,400',
        weekly: '₹80,000',
        image: 'https://www.motorcyclevalley.com/images/wallpapers/Ducati%20Multistrada%20V4%20Rally-29-1675670046.jpg',
        features: ['Unlimited Miles', 'Radar Cruise Control', 'Panniers Included']
    },
    {
        id: 7,
        name: 'Yamaha Tracer 9 GT',
        type: 'Touring',
        daily: '₹10,800',
        weekly: '₹60,000',
        image: 'https://tse3.mm.bing.net/th/id/OIP.9K2LX5CPAvWaxOxc4aE4rwHaFM?w=2000&h=1403&rs=1&pid=ImgDetMain&o=7&rm=3',
        features: ['Electronic Suspension', 'Heated Grips', 'Insurance Included']
    },
    {
        id: 8,
        name: 'Indian Scout Bobber',
        type: 'Cruiser',
        daily: '₹12,000',
        weekly: '₹68,000',
        image: 'https://www.bing.com/th/id/OIP.O7HEnx7VlLR-R948XSCF9gHaEo?w=270&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        features: ['Unlimited Miles', 'Classic Styling', 'Leather Saddlebags']
    },
    {
        id: 9,
        name: 'Suzuki V-Strom 1050XT',
        type: 'Adventure',
        daily: '₹10,000',
        weekly: '₹54,400',
        image: 'https://www.cyclenews.com/wp-content/uploads/2020/06/2020-Suzuki-V-Strom-1050XT-Right-Side.jpg',
        features: ['Wire-spoke Wheels', 'Crash Bars', 'Helmet & Gear']
    },
    {
        id: 10,
        name: 'Honda Africa Twin',
        type: 'Adventure',
        daily: '₹11,600',
        weekly: '₹65,600',
        image: 'https://wallpapercat.com/w/full/d/4/d/1721851-2048x1536-desktop-hd-honda-africa-twin-background.jpg',
        features: ['DCT Option Available', 'Off-road Ready', 'GPS Equipped']
    },
    {
        id: 11,
        name: 'Royal Enfield Himalayan',
        type: 'Adventure',
        daily: '₹7,200',
        weekly: '₹36,000',
        image: 'https://www.bing.com/th/id/OIP.17NM5dQIyAQaJmQmwHZgwgHaEK?w=291&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        features: ['Easy to Ride', 'Great Fuel Economy', 'Panniers Included']
    },
    {
        id: 12,
        name: 'Triumph Bonneville T120',
        type: 'Classic',
        daily: '₹10,400',
        weekly: '₹56,000',
        image: 'https://th.bing.com/th/id/OIP.iPh_xEEfZ5yBKcMgugJjDgHaEH?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        features: ['Retro Style', 'Comfortable Two-Up', 'Insurance Included']
    }
];

const Rentals = () => {
    const navigate = useNavigate();

    return (
        <div className="rentals-page">
            <div className="rentals-header">
                <h1>Ride <span className="gradient-text-primary">Your Dream</span></h1>
                <p>Premium superbike rentals for weekend escapes and cross-country adventures.</p>
            </div>

            <div className="banner-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto 40px auto', borderRadius: '16px', overflow: 'hidden', padding: '0 5%' }}>
                <img src="https://www.morrismotorcycles.com.au/wp-content/uploads/2023/01/Morris-Motorcycle-Shop-1024x768.jpg" alt="Rental Motorcycles Background" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '16px' }} />
            </div>

            <div className="rentals-container">
                <div className="rental-grid">
                    {RENTAL_BIKES.map((bike) => (
                        <div key={bike.id} className="rental-card glass-panel">
                            <div className="rental-image-wrapper">
                                <img src={bike.image} alt={bike.name} className="rental-image" />
                                <div className="rental-type-badge">{bike.type}</div>
                            </div>
                            <div className="rental-info">
                                <h2>{bike.name}</h2>

                                <div className="pricing-info">
                                    <div className="price-item">
                                        <span className="price-label"><Clock size={16} /> Daily</span>
                                        <span className="price-value">{bike.daily}</span>
                                    </div>
                                    <div className="price-divider"></div>
                                    <div className="price-item">
                                        <span className="price-label"><Calendar size={16} /> Weekly</span>
                                        <span className="price-value">{bike.weekly}</span>
                                    </div>
                                </div>

                                <ul className="features-list">
                                    {bike.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>

                                <button
                                    className="btn-primary w-full mt-4"
                                    onClick={() => navigate('/checkout', { state: { type: 'rental', bike } })}
                                >
                                    Book Now <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rentals;
