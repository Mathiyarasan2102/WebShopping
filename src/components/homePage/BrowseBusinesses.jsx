import React from "react";
import SectionGrid from "./SectionGrid";
import CityCab from "../../assets/BrowseBusinessesImages/CityCab.png";
import EasyRoom from "../../assets/BrowseBusinessesImages/EasyRoom.png";
import GoVibe from "../../assets/BrowseBusinessesImages/GoVibe.png";

const businesses = [
  { id: 1, name: "CityCab – Modern Taxi Service UI", desc: "A sleek web design for city taxi services with smooth booking, routes.", image: CityCab, rating: 4.8 },
  { id: 2, name: "Easy Room", desc: "A minimal rental website offering quick room searches and easy booking.", image: EasyRoom, rating: 4.9 },
  { id: 3, name: "GoVibe", desc: "Discover new places and experiences tailored to your travel vibe.", image: GoVibe, rating: 4.7 },
];

export default function BrowseBusinesses() {
  return (
    <SectionGrid heading="Browse top online businesses" items={businesses}>
      {(item) => (
        // original per-item markup kept as-is
        <div className="flex flex-col h-full group">
          <div className="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <img src={item.image} alt={item.name} className="w-full h-[clamp(200px,20vw,260px)] object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div className="flex flex-col flex-1 pt-4">
            <h3 className="font-medium text-[#0060ff] text-[clamp(1.1rem,1.5vw,1.35rem)] leading-tight">{item.name}</h3>

            <p className="text-gray-600 mt-2 overflow-hidden whitespace-nowrap max-w-full text-[clamp(0.5rem,1vw,0.8rem)]">
              {item.desc}
            </p>

            <div className="mt-3 font-medium text-gray-900 text-[clamp(1.1rem,1.2vw,1.25rem)]">₹1,000</div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 text-yellow-500 text-[clamp(1rem,1.2vw,1.2rem)]">
                {"★".repeat(Math.floor(item.rating))}{item.rating % 1 !== 0 && "☆"}
              </div>

              <div className="flex items-center gap-3">
                <button className="border border-[#0053E2] text-[#0053E2] font-medium rounded-full hover:bg-blue-50 transition cursor-pointer px-[clamp(2rem,1.5vw,1.4rem)] py-[clamp(0.3rem,0.5vw,0.45rem)] text-[clamp(0.75rem,1vw,0.875rem)]">
                  Rent
                </button>

                <button className="bg-[#0053E2] text-white font-medium rounded-full hover:bg-[#0047d7] transition cursor-pointer px-[clamp(2rem,1.5vw,1.4rem)] py-[clamp(0.3rem,0.5vw,0.45rem)] text-[clamp(0.75rem,1vw,0.875rem)]">
                  Buy
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </SectionGrid>
  );
}
