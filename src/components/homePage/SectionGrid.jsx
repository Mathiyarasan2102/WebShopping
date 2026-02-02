// small reusable grid wrapper used by several sections
import React from "react";
import { Link } from "react-router-dom";

export default function SectionGrid({ heading, items = [], children, seeMoreLink }) {
  // children is a renderItem function: (item, idx) => JSX
  return (
    <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,3vw,2rem)] mt-[clamp(2rem,4vw,4rem)]">
      <div className="flex justify-between items-center mb-[clamp(1rem,1.5vw,1.5rem)]">
        <h2 className="font-bold text-[clamp(1.35rem,2.5vw,1.8rem)]">{heading}</h2>
        {seeMoreLink ? (
          <Link to={seeMoreLink} className="text-gray-500 hover:underline text-[clamp(0.75rem,1vw,0.85rem)]">
            See more
          </Link>
        ) : null}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(1.5rem,3vw,2rem)]">
        {items.map((it, idx) => (
          <div key={it.id ?? idx}>
            {typeof children === "function" ? children(it, idx) : children}
          </div>
        ))}
      </div>
    </div>
  );
}
