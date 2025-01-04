import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Community from '../components/Community/Community';
import InstitutionalHero from '../components/InstitutionalHero/InstitutionalHero';
import DesignedFor from '../components/DesignedFor/DesignedFor';
import InstitutionalReverds from '../components/InstitutionalReverds/InstitutionalReverds';
import InstitutionalBenefits from '../components/Benefits/InstitutionalBenefits';
import Why from '../components/Why/Why';
import Form from '../components/Form/Form';
import FadeInOnScroll from '../components/FadeInOnScroll/FadeInOnScroll';
import '../index.css';

export default function Institutional() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F5FA]">
      <Header />

      <div className="flex-grow mt-[120px] lgTab:mt-0 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="token-hero-bg">
            <FadeInOnScroll>
              <InstitutionalHero />
            </FadeInOnScroll>
          </div>
          <FadeInOnScroll delay={200}>
            <DesignedFor />
          </FadeInOnScroll>
          <FadeInOnScroll delay={400}>
            <InstitutionalReverds />
          </FadeInOnScroll>
          <FadeInOnScroll delay={600}>
            <InstitutionalBenefits />
          </FadeInOnScroll>
          <FadeInOnScroll delay={800}>
            <Why />
          </FadeInOnScroll>
          <FadeInOnScroll delay={800}>
            <Form />
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
