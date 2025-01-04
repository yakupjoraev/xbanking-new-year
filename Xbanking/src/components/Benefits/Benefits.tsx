import XBanking from '/img/benefits/xb_icon.png';

interface BenefitItem {
  icon: string;
  title: string;
  description?: string;
}

export default function Benefits() {
  const benefits: BenefitItem[] = [
    {
      icon: './img/benefits/growth.svg',
      title: 'High potential profits from XB price growth',
    },
    {
      icon: './img/benefits/gift.svg',
      title: 'Free tokens and NFT, Bonuses, Rewards',
    },
    {
      icon: './img/benefits/staking.svg',
      title: 'High yields from staking',
    },
    {
      icon: './img/benefits/community.svg',
      title:
        'Participation in community development, contributing to the overall success of the project.',
    },
    {
      icon: './img/benefits/ecosystem.svg',
      title: 'Payments within the ecosystem',
    },
    {
      icon: './img/benefits/access.svg',
      title: 'Early access to services',
    },
    {
      icon: './img/benefits/dao.svg',
      title: 'Voting, DAO management.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h3 className="text-[42px] xl:text-4xl lg:text-3xl leading-none lgTab:text-2xl font-bold mb-10 lg:mb-6">
        <span className="text-[#fc60a8] relative px-1 leading-none inline-block mb-2">
          <span className="relative z-10 leading-none">Benefits</span>
          <span className="absolute inset-0 bg-[rgb(252,96,168,0.2)] -z-0"></span>
        </span>{' '}
        for XB token holders
      </h3>

      <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-h-52 text-center p-6 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-8" />
            <h3 className="text-base leading-none font-bold">{benefit.title}</h3>
          </div>
        ))}

        <div className="bg-gradient-to-r from-[#6C5DD3] to-[#0084FF] rounded-[20px] p-8 flex items-center justify-between">
          <div className="flex items-center flex-col gap-4 relative pt-8 md:w-full md:pt-24">
            <img
              src={XBanking}
              alt="XB Token"
              className="w-32 h-auto  absolute -top-24 left-1/2 transform -translate-x-1/2 md:-top-16"
            />
            <h3 className="text-lg leading-none text-white text-center font-bold">
              Start staking right now and get more benefits
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
