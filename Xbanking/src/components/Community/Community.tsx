import TelegramIcon from '/img/community/telegram.svg';
import TwitterIcon from '/img/community/twitter.svg';
import RedditIcon from '/img/community/reddit.svg';
import YoutubeIcon from '/img/community/youtube.svg';
import MediumIcon from '/img/community/medium.svg';
import DiscordIcon from '/img/community/discord.svg';

import MarketIcon1 from '/img/community/market-1.svg';
import MarketIcon2 from '/img/community/market-2.svg';
import MarketIcon3 from '/img/community/market-3.svg';
import MarketIcon4 from '/img/community/market-4.svg';

interface CommunityLink {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export default function Community() {
  const communityLinks: CommunityLink[] = [
    {
      icon: TelegramIcon,
      title: 'Telegram',
      subtitle: 'Announcement',
      description: 'Channel',
      link: '#',
    },
    {
      icon: TelegramIcon,
      title: 'Telegram',
      subtitle: 'Ask a Question',
      description: 'Group',
      link: '#',
    },
    {
      icon: TwitterIcon,
      title: 'Twitter',
      subtitle: 'News and events',
      description: 'Official Account',
      link: '#',
    },
    {
      icon: RedditIcon,
      title: 'Reddit',
      subtitle: 'Community forum',
      description: 'Official Account',
      link: '#',
    },
    {
      icon: YoutubeIcon,
      title: 'YouTube',
      subtitle: 'Important videos',
      description: 'Official Account',
      link: '#',
    },
    {
      icon: MediumIcon,
      title: 'Medium',
      subtitle: 'Blog',
      description: 'Official Account',
      link: '#',
    },
    {
      icon: DiscordIcon,
      title: 'Discord',
      subtitle: 'Technical Support',
      description: 'Official Account',
      link: '#',
    },
  ];

  return (
    <div className="flex flex-col gap-12 container mx-auto px-4 py-16" id="community">
      <div className="">
        <h2 className="text-[42px] xl:text-4xl lg:text-3xl lgTab:text-2xl font-bold mb-12 lgTab:mb-8">
          Join Our{' '}
          <span className="text-[#7765e3] relative px-1">
            <span className="relative z-10">Community</span>
            <span className="absolute inset-0  bg-[rgba(119,101,227,0.2)] -z-0"></span>
          </span>
        </h2>
        <div className="grid grid-cols-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {communityLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col p-6 min-h-56 bg-white border rounded-lg border-transparent hover:border-yellow transition-all duration-300"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2 mt-auto">{item.title}</h3>
              <p className="text-sm font-medium text-black mb-2">{item.subtitle}</p>
              <p className="text-[#9f9f9f] text-sm font-medium">{item.description}</p>
            </a>
          ))}
        </div>
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
