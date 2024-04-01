"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  BarChart4,
  ClipboardMinus,
  Home,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdRequestPage } from "react-icons/md";
import clsx from "clsx";
import _ from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReusableAlertDialog from "@/components/reusable/ReusableAlertDialog";

const navLinks = [
  { name: "Dashboard", path: "/", icon: Home, disabled: false },
  { name: "Analytics", path: "/analytics", icon: BarChart4, disabled: true },
  { name: "Users", path: "/users", icon: User, disabled: false },
  { name: "Activity", path: "/activity", icon: Activity, disabled: true },
  {
    name: "Applications",
    path: "/applications",
    icon: MdRequestPage,
    disabled: false,
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
  const isActiveLink = useCallback(
    (path: string): boolean => {
      // console.table({ path, currentPath });
      if (path == "/" && currentPath == "") return true;
      return path == currentPath;
    },
    [currentPath]
  );
  return (
    <aside className="p-4 h-full border-r border-gary- bg-primary min-h-screen absolute -translate-x-full md:relative md:translate-x-0">
      <div className="py-2 border-b border-black/10 flex items-center text-sky-600/20 shadow-lg px-2">
        <a className="block " href="/">
          <span className="sr-only">Home</span>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </a>
        <span className="ml-2 text-white font-semibold">FindPro dev</span>
      </div>
      <nav>
        <div>
          <h2 className="text-white text-sm my-2">Main Menu</h2>
          <ul className="px-1 flex flex-col gap-1 text-md">
            {navLinks.map((navLink, i) => {
              const { name, icon: Icon, path, disabled } = navLink;
              return (
                <li
                  key={"db-link-x-" + i}
                  className="w-full text-white"
                  aria-disabled={disabled}
                >
                  <Link
                    href={"/dashboard/" + `${disabled ? "#" : path}`}
                    className={clsx(
                      "w-full flex items-center jus py-1 px-2 rounded-sm text hover:bg-white hover:text-primary transition",
                      isActiveLink(path) && "bg-white text-primary",
                      disabled &&
                        "text-gray-600 hover:text-gray-500 hover:bg-gray-300"
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

      <div className="absolute h-auto w-full bottom-0 left-0 bg-sky-600/20">
        <div className="py-2 flex items-center justify-between px-4 mb-2">
          <span className="cursor-pointer flex items-center justify-center">
            <Avatar className="h-8 w-8 bg-red-500">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-2 text-white">
              <h2 className="-mb-1 text-sm">Ramesh Paudel</h2>
              <p className="text-xs">Professional</p>
            </div>
          </span>
          <div className="text-white">
            <ReusableAlertDialog
              trigger={<LogOut size={24} />}
              acceptFn={() => {}}
              cancelFn={() => {}}
              title="Logout from this account?"
              description="Do you want to logout of this account?"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
