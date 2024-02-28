"use client";

import React from "react";
import { Contact, Home, Compass, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Explore", path: "/explore", icon: Compass },
    { name: "About us", path: "/about", icon: Info },
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
                "transition flex flex-col items-center justify-center",
                isActiveLink(link.path) && "underline text-primary"
              )}
              href={link.path}
            >
              <span className="block md:hidden">
                <link.icon />
              </span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
