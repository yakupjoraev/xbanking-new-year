import { FC } from 'react';
import BicepsIcon from '/img/services/biceps.png';

const Hero: FC = () => {
  const stats = [
    {
      value: '17.600+',
      label: 'Pools/Pairs',
    },
    {
      value: '$3.2B+',
      label: 'Placed Assets',
    },
    {
      value: '46.000+',
      label: 'Users',
    },
    {
      value: '152/49',
      label: 'Tokens/Chains',
    },
  ];

  return (
    <section className="flex items-center ">
      <div className="container  z-10">
        <div className="flex flex-col items-center text-center max-w-5xl p-4 mx-auto">
          <div className="inline-flex items-center gap-2 p-2 py-1 border border-[#ededed] bg-white rounded-md mb-8">
            <img src={BicepsIcon} alt="" className="w-4 h-4" />
            <span className="text-sm text-[#2752e7]">
              Trusted by the best in business and blockchain
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[80px] font-bold text-[#1f2226] leading-none mb-8 tracking-tight xl:text-5xl lg:text-4xl">
            One-stop access to{' '}
            <span className="text-[#2FBF71] bg-[#2FBF71]/10 px-2 rounded inline-block mb-3">
              Staking
            </span>
            <br className="md:hidden" />
            <span className="text-[#FFB800] bg-[#FFB800]/10 px-2 rounded inline-block mb-3">
              Restaking
            </span>{' '}
            and{' '}
            <span className="text-[#4461F2] bg-[#4461F2]/10 px-2 rounded inline-block mb-3">
              Liquid Pools
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#1f2226] text-lg mb-9 text-left">
            XBANKING is the leading decentralized DeFi protocol for staking, restaking and liquid
            pools. We aggregate tens of thousands of staking, restaking, and liquid pools so that
            you can get the maximum yield from your cryptocurrency. Place your assets with{' '}
            <a href="#" className="text-[#2752e7] underline">
              high returns
            </a>
            , simply, decentralized and{' '}
            <a href="#" className="text-[#2752e7] underline">
              absolutely secure
            </a>
            .
          </p>

          {/* CTA Button */}
          <button
            className="min-w-44 w-fit py-5 px-5 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-32 lg:min-h-14"
          >
            Start Earn
          </button>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 w-full max-w-4xl mt-40 xl:mt-20 lg:mt-16 lg:grid-cols-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[32px] font-bold text-[#0C0C0C] mb-2">{stat.value}</div>
                <div className="text-[#8B8E93] text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
