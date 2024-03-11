import Link from "next/link";
import Image from "next/image";
import { Activity, Home, Settings, User } from "lucide-react";
import { MdAnalytics, MdSupport } from "react-icons/md";

const Sidebar = () => {
  const navLinks = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Users", path: "/users", icon: User },
    { name: "Analytics", path: "/analytics", icon: MdAnalytics },
    { name: "Support Center", path: "/support", icon: MdSupport },
    { name: "Activity", path: "/activity", icon: Activity },
    { name: "Settings", path: "/settings", icon: Settings },
  ];
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
              const { name, icon: Icon, path } = navLink;
              return (
                <li key={"db-link-x-" + i} className="w-full text-gray-700">
                  <Link
                    href={"/dashboard/" + path}
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
      </nav>
    </aside>
  );
};

export default Sidebar;
