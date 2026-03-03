import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
    const location = useLocation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [actionType, setActionType] = useState('Purchase');

    // Check if we navigated here with state indicating a rental intent
    useEffect(() => {
        if (location.state && location.state.type === 'rental') {
            setActionType('Rental');
        }
    }, [location]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call and processing
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h1>Complete Your <span className="gradient-text-primary">{actionType}</span></h1>
                    <p className="checkout-desc">
                        Please provide your details below. Our team will contact you shortly to finalize the transaction.
                    </p>
                </div>

                <div className="checkout-form-wrapper glass-panel">
                    {isSubmitted ? (
                        <div className="success-state">
                            <CheckCircle size={64} className="success-icon" />
                            <h2>Request Received!</h2>
                            <div className="notification-banner">
                                <p>Thank you for choosing us. Our team will contact you within 24 hours to proceed.</p>
                            </div>
                            <button
                                className="btn-outline mt-4"
                                onClick={() => setIsSubmitted(false)}>
                                Back to Form
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="checkout-form">
                            <h2>Personal Information</h2>

                            <div className="form-row">
                                <div className="form-group col-half">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="form-control"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-half">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="form-control"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-half">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="form-control"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-half">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="form-control"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <h2 style={{ marginTop: '20px' }}>Shipping Address</h2>

                            <div className="form-group">
                                <label htmlFor="address">Street Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    className="form-control"
                                    placeholder="123 Main St"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-half">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        required
                                        className="form-control"
                                        placeholder="New York"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-half">
                                    <label htmlFor="zipCode">ZIP / Postal Code</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        required
                                        className="form-control"
                                        placeholder="10001"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary form-submit">
                                Submit Details
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
