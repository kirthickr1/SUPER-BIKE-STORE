import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Service from './pages/Service';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import More from './More';

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="app-container">
      {!isLoginPage && <Navbar />}
      <main className={!isLoginPage ? "main-content" : ""}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/service" element={<Service />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
