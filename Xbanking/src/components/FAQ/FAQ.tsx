import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
  {
    question:
      'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui Tincidunt enim consequat sit?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam. Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
  {
    question: 'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
  {
    question: 'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
  {
    question: 'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
  {
    question: 'Vulputate magna ut nunc est sed tellus quis. Odio in odio consectetur dui?',
    answer:
      'Tincidunt enim consequat sit purus faucibus. Scelerisque velit iaculis in pellentesque luctus morbi mauris dui est. Massa semper integer risus bibendum eu ut. Dui dolor ut nibh in sit malesuada diam.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="mb-12  lgTab:mb-8">
          <h3 className="text-[42px] xl:text-4xl lg:text-3xl leading-none lgTab:text-2xl font-bold">
            Frequently Asked{' '}
            <span className="text-[#ffba0c] relative px-1 leading-none">
              <span className="relative z-10 leading-none">Questions</span>
              <span className="absolute inset-0 bg-[rgb(255,186,12,0.2)] -z-0"></span>
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
          {faqData.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className={`relative  cursor-pointer transition-colors duration-200 ${
                  activeIndex === index ? 'pb-5' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="pr-8 font-bold text-lg text-black">{item.question}</h4>
                <span
                  className={`absolute right-2 top-2 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.6359 7.49707C5.40417 8.21359 6.59583 8.21359 7.3641 7.49707L10.9476 4.15498C12.2753 2.91665 11.3991 0.692364 9.58347 0.692364H2.41654C0.600935 0.692364 -0.275327 2.91665 1.05244 4.15498L4.6359 7.49707Z"
                      fill={activeIndex === index ? '#ffdd2e' : '#2D59E9'}
                    />
                  </svg>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-black">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
