import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md mt-2 sticky top-0 z-20 border-b-2 border-black/20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-primary" href="#">
              <span className="sr-only">Home</span>
              <Image src={"/logo.svg"} alt="logo" width={80} height={80} />
            </Link>
          </div>

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  href="/register"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <Button>
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
