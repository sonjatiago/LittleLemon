// At the top of your App.js, update the imports
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Regular imports for core components
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import OfflineMessage from './components/OfflineMessage/OfflineMessage';
import NotFound from './components/NotFound/NotFound';
import './App.css';

// Lazy loaded page components
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const Menu = React.lazy(() => import('./components/Menu/Menu'));
const About = React.lazy(() => import('./components/About/About'));
const BookingSection = React.lazy(() => import('./BookingSection/BookingSection'));
const Login = React.lazy(() => import('./components/Login/Login'));

// Rest of your App.js code remains the same
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  if (!isOnline) {
    return <OfflineMessage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
      <Router basename="/">
        <div className="app-container">
          <Navbar />
          
          <main className="main-content">
            <Suspense fallback={<Loader />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/reservations" element={<BookingSection />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/LittleLemon" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;