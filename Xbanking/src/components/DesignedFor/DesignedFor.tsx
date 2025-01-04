interface BenefitItem {
  icon: string;
  title: string;
  description?: string;
}

export default function DesignedFor() {
  const designed: BenefitItem[] = [
    {
      icon: './img/designed/moon.svg',
      title: 'VC Funds',
    },
    {
      icon: './img/designed/flower.svg',
      title: 'Exchanges',
    },
    {
      icon: './img/designed/x.svg',
      title: 'Custodians',
    },
    {
      icon: './img/designed/star.svg',
      title: 'Family Offices',
    },
    {
      icon: './img/designed/ellipse.svg',
      title: 'Foundations',
    },
    {
      icon: './img/designed/triangle.svg',
      title: 'Asset Managers',
    },
    {
      icon: './img/designed/triangleTwo.svg',
      title: 'Private Investors',
    },
    {
      icon: './img/designed/cirkle.svg',
      title: 'TradFi',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 lg:py-12 md:py-4">
      <h3 className="text-[42px] xl:text-4xl lg:text-3xl leading-none lgTab:text-2xl font-bold mb-10 lg:mb-6">
        <span className="text-[#2752e7] relative px-1 leading-none inline-block mb-2">
          <span className="relative z-10 leading-none">Designed for</span>
          <span className="absolute inset-0 bg-[rgb(37,82,231,0.2)] -z-0"></span>
        </span>{' '}
      </h3>

      <div className="grid grid-cols-8 lg:grid-cols-4 md:grid-cols-2 gap-2">
        {designed.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-h-52 text-center p-6 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-8" />
            <h3 className="text-base leading-none font-bold">{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
