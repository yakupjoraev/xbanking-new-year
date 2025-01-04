import { FC } from 'react';

const Reverds: FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-16 md:py-8">
      <div className="border border-dashed border-[#b9d5f0] rounded-[20px] p-8 md:p-4">
        <div className="flex items-center justify-center gap-8 lg:flex-col lg:w-full">
          <h3 className="text-[48px] font-bold text-center text-[#1f2226] leading-none tracking-tight xl:text-5xl lg:text-4xl">
            <span className="text-[#2FBF71] bg-[#2FBF71]/10 px-2 rounded inline-block mb-2">
              $390000
            </span>
            was given to XB holders in the form
            <br />
            of additional up many
            <span className="text-[#2752e7] bg-[#2752e7]/10 px-2 rounded inline-block mb-2">
              rewards in 2024
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Reverds;
