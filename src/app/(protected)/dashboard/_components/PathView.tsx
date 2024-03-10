"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import _ from "lodash";

const PathView = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("...");
  useEffect(() => {
    const path = pathname.split("/");
    setCurrentPath(_.pull(path, "dashboard").join(""));
  }, [pathname]);
  return (
    <div className="h-12 w-full col-span-full flex items-center">
      <h2 className="text-xl text-gray-700">
        Dashboard /{" "}
        <span className="text-sm text-gray-500">
          {currentPath !== "" ? currentPath : "Home"}
        </span>
      </h2>
    </div>
  );
};

export default PathView;
