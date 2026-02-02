import React from "react";
import SectionGrid from "./SectionGrid";
import Heart from "../../common/Heart";
import Rating from "../../common/Star";
import WirelessHeadphones from "../../assets/ElectronicsSectionImages/WirelessHeadphones.png";
import AppleWatch from "../../assets/ElectronicsSectionImages/AppleWatch.png";
import BeatsEarbuds from "../../assets/ElectronicsSectionImages/BeatsEarbuds.png";
import { Link } from "react-router-dom";

const electronics = [
  { img: WirelessHeadphones, title: "Beats Studio3 Wireless Noise Cancelling Headphones with Apple", price: "₹2,000", rating: 4 },
  { img: AppleWatch, title: "Apple Watch SE (2nd Gen) [GPS 44mm] Smartwatch with Midnight", price: "₹35,500", rating: 4 },
  { img: BeatsEarbuds, title: "Beats by Dr. Dre Beats Solo Bluetooth In Ear ‘Ear Buds’, Multi-", price: "₹5,000", rating: 4 },
];

export default function ElectronicsSection() {
  return (
    <SectionGrid heading="Electronics" items={electronics} seeMoreLink="/products/electronics">
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
