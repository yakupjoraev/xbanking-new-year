interface TokenomicsItem {
  title: string;
  percentage: string;
  description: string;
  lockPeriod?: string;
  color: string;
}

export default function Tokenomics() {
  const tokenomicsData: TokenomicsItem[] = [
    {
      title: 'Liquidity',
      percentage: '41.6%',
      description: 'Circulating supply on DEXs, CEXs.',
      color: '#2fbf71',
    },
    {
      title: 'Team',
      percentage: '10.6%',
      description: 'Rewards for the project team and engaged professionals.',
      lockPeriod: 'Locked until June 9, 2025.',
      color: '#2752e7',
    },
    {
      title: 'Foundation',
      percentage: '14.4%',
      description:
        'Foundation Reserves. Assets are used to sponsor project initiatives and grants. DAO activities.',
      lockPeriod: 'Locked until June 9, 2025.',
      color: '#ffba0c',
    },
    {
      title: 'Staking',
      percentage: '19%',
      description: 'Rewards for staking and other onchain activities.',
      color: '#fc60a8',
    },
    {
      title: 'PreSale',
      percentage: '3.4%',
      description: 'Community and pre-sale rounds.',
      lockPeriod: 'Locked until June 9, 2025.',
      color: '#7765e3',
    },
    {
      title: 'Marketing',
      percentage: '11%',
      description: 'Marketing and promotion of the project and token.',
      lockPeriod: 'Locked until January 1, 2025.',
      color: '#028090',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-6">
      <h3 className="text-[42px] xl:text-4xl lg:text-3xl lgTab:text-2xl font-bold mb-6 lgTab:mb-4">
        <span className="text-[#008cfe] relative px-1">
          <span className="relative z-10 inline-block mb-2">Tokenomics</span>
          <span className="absolute inset-0  bg-[rgba(0,140,254,0.2)] -z-0"></span>
        </span>
      </h3>
      <p className="text-[#1f2226] text-base mb-8 max-w-lg">
        With a dynamic tokenomics structure, we ensure a robust, sustainable ecosystem that fuels
        growth and empowers our community:
      </p>

      <div className="flex lg:flex-wrap flex-nowrap gap-8">
        <div className="lg:w-full w-full">
          <div className="grid grid-cols-3 md:grid-cols-1">
            {tokenomicsData.map((item, index) => {
              const isLastRow = index >= tokenomicsData.length - 3; // Последняя строка
              const isRightColumn = (index + 1) % 3 === 0; // Последний столбец в ряду

              let borderClasses = 'border-gray-200'; // Базовый цвет бордера

              if (!isLastRow) borderClasses += ' border-b'; // Добавить нижнюю границу, если не в последней строке
              if (!isRightColumn) borderClasses += ' border-r'; // Добавить правую границу, если не в правом столбце

              return (
                <div
                  key={index}
                  className={`p-5 min-h-40 md:border-0  md:border-b md:border-gray-200 md:p-0 md:py-4 ${borderClasses}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.percentage}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-[#1f2226] text-sm">{item.description}</p>
                    {item.lockPeriod && (
                      <p className="text-sm text-[#1f2226] mt-2 font-bold">🔒 {item.lockPeriod}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:w-full w-[400px] flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden md:size-full">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-180">
              {
                tokenomicsData.reduce(
                  (acc, item, index) => {
                    const percentage = parseFloat(item.percentage);
                    const previousPercentage = acc.previousPercentage;
                    const offset = previousPercentage * 3.6;
                    const dash = percentage * 3.6;

                    acc.previousPercentage += percentage;

                    return {
                      previousPercentage: acc.previousPercentage,
                      elements: [
                        ...acc.elements,
                        <circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="60"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="80"
                          strokeDasharray={`${dash} ${360 - dash}`}
                          strokeDashoffset={-offset}
                          className="transition-all duration-300"
                        />,
                      ],
                    };
                  },
                  { previousPercentage: 0, elements: [] as JSX.Element[] }
                ).elements
              }
              <circle cx="50" cy="50" r="25" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
