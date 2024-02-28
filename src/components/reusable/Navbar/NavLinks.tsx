"use client";

import React from "react";
import { Contact, Eye, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Explore", path: "/explore", icon: Eye },
    { name: "About us", path: "/about", icon: Eye },
    { name: "Contact Us", path: "/contact", icon: Contact },
  ];

  const pathname = usePathname();
  const isActiveLink = (path: string): boolean => {
    return path == pathname;
  };

  return (
    <nav aria-label="Global">
      <ul className="flex items-center gap-6 text-md">
        {links.map((link, i) => (
          <li key={`link-{${i}}`}>
            <Link
              className={clsx(
                "transition",
                isActiveLink(link.path) && "underline text-primary"
              )}
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
