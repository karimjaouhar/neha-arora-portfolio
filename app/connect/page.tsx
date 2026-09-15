"use client";

import React from "react";
import SecondHero from "../components/SecondHero";
import Link from "next/link";
import { FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const ConnectPage: React.FC = () => {
  return (
    <>
      {/* Custom hero section for the Connect page */}
      <SecondHero />

      {/* Main connect content */}
      <main className="py-18 h-[52vh]">
        <div className="max-w-4xl mx-auto text-center font-light text-lg md:text-xl space-y-4">
          <p className="font-medium">NEHA ARORA</p>
          <p>Production Designer and Editor</p>
          <p>
            <a
              href="tel:+14164143800"
              className="hover:underline"
            >
              (416) 414 3800
            </a>
          </p>
          <p>
            <a
              href="mailto:nehaaro@yahoo.com"
              className="hover:underline"
            >
              nehaaro@yahoo.com
            </a>
          </p>
          <p>Based in Toronto, CA</p>
          <p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 hover:underline"
            >
              <FiDownload aria-hidden="true" />
              <span>Neha&apos;s Resume</span>
            </a>
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <Link
              href="https://www.tiktok.com/@nehasedits"
              target="_blank"
              aria-label="TikTok"
              className="text-lg"
            >
              <FaTiktok />
            </Link>
            <Link
              href="https://www.youtube.com/@nehasedits"
              target="_blank"
              aria-label="YouTube"
              className="text-lg"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.linkedin.com/in/neha-arora-aa7027333/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-lg"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConnectPage;
