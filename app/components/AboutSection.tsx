"use client";

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 md:px-8">
      {/* Use flex-col-reverse on mobile so the image appears above the text,
          and switch to flex-row on md+ */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
        {/* About Text */}
        <div className="w-full md:w-1/2 lg:max-w-2xl">
          <h2 className="text-xl font-medium mb-4">ABOUT</h2>
          <p className="font-light">
          I’m a filmmaker and production designer passionate about creating visually compelling worlds through production design, directing, editing, and storytelling.<br /><br />
          What started as a hobby of editing videos grew into a love for filmmaking. At Sheridan College, I discovered my creative voice through production design, where I found a passion for transforming spaces and building detailed environments that bring stories to life.<br /><br />
          I’ve also explored directing, cinematography, and editing, including directing my first short film, <em>The Beauty of Letting Go</em>, in 2024. I’m drawn to projects that combine creativity, hands-on work, and visual storytelling, and I’m always looking for new opportunities to create and collaborate.
          </p>
        </div>

        {/* About Image */}
        <div className="w-full md:w-1/2 my-10 md:my-0">
          {/* Constrain image width on mobile and center it */}
          <div className="w-3/4 md:w-full max-w-[450px] mx-auto">
            <Image
              src="/images/about/me.jpg"
              alt="Neha Arora"
              width={450}
              height={450}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
