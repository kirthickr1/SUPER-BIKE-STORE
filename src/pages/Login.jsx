import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            navigate('/home');
        } else {
            setError('Please enter both email and password.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-image-section">
                <img
                    src="https://img.freepik.com/premium-photo/futuristic-superbike-showroom_968517-116616.jpg?w=1380"
                    alt="Sports Bike"
                />
                <div className="image-overlay">
                    <h2>Welcome to Elite Superbikes</h2>
                    <p>Ride the legend.</p>
                </div>
            </div>
            <div className="login-form-section">
                <div className="login-box glass-panel">
                    <h2>Sign In</h2>
                    <p>Enter your credentials to access our showroom</p>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="rider@apex.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                        </div>
                        <button type="submit" className="btn-primary login-btn">
                            Continue to Website
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
