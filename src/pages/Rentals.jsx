import { useNavigate } from 'react-router-dom';
import './Rentals.css';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const RENTAL_BIKES = [
    {
        id: 1,
        name: 'BMW R 1250 GS',
        type: 'Adventure',
        daily: '$150',
        weekly: '$850',
        image: 'https://images.unsplash.com/photo-1590509641772-aeaff1b50dcd?q=80&w=1000&auto=format&fit=crop',
        features: ['Unlimited Miles', 'Insurance Included', 'Helmet & Gear']
    },
    {
        id: 2,
        name: 'Triumph Tiger 900',
        type: 'Adventure',
        daily: '$130',
        weekly: '$750',
        image: 'https://images.unsplash.com/photo-1621252179022-d04b611dd1ff?q=80&w=1000&auto=format&fit=crop',
        features: ['GPS Equipped', 'Roadside Assistance', 'Helmet & Gear']
    },
    {
        id: 3,
        name: 'Harley-Davidson Fat Boy',
        type: 'Cruiser',
        daily: '$160',
        weekly: '$900',
        image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1000&auto=format&fit=crop',
        features: ['Unlimited Miles', 'Insurance Included', 'Passenger Backrest']
    },
    {
        id: 4,
        name: 'Honda CBR600RR',
        type: 'Sport',
        daily: '$120',
        weekly: '$700',
        image: 'https://images.unsplash.com/photo-1568453472093-4a180eb6f1e1?q=80&w=1000&auto=format&fit=crop',
        features: ['Track Prep Available', 'Insurance Included', 'Helmet & Gear']
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
                <img src="/rental-banner.png" alt="Rental Motorcycles Background" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '16px' }} />
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
                                    onClick={() => navigate('/checkout', { state: { type: 'rental' } })}
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
