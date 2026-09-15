import React from "react";
import { FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center mx-5 xl:max-w-7xl xl:mx-auto py-6">
      <div className="text-sm md:text-md">NEHA ARORA</div>
      <div className="text-sm md:text-md">© Copyright {currentYear}</div>
      <div className="flex justify-center space-x-4">
        <Link
          href="https://www.tiktok.com/@nehasedits"
          target="_blank"
          aria-label="TikTok"
          className="text-md md:text-lg"
        >
          <FaTiktok />
        </Link>
        <Link
          href="https://www.youtube.com/@nehasedits"
          target="_blank"
          aria-label="YouTube"
          className="text-md md:text-lg"
        >
          <FaYoutube />
        </Link>
        <Link
          href="https://www.linkedin.com/in/neha-arora-aa7027333/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-md md:text-lg"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
