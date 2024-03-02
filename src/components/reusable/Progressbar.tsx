"use client";

import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Progressbar() {
  const [progress, setProgress] = useState(3);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(3);
    const timer = setInterval(
      () => setProgress((prev) => prev + Math.random()),
      10
    );
    const beforeUnload = (e: Event) => {
      console.log("Before unload", e);
    };
    const hasChanged = (e: Event) => {
      console.log("Hash change:", e);
    };
    const popstate = (e: Event) => {
      console.log("Pop state:", e);
    };

    // Add event listeners for route change events
    window.addEventListener("beforeunload", beforeUnload);
    window.addEventListener("hashchange", hasChanged);
    window.addEventListener("popstate", popstate);

    return () => {
      clearInterval(timer);
      window.removeEventListener("beforeunload", beforeUnload);
      window.removeEventListener("hashchange", hasChanged);
      window.removeEventListener("popstate", popstate);
    };
  }, [pathname]);

  if (progress >= 100) {
    return null;
  }

  return (
    <Progress
      value={progress}
      className="w-full m-0 rounded-none h-[1.5px] bg-sky-900/20"
    />
  );
}
