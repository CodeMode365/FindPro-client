import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";

const CardActions = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menubar className="border-none bg-transparent active:bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="bg-transparent border-none">
          {children}
        </MenubarTrigger>
        <MenubarContent side="left">
          <MenubarItem>Edit</MenubarItem>
          <Separator />
          <MenubarItem>
            <span className="text-rose-500 active:text-rose-500">Delete</span>
          </MenubarItem>
          <MenubarItem>
            <span className="text-rose-500 active:text-rose-500">
              Report Abuse
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CardActions;
