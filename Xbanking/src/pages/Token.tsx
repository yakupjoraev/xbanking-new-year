import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FAQ from '../components/FAQ/FAQ';
import Community from '../components/Community/Community';
import Tokenomics from '../components/Tokenomics/Tokenomics';
import Benefits from '../components/Benefits/Benefits';
import TokenHero from '../components/TokenHero/TokenHero';
import Reverds from '../components/Reverds/Reverds';
import TradeXB from '../components/TradeXB/TradeXB';
import FadeInOnScroll from '../components/FadeInOnScroll/FadeInOnScroll';
import '../index.css';

export default function Token() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F5FA]">
      <Header />

      <div className="flex-grow mt-[120px] lgTab:mt-0 max-w-7xl mx-auto ">
        <div className="flex flex-col ">
          <div className="token-hero-bg">
            <FadeInOnScroll>
              <TokenHero />
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll delay={200}>
            <Benefits />
          </FadeInOnScroll>
          <FadeInOnScroll delay={400}>
            <Reverds />
          </FadeInOnScroll>
          <FadeInOnScroll delay={600}>
            <TradeXB />
          </FadeInOnScroll>
          <FadeInOnScroll delay={800}>
            <Tokenomics />
          </FadeInOnScroll>
          <FadeInOnScroll delay={800}>
            <FAQ />
          </FadeInOnScroll>
          <FadeInOnScroll delay={800}>
            <Community className="hidden" />
          </FadeInOnScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
}
