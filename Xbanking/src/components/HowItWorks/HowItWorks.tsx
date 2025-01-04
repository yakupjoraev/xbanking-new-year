export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-12 overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-1 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[42px] xl:text-4xl lg:text-3xl font-bold leading-none mb-9 lg:mb-4">
                How{' '}
                <span className="text-[#2868d0] bg-[rgba(40,104,208,0.2)] px-2 rounded inline-block mb-2">
                  XBANKING
                </span>{' '}
                works.
              </h1>
              <div className="max-w-[500px]">
                <p className="text-[#1f2226] text-lg">
                  You no longer need to search for the most profitable ways to place your tokens for
                  passive income - we have already <br /> done it!
                </p>
              </div>
              <div className="max-w-[500px]">
                <p className="text-[#1f2226] text-lg">
                  Control and manage your assets in a single Dashboard.
                </p>
              </div>
              <div className="max-w-[500px]">
                <p className="text-[#1f2226] text-lg">
                  The most profitable pools, absolute safety of assets, ease of use in 2 clicks -
                  that's what we offer!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-14 gap-y-2 mt-9 lg:mt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="text-[32px] xl:text-3xl lg:text-2xl font-medium">17.600+</h2>
                <p className="text-[#0c0c0c] text-base">Pools</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="text-[32px] xl:text-3xl lg:text-2xl font-medium">300+</h2>
                <p className="text-[#0c0c0c] text-base">Protocols</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <h2 className="text-[32px] xl:text-3xl lg:text-2xl font-medium">46</h2>
                <p className="text-[#0c0c0c] text-base">Blockchains</p>
              </div>
            </div>

            <button
              className="min-w-44 w-fit py-3 px-6 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
            >
              Start Earn
            </button>
          </div>

          <div className="relative mt-8 pr-4 md:pr-0">
            <div className="w-full max-w-[640px] mx-auto xl:max-w-[400px] md:max-w-[280px]">
              <div className="relative h-[640px] xl:h-[400px] md:h-[280px]">
                <div className="animate-wrapper"></div>
                <div className="animate-inner"></div>
                <div className="animate-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
