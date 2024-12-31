import { useState, useEffect } from 'react';
import Logo from '/img/logo.svg';
import Birthday from '/img/birthday.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header
      className={`fixed lg:relative top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:px-5 xl:py-6 lg:py-4 ${
        isScrolled ? 'shadow-sm bg-white lg:shadow-none' : ''
      }`}
    >
      <div className="mx-auto px-4 xl:px-8 w-full max-w-[1760px] md:px-0">
        <nav className="flex justify-between items-center gap-20 lg:gap-6 md:gap-4">
          <a href="#" className="w-fit xl:w-40 lg:w-32 lg:min-w-32">
            <div className="flex items-center">
              <img src={Logo} alt="logo icon" className="max-w-full" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="flex items-center justify-center flex-grow lg:hidden gap-12 xl:gap-6">
            <ul className="flex gap-12 items-center xl:gap-6">
              <li>
                <a
                  className="text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                  href="#"
                >
                  Earn
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                  href="#"
                >
                  Trade
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                  href="#"
                >
                  Institutional
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                  href="#"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  className="text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                  href="#"
                >
                  Token
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            className="hidden lg:flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 lg:order-3"
            onClick={toggleMenu}
          >
            <span
              className={`w-6 h-0.5 bg-[#1f2226] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1f2226] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1f2226] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:block ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } hidden`}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="#"
                    className="text-xl text-[#1f2226] hover:text-[#2752e7] transition-colors"
                    onClick={toggleMenu}
                  >
                    Earn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl text-[#1f2226] hover:text-[#2752e7] transition-colors"
                    onClick={toggleMenu}
                  >
                    Trade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl text-[#1f2226] hover:text-[#2752e7] transition-colors"
                    onClick={toggleMenu}
                  >
                    Institutional
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl text-[#1f2226] hover:text-[#2752e7] transition-colors"
                    onClick={toggleMenu}
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xl text-[#1f2226] hover:text-[#2752e7] transition-colors"
                    onClick={toggleMenu}
                  >
                    Token
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-fit md:w-full lg:order-2">
            <ul className="flex gap-5 items-center md:gap-3 md:flex-col md:ml-auto md:justify-end">
              <li className="md:hidden">
                <a href="" target="_blank">
                  <img src={Birthday} alt="Certik" className="w-36 xl:w-28 lg:w-20" />
                </a>
              </li>

              <li className="flex items-center gap-4">
                <a
                  href=""
                  className="min-w-32 w-fit py-3 px-6 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded 
                            text-white font-semibold text-base border-2
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24"
                >
                  Launch App
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
