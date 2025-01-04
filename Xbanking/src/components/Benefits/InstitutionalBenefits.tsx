interface BenefitItem {
  icon: string;
  title: string;
  description?: string;
}

export default function InstitutionalBenefits() {
  const benefits: BenefitItem[] = [
    {
      icon: './img/benefits/star.svg',
      title: 'Undelegate in seconds',
    },
    {
      icon: './img/benefits/support.svg',
      title: 'Dedicated Support',
    },
    {
      icon: './img/benefits/document.svg',
      title: 'Insurance',
    },
    {
      icon: './img/benefits/chain.svg',
      title: 'Non-custodial & slashing-free',
    },
    {
      icon: './img/benefits/top.svg',
      title: '99.9% uptime',
    },
    {
      icon: './img/benefits/scale.svg',
      title: 'Compliance & risk mitigation',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h3 className="text-[42px] xl:text-4xl lg:text-3xl leading-none lgTab:text-2xl font-bold mb-10 lg:mb-6">
        <span className="text-[#fc60a8] relative px-1 leading-none inline-block mb-2">
          <span className="relative z-10 leading-none">Benefits</span>
          <span className="absolute inset-0 bg-[rgb(252,96,168,0.2)] -z-0"></span>
        </span>
      </h3>

      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-h-52 text-center p-6 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-8" />
            <h3 className="text-base leading-none font-bold max-w-40">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
