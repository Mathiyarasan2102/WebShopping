import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Heart({ initialLiked = false, onToggle }) {
  const [liked, setLiked] = React.useState(Boolean(initialLiked));
  const toggle = () => {
    const next = !liked;
    setLiked(next);
    if (onToggle) onToggle(next);
  };

  return (
    <button
      type="button"
      aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      onClick={toggle}
      className="h-7 w-7 flex items-center justify-center "
    >
      {liked ? (
        <AiFillHeart size={23} className="text-red-500" />
      ) : (
        <AiOutlineHeart size={23} className="text-gray-800" />
      )}
    </button>
  );
}