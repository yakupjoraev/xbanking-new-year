import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Community from './components/Community/Community';
import FAQ from './components/FAQ/FAQ';
import Security from './components/Security/Security';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import TopPools from './components/TopPools/TopPools';
import GetStarted from './components/GetStarted/GetStarted';
import Hero from './components/Hero/Hero';
import Calculator from './components/Calculator/Calculator';
import FadeInOnScroll from './components/FadeInOnScroll/FadeInOnScroll';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F5FA]">
      <Header />

      <div className="flex-grow mt-[120px] lgTab:mt-0 max-w-7xl mx-auto">
        <div className="main-bg">
          <FadeInOnScroll>
            <Hero />
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll delay={200}>
          <GetStarted />
        </FadeInOnScroll>
        <FadeInOnScroll delay={400}>
          <TopPools />
        </FadeInOnScroll>
        <FadeInOnScroll delay={600}>
          <Calculator />
        </FadeInOnScroll>
        <FadeInOnScroll delay={800}>
          <HowItWorks />
        </FadeInOnScroll>
        <FadeInOnScroll delay={800}>
          <Services />
        </FadeInOnScroll>
        <FadeInOnScroll delay={800}>
          <Security />
        </FadeInOnScroll>
        <FadeInOnScroll delay={800}>
          <FAQ />
        </FadeInOnScroll>
        <FadeInOnScroll delay={800}>
          <Community />
        </FadeInOnScroll>
      </div>

      <Footer />
    </div>
  );
}

export default App;
