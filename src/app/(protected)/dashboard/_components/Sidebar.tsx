import Link from "next/link";
import Image from "next/image";
import { Activity, Home, Settings } from "lucide-react";
import { MdAnalytics, MdSupport } from "react-icons/md";

const Sidebar = () => {
  const navLinks = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Analytics", path: "/analytics", icon: MdAnalytics },
    { name: "Support Center", path: "/support", icon: MdSupport },
    { name: "Activity", path: "/activity", icon: Activity },
    { name: "Settings", path: "/settings", icon: Settings },
  ];
  return (
    <aside className="p-4 h-full bg-gray-100 border-r-2 border-gary-100">
      <div className="py-4 border-b border-black/40 flex items-center">
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
              const { name, icon: Icon, path } = navLink;
              return (
                <li key={"db-link-x-" + i} className="w-full text-gray-700">
                  <Link
                    href={"#"}
                    className="w-full flex items-center jus py-1 px-2 rounded-sm hover:bg-primary hover:text-white transition"
                  >
                    <Icon className="mr-2" size={20} />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-gray-400 text-sm my-2">Secondary Menu</h2>
          <ul className="px-1 flex flex-col gap-1 text-md">
            {navLinks.map((navLink, i) => {
              const { name, icon: Icon, path } = navLink;
              return (
                <li className="w-full" key={"db-link-x-" + i}>
                  <Link
                    href={"#"}
                    className="w-full flex items-center jus py-1 px-2 rounded-sm hover:bg-primary hover:text-white transition"
                  >
                    <Icon className="mr-2" size={20} />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div></div>
      </nav>
    </aside>
  );
};

export default Sidebar;