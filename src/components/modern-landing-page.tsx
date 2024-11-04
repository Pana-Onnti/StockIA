import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { Brain, TrendingUp, Shield, Zap, ArrowRight, Briefcase } from "lucide-react"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"


import { useTranslation } from 'react-i18next';


export function ModernLandingPageComponent() {

  const { t } = useTranslation();


  const portfolioAllocationData = [
    { name: "Algorithmic  Tech", value: 30, fill: "#60a5fa" },
    { name: "Green Energy", value: 25, fill: "#34d399" },
    { name: "Biotech", value: 20, fill: "#a78bfa" },
    { name: "AI & Robotics", value: 15, fill: "#fbbf24" },
    { name: "Space Exploration", value: 10, fill: "#f472b6" },
  ]

  const returnsData = [
    { date: "2023-01", value: 100 },
    { date: "2023-02", value: 120 },
    { date: "2023-03", value: 115 },
    { date: "2023-04", value: 130 },
    { date: "2023-05", value: 145 },
    { date: "2023-06", value: 160 },
    { date: "2023-07", value: 175 },
    { date: "2023-08", value: 190 },
    { date: "2023-09", value: 210 },
    { date: "2023-10", value: 230 },
    { date: "2023-11", value: 245 },
    { date: "2023-12", value: 270 },
  ]

  const volatilityData = [
    { category: "Algorithmic  Portfolio", value: 8.5 },
    { category: "S&P 500", value: 15.2 },
    { category: "NASDAQ", value: 18.7 },
    { category: "DJIA", value: 14.3 },
  ]

  const sharpeRatioData = [
    { category: "Algorithmic  Portfolio", value: 2.1 },
    { category: "S&P 500", value: 1.4 },
    { category: "NASDAQ", value: 1.6 },
    { category: "DJIA", value: 1.3 },
  ]
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">

      #header
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-gray-900/50 sticky top-0 z-50">
        <a className="flex items-center justify-center" href="#">
          <Briefcase className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold">{t('header.title')}</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            {t('header.aiPortfolio')}
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            {t('header.performance')}
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            {t('header.aboutUs')}
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            {t('header.contact')}
          </a>
        </nav>
      </header>


      #firstsubheader
      <main className="flex-1 w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {t('firstsubheader.portfolioSelectionTitle')}
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl lg:text-2xl">
            {t('firstsubheader.portfolioSelectionDescription')}
          </p>
        </div>
        <div className="space-x-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700" size="lg">
            {t('firstsubheader.startInvesting')}
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700" size="lg">
            {t('firstsubheader.learnMore')}
          </Button>
        </div>
      </div>
    </div>
  </section>

        #firstcards
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="px-4 md:px-6 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {t('firstcards.algorithmicLeapTitle')}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Brain className="h-8 w-8 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-400">{t('firstcards.algoSelectTitle')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('firstcards.algoSelectDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('firstcards.algoSelectContent')}</p>
                  <Button variant="link" className="mt-4 text-blue-400">
                    {t('firstcards.exploreAlgoSelect')}
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 mb-2 text-green-400" />
                  <CardTitle className="text-green-400">{t('firstcards.algorithmicHedgeTitle')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('firstcards.algorithmicHedgeDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('firstcards.algorithmicHedgeContent')}</p>
                  <Button variant="link" className="mt-4 text-green-400">
                    {t('firstcards.discoverAlgorithmicHedge')}
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-yellow-400" />
                  <CardTitle className="text-yellow-400">{t('firstcards.advancedReportingTitle')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('firstcards.advancedReportingDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('firstcards.advancedReportingContent')}</p>
                  <Button variant="link" className="mt-4 text-yellow-400">
                    {t('firstcards.learnAboutReporting')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        #maingraf
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="px-4 md:px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  {t('customSection.algorithmicLeapTitle')}
                </h2>
                <p className="text-zinc-200 md:text-xl">
                  {t('customSection.algorithmicLeapDescription')}
                </p>
                <ul className="space-y-2 text-zinc-200">
                  <li className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-400" /> {t('customSection.advantageSpeed')}
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-green-400" /> {t('customSection.advantageAccuracy')}
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-blue-400" /> {t('customSection.advantageResilience')}
                  </li>
                </ul>
              </div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{t('customSection.portfolioTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={portfolioAllocationData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      />
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">

          #cards advantajes
          <div className="px-4 md:px-6 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {t('advantage.title')}
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">{t('advantage.speed.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('advantage.speed.description')}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-pink-400">{t('advantage.accuracy.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('advantage.accuracy.description')}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{t('advantage.resilience.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{t('advantage.resilience.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        #metrics
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="px-4 md:px-6 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {t('metrics.title')}
            </h2>
            <Tabs defaultValue="returns" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                <TabsTrigger value="returns" className="data-[state=active]:bg-blue-600">{t('metrics.tabs.returns')}</TabsTrigger>
                <TabsTrigger value="volatility" className="data-[state=active]:bg-blue-600">{t('metrics.tabs.volatility')}</TabsTrigger>
                <TabsTrigger value="sharpe" className="data-[state=active]:bg-blue-600">{t('metrics.tabs.sharpe')}</TabsTrigger>
              </TabsList>
              <TabsContent value="returns" className="p-4 bg-gray-900 border-gray-700 rounded-md mt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={returnsData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-gray-400">{t('metrics.returns.description')}</p>
              </TabsContent>
              <TabsContent value="volatility" className="p-4 bg-gray-900 border-gray-700 rounded-md mt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={volatilityData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#34d399" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-gray-400">{t('metrics.volatility.description')}</p>
              </TabsContent>
              <TabsContent value="sharpe" className="p-4 bg-gray-900 border-gray-700 rounded-md mt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sharpeRatioData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#a78bfa" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-2 text-sm text-gray-400">{t('metrics.sharpe.description')}</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        #prefooter
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  {t('section.algorithmicLeapTitle')}
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  <a href="#">{t('section.algorithmicLeapDescription')}</a>
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" size="lg">
                  {t('section.getStarted')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>




      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">{t('footer.copyright')}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-200" href="#">
            {t('footer.termsOfService')}
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-200" href="#">
            {t('footer.privacy')}
          </a>
        </nav>
      </footer>


    </div>
  )

}

