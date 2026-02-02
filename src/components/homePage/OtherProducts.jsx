import React from "react";
import SectionGrid from "./SectionGrid";
import Heart from "../../common/Heart";
import Rating from "../../common/Star";
import GameConsole from '../../assets/OtherProductsImages/GameConsole.png'
import SmartTv from '../../assets/OtherProductsImages/SmartTv.png'
import StreamingDevice from '../../assets/OtherProductsImages/StreamingDevice.png'
import { Link } from "react-router-dom";

const others = [
  { img: GameConsole, title: "Video Game Console kids electronics 480*272 resolution handheld", price: "₹2,000", rating: 4 },
  { img: SmartTv, title: "onn 50” Class 4K UHD (2160P) LED Roku Smart Television HDR", price: "₹55,500", rating: 4 },
  { img: StreamingDevice, title: "Roku Streaming Stick HD 2025 – HD Roku Streaming Device for TV", price: "₹1,500", rating: 4 },
];

export default function OtherProductsSection() {
  return (
    <SectionGrid heading="Other Products" items={others} seeMoreLink="/products/other-products">
      {(i) => (
        <div className="bg-white rounded-xl transition relative p-[clamp(0.75rem,1vw,1rem)]">
          <div className="relative w-full bg-white flex items-center justify-center rounded-lg shadow-md mb-[clamp(0.5rem,0.8vw,0.75rem)] p-[clamp(0.75rem,1vw,1rem)]">
            <div className="absolute top-4 right-6 z-10"><Heart initialLiked={""} onToggle={() => {}} /></div>
            <img src={i.img} alt={i.title} className="w-full object-contain h-[clamp(140px,15vw,180px)] mb-[clamp(0.4rem,0.8vw,0.6rem)]" />
          </div>

          <h3 className="font-medium text-[#0053E2] hover:underline mt-10 overflow-hidden cursor-pointer leading-snug text-[clamp(1.1rem,1.5vw,1.3rem)]">{i.title}</h3>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-[clamp(0.85rem,1.1vw,1rem)]">{i.price}</p>
              <Rating value={i.rating} />
            </div>

            <button className="bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 text-[clamp(0.7rem,0.9vw,0.8rem)] px-[clamp(2.2rem,2vw,1.5rem)] py-[clamp(0.3rem,0.5vw,0.45rem)] cursor-pointer">Buy</button>
          </div>
        </div>
      )}
    </SectionGrid>
  );
}
