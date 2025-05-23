import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InvestmentApp from './App'; // Cambia aquí a InvestmentApp
import './index.css';
import './i18n';  // Importa tu configuración de i18n

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InvestmentApp /> {/* Cambia aquí a InvestmentApp */}
  </StrictMode>,
);
