"use client";
import Star from "@/components/reusable/Star";
import { useState } from "react";

const StarRater = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const ratingMessages = ["Poor", "Fair", "Average", "Good", "Excellent"];

  const rate = (star: number) => {
    setRating(star);
    setMessage(ratingMessages[star - 1]);
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <button onClick={() => rate(i + 1)} key={"rating-star-" + i}>
          <Star
            varient={rating > i ? "filled" : "unfilled"}
            className="cursor-pointer"
            size={24}
          />
        </button>
      ))}
      <span className="text-gary-500 ml-2">{message}</span>
    </div>
  );
};

export default StarRater;
