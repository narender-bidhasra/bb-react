import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import BannerSection from './components/Banner'
import Endless from './components/EndlessFood'
import AboutSection from './components/AboutUs'
import RevolutionSection from './components/Revolution'
import BeeLiciousSection from './components/BeeLicious'
import SinglOfferSection from './components/SingleOffer'


function App() {
  return (
    <div>
      <WithHeaderFooter>
        <BannerSection />
        <Endless />
        <AboutSection />
        <RevolutionSection />
        <BeeLiciousSection />
        <SinglOfferSection />
      </WithHeaderFooter>
    </div>
  );
}

export default App;

const WithHeaderFooter = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}