"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  BarChart4,
  ClipboardMinus,
  GitPullRequestCreate,
  Home,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";

const navLinks = [
  { name: "Dashboard", path: "/", icon: Home, disabled: false },
  { name: "Analytics", path: "/analytics", icon: BarChart4, disabled: true },
  { name: "Users", path: "/users", icon: User, disabled: false },
  { name: "Activity", path: "/activity", icon: Activity, disabled: true },
  {
    name: "Requests",
    path: "/requests",
    icon: GitPullRequestCreate,
    disabled: true,
  },
  {
    name: "Reporting",
    path: "/reporting",
    icon: ClipboardMinus,
    disabled: true,
  },
  { name: "Settings", path: "/settings", icon: Settings, disabled: false },
];
const Sidebar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("...");
  useEffect(() => {
    const path = pathname;
    setCurrentPath(path.replace("/dashboard", ""));
  }, [pathname]);
  const isActiveLink = useCallback((path: string): boolean => {
    console.table({ path, currentPath });
    if (path == "/" && currentPath == "") return true;
    return path == currentPath;
  },[currentPath]);
  return (
    <aside className="p-4 h-full border-r border-gary- bg-white min-h-screen absolute -translate-x-full md:relative md:translate-x-0">
      <div className="py-2 border-b border-black/10 flex items-center">
        <a className="block text-primary" href="/">
          <span className="sr-only">Home</span>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </a>
        <span className="ml-2 text-primary font-semibold">FindPro dev</span>
      </div>
      <nav>
        <div>
          <h2 className="text-gray-400 text-sm my-2">Main Menu</h2>
          <ul className="px-1 flex flex-col gap-1 text-md">
            {navLinks.map((navLink, i) => {
              const { name, icon: Icon, path, disabled } = navLink;
              return (
                <li
                  key={"db-link-x-" + i}
                  className="w-full text-gray-700"
                  aria-disabled={disabled}
                >
                  <Link
                    href={"/dashboard/" + `${disabled ? "#" : path}`}
                    className={clsx(
                      "w-full flex items-center jus py-1 px-2 rounded-sm hover:bg-primary hover:text-white transition",
                      isActiveLink(path) && "text-white bg-primary",
                      disabled &&
                        "text-gray-400 hover:text-gray-500 hover:bg-gray-200"
                    )}
                  >
                    <Icon className="mr-2" size={20} />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
