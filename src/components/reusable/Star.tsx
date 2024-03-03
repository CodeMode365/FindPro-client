import clsx from "clsx";
import React, { FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface iProps {
  varient?: "filled" | "outlined" | "unfilled";
  size?: number;
  className?: string;
}

const Star: FC<iProps> = ({ varient = "filled", size = 16, className }) => {
  const classes = clsx(
    "mx-[1px]",
    className,
    varient == "filled" ? "text-yellow-400" : "text-gray-300"
  );
  return (
    <>
      {varient == "unfilled" ? (
          <FaRegStar size={size} className={classes} />
          ) : (
          <FaStar size={size} className={classes} />
      )}
    </>
  );
};

export default Star;
