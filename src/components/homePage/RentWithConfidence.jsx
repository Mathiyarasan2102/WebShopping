import React from "react";
import SectionGrid from "./SectionGrid";
import LearnEase from "../../assets/RentWithConfidenceImages/LearnEase.png";
import EduWave from "../../assets/RentWithConfidenceImages/EduWave.png";
import Voyago from "../../assets/RentWithConfidenceImages/Voyago.png";
import Rating from "../../common/Star";

const items = [
  { img: LearnEase, title: "LearnEase", desc: "Discover new places and environments tailored to your travel vibe.", rating: 4 },
  { img: Voyago, title: "Voyago", desc: "Discover new places and environments tailored to your travel vibe.", rating: 4 },
  { img: EduWave, title: "EduWave", desc: "Discover new places and environments tailored to your travel vibe.", rating: 4 },
];

export default function RentWithConfidence() {
  return (
    <SectionGrid heading="Rent with Confidence" items={items}>
      {(item) => (
        <div className="px-[clamp(0.5rem,1vw,0.8rem)] py-[clamp(1rem,2vw,1.5rem)]">
          <img className="w-full h-[clamp(160px,15vw,200px)] object-cover rounded-md" src={item.img} alt={item.title} />
          <h3 className="font-semibold text-[#0053E2] hover:underline cursor-pointer mt-[clamp(0.5rem,0.8vw,0.75rem)] text-[clamp(0.95rem,1.2vw,1.1rem)]">{item.title}</h3>
          <p className="text-gray-600 mt-2 overflow-hidden whitespace-nowrap max-w-full text-[clamp(0.5rem,1vw,0.8rem)]">{item.desc}</p>

          <div className="mt-3 font-medium text-gray-900 text-[clamp(1.1rem,1.2vw,1.25rem)]">₹1,000</div>

          <div className="flex items-center justify-between mt-3">
            <div className=""><Rating value={item.rating} /></div>

            <div className="flex items-center gap-3">
              <button className="border border-[#0053E2] text-[#0053E2] font-medium rounded-full hover:bg-blue-50 transition cursor-pointer px-[clamp(2rem,1.5vw,1.4rem)] py-[clamp(0.3rem,0.5vw,0.45rem)] text-[clamp(0.75rem,1vw,0.875rem)]">Rent</button>
              <button className="bg-[#0053E2] text-white font-medium rounded-full hover:bg-[#0047d7] transition cursor-pointer px-[clamp(2rem,1.5vw,1.4rem)] py-[clamp(0.3rem,0.5vw,0.45rem)] text-[clamp(0.75rem,1vw,0.875rem)]">Buy</button>
            </div>
          </div>
        </div>
      )}
    </SectionGrid>
  );
}
