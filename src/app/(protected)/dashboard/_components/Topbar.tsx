import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, Settings } from "lucide-react";
import React from "react";
import { MdNotificationAdd, MdNotifications } from "react-icons/md";

const Topbar = () => {
  return (
    <div className=" col-span-12 h-14 w-full border-b border-gray-300 flex items-center justify-end text-gray-700">
      <div className="flex mx-4 md:mx-8 items-center">
        <span className="mx-2 cursor-pointer">
          <MdNotifications size={24} />
        </span>
        <span className="mx-2 cursor-pointer">
          <Settings size={24} />
        </span>
        <span className="mx-2 cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
