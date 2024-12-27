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
const HomePage = React.lazy(() => {
  const component = import('./pages/HomePage/HomePage');
  // Prefetch other routes after homepage loads
  setTimeout(() => {
    import('./components/Menu/Menu');
    import('./components/About/About');
    import('./BookingSection/BookingSection');
    import('./components/Login/Login');
  }, 2000);
  return component;
});

const Menu = React.lazy(() => import('./components/Menu/Menu'));
const About = React.lazy(() => import('./components/About/About'));
const BookingSection = React.lazy(() => import('./BookingSection/BookingSection'));
const Login = React.lazy(() => import('./components/Login/Login'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial loading with minimum display time
    const startTime = Date.now();
    const minLoadingTime = 1000; // 1 second minimum

    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      setTimeout(() => setIsLoading(false), remainingTime);
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  // Custom Suspense fallback with delayed appearance
  const DelayedLoader = () => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(true);
      }, 200);
      return () => clearTimeout(timer);
    }, []);

    return showLoader ? <Loader /> : null;
  };

  if (!isOnline) {
    return (
      <div className="app-container">
        <OfflineMessage />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="app-container">
        <Loader />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Router basename="/">
        <div className="app-container">
          <Navbar />
          
          <main className="main-content">
            <Suspense fallback={<DelayedLoader />}>
              <AnimatePresence mode="wait" initial={false}>
                <Routes>
                  <Route path="/" element={
                    <ErrorBoundary>
                      <HomePage />
                    </ErrorBoundary>
                  } />
                  <Route path="/menu" element={
                    <ErrorBoundary>
                      <Menu />
                    </ErrorBoundary>
                  } />
                  <Route path="/about" element={
                    <ErrorBoundary>
                      <About />
                    </ErrorBoundary>
                  } />
                  <Route path="/reservations" element={
                    <ErrorBoundary>
                      <BookingSection />
                    </ErrorBoundary>
                  } />
                  <Route path="/login" element={
                    <ErrorBoundary>
                      <Login />
                    </ErrorBoundary>
                  } />
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