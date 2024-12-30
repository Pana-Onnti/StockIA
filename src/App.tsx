import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ModernLandingPageComponent } from './components/modern-landing-page';
import { Analytics } from '@vercel/analytics/react';
import '../src/i18n.js'; // Importa la configuración de i18next
import Login from './components/Login';
import Register from './components/Register';

function InvestmentApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModernLandingPageComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default InvestmentApp;
