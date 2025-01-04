import { FC } from 'react';

const TokenHero: FC = () => {
  return (
    <section className="flex items-center pt-20 pb-40 lg:pb-20 lg:pt-0 md:pb-4 md:pt-8 relative z-10">
      <div className="container z-10">
        <div className="flex flex-col items-center text-center max-w-5xl p-4 mx-auto">
          {/* Main Heading */}
          <h1 className="text-[80px] font-bold text-[#1f2226] leading-none mb-8 tracking-tight xl:text-5xl lg:text-4xl">
            <span className="text-[#2FBF71] bg-[#2FBF71]/10 px-2 rounded inline-block mb-2">
              Dividend Token
            </span>
            that opens
            <br className="md:hidden" />
            up many
            <span className="text-[#FFB800] bg-[#FFB800]/10 px-2 rounded inline-block mb-2">
              Passive Income
            </span>{' '}
            <br className="md:hidden" />
            opportunities
          </h1>

          {/* CTA Button */}
          <button
            className="min-w-44 w-fit py-5 px-5 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-32 lg:min-h-14"
          >
            Start Staking
          </button>
        </div>
      </div>
    </section>
  );
};

export default TokenHero;
