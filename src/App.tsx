import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// Main Route Configuration
import { SEO } from './components/SEO';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { PawParallax } from './components/PawParallax';

// Pages - We'll create these next


import { Products } from './pages/Products';
import { ServiceDirectory } from './pages/Services';
import { Home } from './pages/Home';
import { PetListing } from './pages/PetListing';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <PawParallax />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetListing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<ServiceDirectory />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
