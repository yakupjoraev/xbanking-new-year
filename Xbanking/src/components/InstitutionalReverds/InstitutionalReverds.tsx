import { FC } from 'react';

const InstitutionalReverds: FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 xl:py-8 xl:pt-8 lg:py-16 md:py-4">
      <div className="border border-dashed border-[#b9d5f0] rounded-[20px] p-8 md:p-4">
        <div className="flex items-center justify-center gap-8 lg:flex-col lg:w-full">
          <h3 className="text-[32px] font-bold text-center text-[#1f2226] leading-none tracking-tight xl:text-xl lg:text-lg">
            Integrate the services of hundreds of
            <span className="text-[#2FBF71] bg-[#2FBF71]/10 px-2 rounded inline-block mb-2">
              DeFi platforms
            </span>
            (such as <br className="md:hidden" />
            Uniswap, Curve, Compound and many more) into your business using{' '}
            <br className="md:hidden" />
            the
            <span className="text-[#ffba0c] bg-[#FFB800]/10 px-2 rounded inline-block my-2">
              XBANKING API
            </span>
            through a single interface.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalReverds;
