import { FC } from 'react';
import SelectToken from '/img/started/token.svg';
import ConnectWallet from '/img/started/wallet.svg';
import GetRewards from '/img/started/rewords.svg';
import Unstake from '/img/started/unlocked.png';
import SlashingFree from '/img/started/dizzy.png';
import Decentralized from '/img/started/chains.png';
import Support from '/img/started/ring-buoy.png';

const GetStarted: FC = () => {
  const steps = [
    {
      number: '01',
      icon: SelectToken,
      title: 'Select a token',
      subtitle: '(pool)',
    },
    {
      number: '02',
      icon: ConnectWallet,
      title: 'Connect Wallet',
      subtitle: 'and place assets',
    },
    {
      number: '03',
      icon: GetRewards,
      title: 'Get rewards',
      subtitle: 'anytime',
    },
  ];

  const features = [
    {
      icon: Unstake,
      title: 'Unstake',
      subtitle: 'anytime',
    },
    {
      icon: SlashingFree,
      title: 'Slashing-free',
    },
    {
      icon: Decentralized,
      title: 'Decentralized',
      subtitle: 'and secure',
    },
    {
      icon: Support,
      title: 'Support 24/7',
    },
  ];

  return (
    <section className="py-20 lg:py-12 2xl:px-5">
      <div className="container">
        <div className="flex flex-col">
          <h2 className="text-[42px] xl:text-4xl lg:text-3xl font-bold mb-12 lg:mb-6">
            <span className="text-[#2752e7] bg-[rgba(68,97,242,0.2)] px-2 rounded">
              Get Started
            </span>{' '}
            in 30 Seconds!
          </h2>

          {/* Steps */}
          <div
            className="relative flex items-center justify-between w-full  
          mb-12 mt-4 bg-radial-gradient py-14 px-20 lg:flex-col lg:gap-4  
          lg:items-start lg:p-5  lg:mb-6 lg:mt-6"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col relative pr-20 2xl:pr-0">
                <div className="">
                  <img src={step.icon} alt={step.title} className="h-12 mb-6" />
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-full w-full h-[2px] 2xl:hidden">
                      <svg
                        width="49"
                        height="16"
                        viewBox="0 0 49 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.7071 8.70711C49.0976 8.31658 49.0976 7.68342 48.7071 7.29289L42.3431 0.928932C41.9526 0.538408 41.3195 0.538408 40.9289 0.928932C40.5384 1.31946 40.5384 1.95262 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM0 9H48V7H0V9Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-[#1f2226] text-2xl font-bold mb-1">{step.title}</div>
                <div className="text-[#8B8E93] text-xl">{step.subtitle}</div>
                <div className="absolute left-3/4 text-[#bcbcbc] text-2xl font-light">
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/*tivatures */}
          <div className="grid grid-cols-4 gap-10 w-full lg:grid-cols-2 md:grid-cols-1 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white rounded-[20px] p-4 min-h-52"
              >
                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
                <div className="text-[#1f2226] text-[20px] font-bold mb-1">{feature.title}</div>
                {feature.subtitle && (
                  <div className="text-[#1f2226] text-[20px] font-bold">{feature.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
