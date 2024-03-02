"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface iProps {
  type: "Home" | "Back" | "Reload";
  variant?: "outline";
  onClick?: () => void;
}

const ErrorButton: FC<iProps> = ({ type, variant, onClick }) => {
  const router = useRouter();

  function navigate() {
    switch (type) {
      case "Home":
        return router.push("/");
      case "Back":
        return router.back();
      case "Reload":
        return router.refresh();
    }
  }

  function content(): string {
    switch (type) {
      case "Home":
        return "Go home";
      case "Back":
        return "Go back";
      case "Reload":
        return "Reload page";
    }
  }

  return (
    <Button
      onClick={onClick ?? navigate}
      variant={variant ?? "default"}
      className={clsx(
        variant == "outline" && "text-primary hover:text-primary/80"
      )}
    >
      {content()}
    </Button>
  );
};

export default ErrorButton;
