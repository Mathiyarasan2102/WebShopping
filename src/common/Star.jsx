import React from "react";

export default function Rating({ value = 0 }) {
  const v = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
  return (
    <div className="flex items-center gap-1 text-[14px]" aria-hidden>
      <span className="text-yellow-500">{'★'.repeat(v)}</span>
      <span className="text-gray-300">{'☆'.repeat(5 - v)}</span>
    </div>
  );
}