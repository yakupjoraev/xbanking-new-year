export default function Why() {
  return (
    <section className="py-20 lg:py-12 overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[42px] xl:text-4xl lg:text-3xl font-bold leading-none mb-9 lg:mb-4">
                How{' '}
                <span className="text-[#2868d0] bg-[rgba(40,104,208,0.2)] px-2 rounded inline-block mb-2">
                  XBANKING
                </span>
              </h1>
              <div className="max-w-[500px] lg:max-w-full">
                <p className="text-[#1f2226] text-lg">
                  XBANKING offers an optimal solution for institutional clients in the DeFi space,
                  providing high-yield DeFi pools and supporting over 150+ tokens across 50+
                  blockchains. The platform ensures full control over assets, guaranteeing a high
                  level of security, transparency, and compliance with industry standards. With its
                  innovative solutions and flexibility,
                </p>
              </div>
              <div className="max-w-[500px] lg:max-w-full">
                <p className="text-[#1f2226] text-lg">
                  XBANKING provides institutional investors with effective tools for managing
                  cryptocurrency assets. The platform’s highly skilled technical support and
                  reliability make it the ideal choice for professionals in the cryptocurrency
                  sector.
                </p>
              </div>
            </div>
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
