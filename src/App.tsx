import { ModernLandingPageComponent } from './components/modern-landing-page';
import { Analytics } from "@vercel/analytics/react";
function InvestmentApp() {
  return (

    <body className="App">
      <ModernLandingPageComponent /> {/* Asegúrate de que este nombre coincida con la exportación en modern-landing-page */}
      <Analytics />
    </body>
  );
}

export default InvestmentApp;
