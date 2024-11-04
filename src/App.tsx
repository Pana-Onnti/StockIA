import { ModernLandingPageComponent } from './components/modern-landing-page';
import { Analytics } from "@vercel/analytics/react";
//import Footer from './components/Footer';
import '../src/i18n.js'; // Importa la configuración de i18next


function InvestmentApp() {
  return (

    <body className="App">
      <ModernLandingPageComponent /> {/* Asegúrate de que este nombre coincida con la exportación en modern-landing-page */}
      <Analytics />
      {/*<Footer />*/}
    </body>
    

  );
}

export default InvestmentApp;
