import { useState } from 'react';
import './Service.css';
import { Wrench, CheckCircle } from 'lucide-react';

const Service = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bikeModel: '',
        serviceType: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <div className="service-page">
            <div className="service-container">

                <div className="service-content">
                    <div className="service-text">
                        <h1>Elite <span className="gradient-text-primary">Service Center</span></h1>
                        <p className="service-desc">
                            Trust your superbike with factory-certified technicians. We provide state-of-the-art diagnostics, performance tuning, and comprehensive maintenance.
                        </p>

                        <div className="service-features">
                            <div className="service-feature glass-panel">
                                <Wrench className="feature-icon-small" />
                                <div>
                                    <h3>Factory Certified</h3>
                                    <p>Our technicians undergo rigorous manufacturer training.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-form-wrapper glass-panel">
                        {isSubmitted ? (
                            <div className="success-state">
                                <CheckCircle size={64} className="success-icon" />
                                <h2>Request Received</h2>
                                <div className="notification-banner">
                                    <p>In showroom they contact in 24hrs</p>
                                </div>
                                <button
                                    className="btn-outline mt-4"
                                    onClick={() => setIsSubmitted(false)}>
                                    Book Another Service
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="service-form">
                                <h2>Book a Service</h2>

                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="form-control"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
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

                                <div className="form-group">
                                    <label htmlFor="bikeModel">Bike Make & Model</label>
                                    <input
                                        type="text"
                                        id="bikeModel"
                                        name="bikeModel"
                                        required
                                        className="form-control"
                                        placeholder="e.g., Ducati Panigale V4"
                                        value={formData.bikeModel}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-half">
                                        <label htmlFor="serviceType">Service Type</label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            required
                                            className="form-control"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Type</option>
                                            <option value="routine">Routine Maintenance</option>
                                            <option value="repair">Repair</option>
                                            <option value="tuning">Performance Tuning</option>
                                            <option value="inspection">Track Inspection</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-half">
                                        <label htmlFor="date">Preferred Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            required
                                            className="form-control"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary form-submit">
                                    Request Appointment
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
