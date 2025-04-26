import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import WhatsAppButton from './components/Whatsapp';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <WhatsAppButton 
        phoneNumber="9899360001" 
        message="Hello! I'm interested in your services."
      />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
