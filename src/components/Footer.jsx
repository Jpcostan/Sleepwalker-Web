import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Services",
    items: [
      { label: "AI Agents", href: "#features" },
      { label: "Chatbots", href: "#features" },
      { label: "Workflow Automation", href: "#features" },
      { label: "Custom Integrations", href: "#features" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#home" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#FAQ" },
      { label: "Contact", href: "#Contact" },
    ],
  },
  {
    title: "Platforms",
    items: [
      { label: "Telegram Bots", href: "#features" },
      { label: "Discord Bots", href: "#features" },
      { label: "Slack Integrations", href: "#features" },
      { label: "Custom Solutions", href: "#Contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Sleepwalker Software
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                We build AI agents and automation systems that work while you sleep. 
                Custom solutions for businesses ready to scale.
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://github.com/Jpcostan"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              {footerData.map((section, index) => (
                <div key={index} className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                  <h3 className="mb-6 text-2xl font-bold text-white">{section.title}</h3>
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-4">
                        <a
                          className="text-gray-400 hover:text-gray-300"
                          href={item.href}
                          aria-label={item.label}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; {new Date().getFullYear()} Sleepwalker Software LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
