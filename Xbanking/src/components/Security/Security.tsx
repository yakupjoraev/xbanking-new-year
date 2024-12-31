import CertikLogo from '/img/security/certik.svg';
import BountyLogo from '/img/security/bounty.svg';
import SecurityIcon from '/img/security/security.svg';
import MonitoringIcon from '/img/security/monitoring.svg';
import CloudIcon from '/img/security/cloud.svg';
import NotificationIcon from '/img/security/notification.svg';

interface SecurityFeature {
  icon: string;
  title: string;
  items: string[];
}

export default function Security() {
  const features: SecurityFeature[] = [
    {
      icon: SecurityIcon,
      title: 'Security',
      items: [
        'Front-end Firewall',
        'Back-end Firewall',
        'DDoS protection',
        'Hardening Server Security',
        'Low latency with High Performance VPN',
        'AS Carrier/ISP',
        'Full Layer7 inspection',
        'IPS/IDS',
        'No incoming connections',
        'KMS/HSM hardware',
      ],
    },
    {
      icon: MonitoringIcon,
      title: 'Monitoring',
      items: [
        'Datacenter, Hardware and Virtual Machine are monitored and alarmed',
        "Blockchain monitoring systems such as 'out of sync' and missing signatures",
        'Hourly reports',
        'Real-time alarms',
        '24/7 monitoring',
      ],
    },
    {
      icon: CloudIcon,
      title: 'Cloud Datacenter',
      items: [
        'Amazon AWS',
        'Google Cloud',
        'Private Datacenter',
        'Tier III and IV Datacenter',
        'All levels of redundancy',
      ],
    },
    {
      icon: NotificationIcon,
      title: 'Notification system',
      items: [
        '3 alert levels (missed blocks >2.5%, >10%, >50%)',
        'Change status to active/jailed/inactive',
        'Change moniker to match previous name',
        'Change commission',
        'Voting power',
        'New proposals, deposit/voting period, passed/rejected',
        'Multiple user tag customizations',
        'State of the consensus of the chains with height/round/step, online,shash and detailed pre-votes/pre-commits for each validator in the active set',
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-12" id="security">
      <div className="container mx-auto px-4">
        <div className="mb-8 lgTab:mb-6">
          <h2 className="text-[42px] xl:text-4xl lg:text-3xl leading-none lgTab:text-2xl font-bold">
            <span className="text-[#008cfe] relative px-1">
              <span className="relative z-10">Security</span>
              <span className="absolute inset-0 bg-[rgb(0,140,254,0.2)] -z-0"></span>
            </span> and{' '}
            <span className="text-[#fc60a8] relative px-1">
              <span className="relative z-10">Stability</span>
              <span className="absolute inset-0 bg-[rgb(252,96,168,0.2)] -z-0"></span>
            </span>
          </h2>
          <div className="mt-8 max-w-3xl">
            <p className="text-black text-base">Securing next-generation decentralized networks.</p>
            <p className="text-black text-base">
              Check out our software and technology solutions to secure and monitor the entire
              XBANKING ecosystem.
            </p>
          </div>
        </div>

        <div className="mb-16 lg:mb-12">
          <h3 className="text-xl font-bold mb-6">Audits</h3>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <img src={CertikLogo} alt="Certik" className="h-12" />
            </a>
            <a href="#" className="inline-block">
              <img src={BountyLogo} alt="Bounty" className="h-12" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <ul className="space-y-2  pl-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-black list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
