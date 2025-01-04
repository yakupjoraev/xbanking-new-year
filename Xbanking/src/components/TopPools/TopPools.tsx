import { FC } from 'react';
import Solana from '/img/tokens/solana.svg';
import Polkadot from '/img/tokens/polkadot.png';
import Ethereum from '/img/tokens/ethereum.png';
import Bitcoin from '/img/tokens/bitcoin.png';
import Toncoin from '/img/tokens/toncoin.png';
import XBanking from '/img/tokens/xbanking.svg';

const TopPools: FC = () => {
  const topTokens = [
    { name: 'Solana', symbol: 'SOL', apr: '16%', icon: Solana },
    { name: 'Polkadot', symbol: 'DOT', apr: '20%', icon: Polkadot },
    { name: 'Ethereum', symbol: 'ETH', apr: '12%', icon: Ethereum },
    { name: 'Bitcoin', symbol: 'BTC', apr: '8%', icon: Bitcoin },
    { name: 'Toncoin', symbol: 'TON', apr: '24%', icon: Toncoin },
  ];

  const otherRates = [
    { name: 'Toncoin', rate: '38%', icon: Toncoin },
    { name: 'Polkadot', rate: '30%', icon: Polkadot },
    { name: 'Polkadot', rate: '28%', icon: Polkadot },
    { name: 'Ethereum', rate: '27%', icon: Ethereum },
    { name: 'Toncoin', rate: '27%', icon: Toncoin },
    { name: 'Ethereum', rate: '26%', icon: Ethereum },
    { name: 'Polkadot', rate: '22%', icon: Polkadot },
    { name: 'Solana', rate: '20%', icon: Solana },
    { name: 'Solana', rate: '20%', icon: Solana },
    { name: 'Ethereum', rate: '14%', icon: Ethereum },
    { name: 'Bitcoin', rate: '12%', icon: Bitcoin },
    { name: 'Bitcoin', rate: '12%', icon: Bitcoin },
  ];

  return (
    <section className="py-20 lg:py-12">
      <div className="container">
        <div className="px-4">
          <h2 className="text-[42px] xl:text-4xl lg:text-3xl font-bold leading-none">
            Top 5{' '}
            <span className="text-[#2fbf71] bg-[rgba(47,191,113,0.2)] px-2 rounded inline-block mb-2">
              most profitable
            </span>{' '}
            pools
          </h2>
          <p className="text-[#1f2226] text-base mb-8">
            Sollicitudin faucibus donec eu ac ornare aliquet integer. Dictum netus velit vivamus
            suspendisse
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col bg-white rounded-2xl ">
            {/* Top Pools Table */}
            <div className="rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[1fr,100px,100px] py-4 px-6 bg-[#d7e3f8]">
                <div className="text-[#1f2226] font-bold text-xs">Token</div>
                <div className="text-[#1f2226] font-bold text-xs">APR</div>
                <div></div>
              </div>

              {topTokens.map((token, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr,100px,100px] items-center py-6 px-6 border-t border-[#E8EDF6] relative "
                >
                  <div className="flex items-center gap-3">
                    <img src={token.icon} alt={token.name} className="w-9 h-9" />
                    <span className="font-bold text-base text-[#0c0c0c] md:text-sm">
                      {token.name}
                    </span>
                    <span className="font-bold text-base text-[#bcbcbc] md:text-sm">
                      {token.symbol}
                    </span>
                  </div>
                  <div className="font-bold text-base text-[#0c0c0c] md:text-sm">{token.apr}</div>
                  <button
                    className="min-w-20 w-fit py-2.5 px-2 rounded-lg bg-gradient-to-r ml-auto from-[#05cdfe] to-[#6b47fb] 
                            text-white font-semibold  text-xs
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
                  >
                    Earn
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 bg-white rounded-[20px] py-10 px-8">
            <div className="flex items-center justify-between md:flex-col md:items-start md:gap-3">
              <h2 className="text-2xl xl:text-xl lg:text-lg font-bold">
                Other{' '}
                <span className="text-[#2752e7] bg-[rgba(39,82,231,0.2)] px-2 rounded">
                  top pools
                </span>{' '}
                rates
              </h2>
              <img src={XBanking} alt="XBanking" className="h-5" />
            </div>

            <div className="grid grid-cols-1 gap-3 mt-4 bg-lines relative">
              {otherRates.map((rate, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={rate.icon} alt={rate.name} className="w-5 h-5" />
                  <div className="flex-1 flex items-center  gap-2">
                    <div
                      className="flex items-center h-5 bg-[#e7e7e7] rounded-full py-1 px-2"
                      style={{ width: rate.rate }}
                    >
                      <span className="text-xs text-[#0c0c0c] min-w-[70px]">{rate.name}</span>

                      <div className="flex-1 h-2 bg-transparent rounded-full">
                        <div className="h-full bg-[#e7e7e7] rounded-full relative">
                          {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-[#2752e7]"></div> */}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#0c0c0c] ml-3">{rate.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="min-w-44 w-fit py-3 px-6 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
          >
            See All Pools
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPools;
