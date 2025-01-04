import { FC, useState, useRef, useEffect } from 'react';

interface Asset {
  icon: string;
  name: string;
  symbol: string;
}

const Calculator: FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [pool, setPool] = useState<{ icon: string; name: string; apr: string } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const assets: Asset[] = [
    {
      icon: './img/tokens/solana.svg',
      name: 'Solana',
      symbol: 'SOL',
    },
    // Add more assets here
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAssetSelect = (asset: Asset) => {
    setSelectedAsset(asset);
    setIsDropdownOpen(false);
    setPool(null);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setPool(null);
    }
  };

  const handleCalculate = () => {
    if (!selectedAsset || !amount) return;
    setIsLoading(true);
    setPool(null);

    setTimeout(() => {
      setPool({
        icon: selectedAsset.icon,
        name: selectedAsset.name,
        apr: '16%',
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="container mx-auto px-4 py-20 lg:py-16 md:pt-4 md:pb-8">
      <h2 className="text-[42px] xl:text-4xl lg:text-3xl font-bold mb-12">
        Calculate your <span className="text-[#028090] bg-[#02809033] px-2">potential profit</span>
      </h2>

      <div className="border border-dashed border-[#b9d5f0] rounded-[20px] p-8 md:p-4">
        <div className="flex items-center gap-8 lg:flex-col lg:w-full">
          <div className="flex-1 lg:w-full">
            <div className="relative" ref={dropdownRef}>
              <button
                className="w-full h-14 flex items-center justify-between
                 bg-white rounded-lg px-4 hover:border-[#6b47fb] transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedAsset ? (
                  <div className="flex items-center gap-2">
                    <img src={selectedAsset.icon} alt={selectedAsset.name} className="w-6 h-6" />
                    <span>{selectedAsset.name}</span>
                  </div>
                ) : (
                  <span className="text-[#8B8E93]">Asset</span>
                )}
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M4.6359 7.49707C5.40417 8.21359 6.59583 8.21359 7.3641 7.49707L10.9476 4.15498C12.2753 2.91665 11.3991 0.692364 9.58347 0.692364H2.41654C0.600935 0.692364 -0.275327 2.91665 1.05244 4.15498L4.6359 7.49707Z"
                    fill="#2D59E9"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="calculator-dropdown">
                  {assets.map((asset, index) => (
                    <div
                      key={index}
                      className="calculator-dropdown-item"
                      onClick={() => handleAssetSelect(asset)}
                    >
                      <img src={asset.icon} alt={asset.name} />
                      <span>{asset.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 lg:w-full">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="w-full h-14 bg-white rounded-lg px-4 focus:border-[#6b47fb] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex-1 lg:w-full">
            <div className="relative">
              <input
                type="text"
                readOnly
                placeholder="Most profitable pool"
                value={
                  isLoading
                    ? 'Searching for the most profitable pool...'
                    : pool
                      ? `${pool.name} ${pool.apr} APR`
                      : ''
                }
                className={`w-full h-14 bg-white  rounded-lg px-4 focus:border-[#6b47fb] focus:outline-none transition-colors ${
                  isLoading ? 'text-[#2752e7]' : ''
                }`}
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="animate-spin h-5 w-5 text-[#6b47fb]" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="h-14 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] text-white
             px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap hover:text-yellow"
          >
            Start Earn
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
