import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Icon = ({ children, href }) => (
  <a className="text-2xl" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative h-[70px] md:h-[100px] border-t border-slate-900/10 ">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="mb-3 flex space-x-4 text-gray-700">
          <Icon href="/">
            <FaFacebook className="hover:text-[#4267B2]" />
          </Icon>
          <Icon href="/">
            <FaGithub className="hover:text-gray-500" />
          </Icon>
          <Icon href="/">
            <FaInstagram className="hover:text-[#f6005e]" />
          </Icon>
          <Icon href="/">
            <FaTwitter className="hover:text-[#1DA1F2]" />
          </Icon>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500">
          <div>{`Copyright © 2022 - ${new Date().getFullYear()}`}</div>
          <Link to="/">Nick Chen</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
