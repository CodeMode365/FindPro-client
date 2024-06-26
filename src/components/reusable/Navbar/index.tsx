import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MiniNav from "./MiniNav";
import { Progressbar } from "../Progressbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthService from "./AuthService";

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md pt-2 sticky top-0 z-20 border-b-2 border-black/20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-primary" href="/">
              <span className="sr-only">Home</span>
              <Image src={"/logo.svg"} alt="logo" width={80} height={80} />
            </a>
          </div>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <AuthService />

            <div className="block md:hidden">
              <MiniNav>
                <Button
                  variant={"outline"}
                  className="text-primary hover:text-primary"
                >
                  <Menu />
                </Button>
              </MiniNav>
            </div>
          </div>
        </div>
      </div>
      <Progressbar />
    </header>
  );
};

export default Navbar;
