"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const TopScroller = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setShowBtn(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (!showBtn) return null;
  return (
    <Button
      size={"icon"}
      className="fixed rounded-full right-10 bottom-10 z-10 hover:animate-bounce"
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Button>
  );
};

export default TopScroller;
