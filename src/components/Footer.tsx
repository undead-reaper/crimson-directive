import { FaDiscord, FaGithub, FaTwitch, FaX } from "react-icons/fa6";

interface FooterLinks {
  url: string;
  icon: React.ReactNode;
}

const socialLinks: FooterLinks[] = [
  {
    url: "https://discord.com",
    icon: <FaDiscord />,
  },
  {
    url: "https://x.com",
    icon: <FaX />,
  },
  {
    url: "https://www.github.com",
    icon: <FaGithub />,
  },
  {
    url: "https://www.twitch.tv",
    icon: <FaTwitch />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black lg:pr-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; 2024. All rights reserved.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
