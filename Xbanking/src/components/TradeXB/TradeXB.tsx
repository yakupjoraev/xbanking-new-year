import MarketIcon1 from '/img/community/market-1.svg';
import MarketIcon2 from '/img/community/market-2.svg';
import MarketIcon3 from '/img/community/market-3.svg';
import MarketIcon4 from '/img/community/market-4.svg';

import TradeIcon1 from '/img/trade/1.svg';
import TradeIcon2 from '/img/trade/2.svg';
import TradeIcon3 from '/img/trade/3.svg';
import TradeIcon4 from '/img/trade/4.svg';
import TradeIcon5 from '/img/trade/5.svg';
import TradeIcon6 from '/img/trade/6.svg';

export default function TradeXB() {
  return (
    <div className="flex flex-col gap-12 container mx-auto px-4 py-16 md:py-8" id="trade">
      <div className="container mx-auto px-11 py-8 bg-white rounded-lg">
        <ul className="grid grid-cols-6 lg:grid-cols-2 md:grid-cols-1 gap-4 align-center">
          <li className="flex items-center justify-center">
            <img src={TradeIcon1} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={TradeIcon2} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={TradeIcon3} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={TradeIcon4} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={TradeIcon5} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={TradeIcon6} alt="icon" />
          </li>
        </ul>
      </div>

      <div className="container mx-auto px-11 py-8 bg-white rounded-lg">
        <ul className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4 align-center">
          <li className="flex items-center justify-center">
            <img src={MarketIcon1} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={MarketIcon2} alt="icon" />
          </li>
          <li className="flex items-center justify-center">
            <img src={MarketIcon3} alt="icon" />
          </li>
          <li>
            <img src={MarketIcon4} alt="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
