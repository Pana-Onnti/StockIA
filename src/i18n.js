import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          footer: {
            copyright: '© 2024 My Company',
            termsOfService: 'Terms of Service',
            privacy: 'Privacy Policy',
          },
          section: {
            algorithmicLeapTitle: 'Ready to Algorithmic-Leap Your Investments?',
            algorithmicLeapDescription: 'Join Invest today and experience the future of algorithmic-optimized investing.',
            getStarted: 'Get Started Now',
          },
          advantage: {
            title: 'Algorithmic Power for Your Investment',
            speed: {
              title: 'Unmatched Speed',
              description: 'Our algorithmic solutions process market data 1000 times faster than traditional systems, enabling real-time portfolio optimization.',
            },
            accuracy: {
              title: 'Superior Accuracy',
              description: 'Machine learning models enhanced algorithmically achieve 99.9% accuracy in market predictions, far surpassing conventional methods.',
            },
            resilience: {
              title: 'Algorithmic Resilience',
              description: 'Our portfolios exhibit 40% greater resilience against market shocks due to algorithm-driven risk assessment and mitigation strategies.',
            },
          },
          metrics: {
            title: 'Performance Metrics Enhanced by Algorithms',
            tabs: {
              returns: 'Returns',
              volatility: 'Volatility',
              sharpe: 'Sharpe Ratio',
            },
            returns: {
              description: 'Optimized portfolio returns over the past 12 months.',
            },
            volatility: {
              description: 'Comparative volatility analysis: Algorithmic Portfolio vs. Major Indices.',
            },
            sharpe: {
              description: 'Sharpe ratio comparison: Higher values indicate better risk-adjusted returns.',
            },
          },
          customSection: {
            algorithmicLeapTitle: 'Ready to Algorithmic-Leap Your Investments?',
            algorithmicLeapDescription: 'Join Invest today and experience the future of algorithmic-optimized investing.',
            advantageSpeed: 'Unmatched Speed: Our algorithmic solutions process market data 1000 times faster than traditional systems, enabling real-time portfolio optimization.',
            advantageAccuracy: 'Superior Accuracy: Machine learning models enhanced algorithmically achieve 99.9% accuracy in market predictions, far surpassing conventional methods.',
            advantageResilience: 'Algorithmic Resilience: Our portfolios exhibit 40% greater resilience against market shocks due to algorithm-driven risk assessment and mitigation strategies.',
            portfolioTitle: 'Algorithmic Portfolio Allocation',
          },
          firstsubheader: {
            portfolioSelectionTitle: 'AI-Powered Portfolio Selection',
            portfolioSelectionDescription: 'Harness the power of machine learning and algorithmic computing to create optimized investment portfolios.',
            startInvesting: 'Start Investing',
            learnMore: 'Learn More',
          },
          firstcards: {
            algorithmicLeapTitle: 'Transformación Algorítmica',
            algoSelectTitle: 'AlgoSelect™ Portfolio',
            algoSelectDescription: 'Selección de portafolios impulsada por IA',
            algoSelectContent: 'Nuestro producto insignia utiliza algoritmos avanzados para analizar datos del mercado y crear portafolios optimizados adaptados a tu perfil de riesgo.',
            exploreAlgoSelect: 'Explora AlgoSelect™',
            algorithmicHedgeTitle: 'Algorithmic Hedge™',
            algorithmicHedgeDescription: 'Gestión avanzada de riesgos',
            algorithmicHedgeContent: 'Aprovecha la computación algorítmica para cubrir dinámicamente tu portafolio contra la volatilidad del mercado y eventos inesperados.',
            discoverAlgorithmicHedge: 'Descubre Algorithmic Hedge™',
            advancedReportingTitle: 'Informes Avanzados',
            advancedReportingDescription: 'Perspectivas y análisis comprensivos',
            advancedReportingContent: 'Obtén acceso a informes avanzados que proporcionan detalles sobre el rendimiento de tu portafolio, exposición al riesgo y estrategias de optimización.',
            learnAboutReporting: 'Aprende sobre Informes Avanzados',
          },
          header: {
            title: 'StockAI Finanzas',
            aiPortfolio: 'Portafolio de IA',
            performance: 'Desempeño',
            aboutUs: 'Sobre Nosotros',
            contact: 'Contacto',
          },
          agentsCards: {
            sectionTitle: 'AI Agents and Machine Learning Models',
            cardOne: {
              title: 'AI Agents',
              description: 'Our AI agents are designed to analyze market data and make real-time investment decisions.',
              content: 'With a flexible architecture, our AI agents can adapt to any market changes and provide valuable insights to maximize return on investment.',
              buttonText: 'Discover more about AI Agents',
            },
            cardTwo: {
              title: 'Machine Learning Models',
              description: 'Our advanced machine learning models accurately predict market trends and optimize your portfolio.',
              content: 'Using deep neural networks and state-of-the-art algorithms, these models offer reliable and personalized predictions.',
              buttonText: 'Explore ML Models',
            },
          },
        },
      },
      es: {
        translation: {
          footer: {
            copyright: '© 2024 Mi Empresa',
            termsOfService: 'Términos de Servicio',
            privacy: 'Política de Privacidad',
          },
          firstsubheader: {
            portfolioSelectionTitle: 'Selección de Portafolios Impulsada por IA',
            portfolioSelectionDescription: 'Aprovecha el poder del aprendizaje automático y la computación algorítmica para crear portafolios de inversión optimizados.',
            startInvesting: 'Comienza a Invertir',
            learnMore: 'Aprende Más',
          },
          section: {
            algorithmicLeapTitle: '¿Listo para dar un salto algorítmico en tus inversiones?',
            algorithmicLeapDescription: 'Únete a Invest hoy y experimenta el futuro de la inversión optimizada por algoritmos.',
            getStarted: 'Comienza Ahora',
          },
          advantage: {
            title: 'Potencia Algorítmica para tu Inversión',
            speed: {
              title: 'Velocidad Inigualable',
              description: 'Nuestras soluciones algorítmicas procesan datos del mercado 1000 veces más rápido que los sistemas tradicionales, facilitando la optimización de tu cartera en tiempo real.',
            },
            accuracy: {
              title: 'Precisión Superior',
              description: 'Modelos de aprendizaje automático mejorados algorítmicamente logran una precisión del 99.9% en predicciones del mercado, superando ampliamente los métodos convencionales.',
            },
            resilience: {
              title: 'Resiliencia Algorítmica',
              description: 'Nuestras carteras muestran una resiliencia un 40% mayor frente a los shocks del mercado gracias a estrategias de evaluación y mitigación de riesgos impulsadas por algoritmos.',
            },
          },
          metrics: {
            title: 'Métricas de Rendimiento Optimizadas Algorítmicamente',
            tabs: {
              returns: 'Rendimientos',
              volatility: 'Volatilidad',
              sharpe: 'Ratio Sharpe',
            },
            returns: {
              description: 'Rendimientos optimizados de la cartera durante los últimos 12 meses.',
            },
            volatility: {
              description: 'Análisis comparativo de volatilidad: Cartera Algorítmica vs. Principales Índices.',
            },
            sharpe: {
              description: 'Comparación del ratio Sharpe: Valores más altos indican mejores retornos ajustados al riesgo.',
            },
          },
          customSection: {
            algorithmicLeapTitle: '¿Listo para dar un salto algorítmico en tus inversiones?',
            algorithmicLeapDescription: 'Únete a Invest hoy y experimenta el futuro de la inversión optimizada por algoritmos.',
            advantageSpeed: 'Velocidad Inigualable: Nuestras soluciones algorítmicas procesan datos del mercado 1000 veces más rápido que los sistemas tradicionales, facilitando la optimización de tu cartera en tiempo real.',
            advantageAccuracy: 'Precisión Superior: Modelos de aprendizaje automático mejorados algorítmicamente logran una precisión del 99.9% en predicciones del mercado, superando ampliamente los métodos convencionales.',
            advantageResilience: 'Resiliencia Algorítmica: Nuestras carteras muestran una resiliencia un 40% mayor frente a los shocks del mercado gracias a estrategias de evaluación y mitigación de riesgos impulsadas por algoritmos.',
            portfolioTitle: 'Asignación de Cartera Algorítmica',
          },
          firstcards: {
            algorithmicLeapTitle: 'Transformación Algorítmica',
            algoSelectTitle: 'AlgoSelect™ Portfolio',
            algoSelectDescription: 'Selección de portafolios impulsada por IA',
            algoSelectContent: 'Nuestro producto insignia utiliza algoritmos avanzados para analizar datos del mercado y crear portafolios optimizados adaptados a tu perfil de riesgo.',
            exploreAlgoSelect: 'Explora AlgoSelect™',
            algorithmicHedgeTitle: 'Algorithmic Hedge™',
            algorithmicHedgeDescription: 'Gestión avanzada de riesgos',
            algorithmicHedgeContent: 'Aprovecha la computación algorítmica para cubrir dinámicamente tu portafolio contra la volatilidad del mercado y eventos inesperados.',
            discoverAlgorithmicHedge: 'Descubre Algorithmic Hedge™',
            advancedReportingTitle: 'Informes Avanzados',
            advancedReportingDescription: 'Perspectivas y análisis comprensivos',
            advancedReportingContent: 'Obtén acceso a informes avanzados que proporcionan detalles sobre el rendimiento de tu portafolio, exposición al riesgo y estrategias de optimización.',
            learnAboutReporting: 'Aprende sobre Informes Avanzados',
          },
          header: {
            title: 'StockAI Finanzas',
            aiPortfolio: 'Portafolio de IA',
            performance: 'Desempeño',
            aboutUs: 'Sobre Nosotros',
            contact: 'Contacto',
          },
          agentsCards:{
            sectionTitle: 'Agentes de IA y Modelos de Aprendizaje Automático',
            cardOne: {
              title: 'Agentes de IA',
              description: 'Nuestros agentes de IA están diseñados para analizar datos del mercado y tomar decisiones de inversión en tiempo real.',
              content: 'Con una arquitectura flexible, nuestros agentes de IA pueden adaptarse a cualquier cambio del mercado y ofrecer insights valiosos para maximizar el retorno de inversión.',
              buttonText: 'Descubre más sobre Agentes de IA',
            },
            cardTwo: {
              title: 'Modelos de Aprendizaje Automático',
              description: 'Nuestros modelos de aprendizaje automático avanzados predicen con precisión las tendencias del mercado y optimizan tu cartera.',
              content: 'Utilizando redes neuronales profundas y algoritmos de última generación, estos modelos ofrecen predicciones confiables y personalizadas.',
              buttonText: 'Explora los Modelos de ML',
            },
            
          },
        },
      },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // idioma de reserva
    interpolation: {
      escapeValue: false, // no se necesita para React
    },
  });

export default i18n;
