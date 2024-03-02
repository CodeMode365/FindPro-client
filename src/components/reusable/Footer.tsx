import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Goal",
      path: "/goal",
    },
    {
      name: "Supports",
      path: "/supports",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const socialLinks = [
    { name: "facebook", href: "#", icon: Facebook },
    { name: "instagram", href: "#", icon: Instagram },
    { name: "linkedin", href: "#", icon: Linkedin },
    { name: "github", href: "#", icon: Github },
  ];

  return ( 
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-primary text-lg font-semibold">
            <span className="flex flex-col items-center">
              <Image src={"/logo.svg"} alt="Logo" height={50} width={50} />
              FindPro.dev
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {footerLinks.map((fl, i) => (
              <li key={`${fl.name}`}>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                >
                  {fl.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {socialLinks.map((sl) => (
              <li key={`${sl.name}`}>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 "
                >
                  <span className="sr-only">{sl.name}</span>
                  <sl.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
