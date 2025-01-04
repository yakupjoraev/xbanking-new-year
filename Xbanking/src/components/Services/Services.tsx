import PhoneImage from '/img/services/phone.png';
import SphereImage from '/img/services/sphere.png';
import HighVoltageIcon from '/img/services/high-voltage.png';
import CoinIcon from '/img/services/coin.png';
import LinkIcon from '/img/services/link.png';
import StarIcon from '/img/services/star.png';
import ClipboardIcon from '/img/services/clipboard.png';
import ChainsIcon from '/img/services/chains.png';
import ChartIcon from '/img/services/chart-increasing.png';
import BalanceIcon from '/img/services/balance-scale.png';
import BicepsIcon from '/img/services/biceps.png';

export default function Services() {
  return (
    <section className="py-20 lg:py-12" id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
          {/* Super DEX Block */}
          <div className="relative rounded-[32px] p-12 lg:p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 p-2 py-1 border border-[#ededed] bg-white rounded-md mb-8">
                <img src={BicepsIcon} alt="" className="w-4 h-4" />
                <span className="text-sm text-[#2752e7]">
                  The largest DEX's & Bridge's aggregator
                </span>
              </div>

              <h2 className="text-[42px] xl:text-4xl lg:text-3xl leading-none font-bold mb-8">
                Super DEX
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src={HighVoltageIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">51 Blockchains</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={CoinIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">All tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={LinkIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">100+ Bridges, DEXes</span>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-black">Swap & Bridge in one interface</p>
                <p className="text-black">Cross-chain trading and token swap</p>
              </div>

              <button
                className="min-w-44 w-fit py-3 px-6 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
              >
                Learn More
              </button>
            </div>

            <img
              src={PhoneImage}
              alt="Phone Interface"
              className="absolute right-0 bottom-0 top-0 left-0 w-full h-full z-0 object-cover"
            />
          </div>

          {/* Institutional Services Block */}
          <div className="relative bg-white rounded-[32px] p-12 lg:p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 p-2 py-1 border border-[#ededed] bg-white rounded-md mb-8">
                <img src={BicepsIcon} alt="" className="w-4 h-4" />
                <span className="text-sm text-[#2752e7]">
                  The largest DEX's & Bridge's aggregator
                </span>
              </div>

              <h2 className="text-[42px] xl:text-4xl lg:text-3xl leading-none font-bold mb-8">
                Institutional Services
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src={StarIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ClipboardIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">Insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ChainsIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">
                    Non-custodial & slashing-free
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={ChartIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">99.9% uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={BalanceIcon} alt="" className="w-4 h-4" />
                  <span className="text-black font-bold text-base">
                    Compliance & risk mitigation
                  </span>
                </div>
              </div>

              <button
                className="min-w-44 w-fit py-3 px-6 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
              >
                Swap
              </button>
            </div>

            <img
              src={SphereImage}
              alt="Sphere"
              className="absolute right-0 bottom-0 top-0 left-0 w-full h-full z-0 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
