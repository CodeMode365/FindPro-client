import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MiniNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-primary">Navigation Menu</DrawerTitle>
            <DrawerDescription>Select a page to navigate</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <NavLinks />
            </div>
          </div>
          <DrawerFooter>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
            <Button
              variant="outline"
              className="text-primary hover:text-primary"
            >
              <Link href="/register">Register</Link>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MiniNav;
