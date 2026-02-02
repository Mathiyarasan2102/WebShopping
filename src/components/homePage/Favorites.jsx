import React from "react";

import CityCab from '../../assets/BrowseBusinessesImages/CityCab.png';
import EasyRoom from '../../assets/BrowseBusinessesImages/EasyRoom.png';
import GoVibe from '../../assets/BrowseBusinessesImages/GoVibe.png';
import Voyago from '../../assets/RentWithConfidenceImages/Voyago.png';

import AppleWatch from '../../assets/ElectronicsSectionImages/AppleWatch.png';
import StreamingDevice from '../../assets/OtherProductsImages/StreamingDevice.png';
import WirelessHeadphones from '../../assets/ElectronicsSectionImages/WirelessHeadphones.png';
import SmartTV from '../../assets/OtherProductsImages/SmartTV.png';

const websites = [
  { title: "CityCab – Modern Taxi Service UI", price: "₹1,000", rating: 4, img: CityCab },
  { title: "Easy room", price: "₹1,000", rating: 4, img: EasyRoom },
  { title: "GoVibe", price: "₹1,000", rating: 4, img: GoVibe },
  { title: "Voyago", price: "₹1,000", rating: 4, img: Voyago }
];

const products = [
  { title: "onn 50” Class 4K UHD (2160P) LED Roku Smart Television HDR", price: "₹1,000", rating: 4, img: SmartTV },
  { title: "Beats Studio3 Wireless Noise Cancelling Headphones", price: "₹1,000", rating: 4, img: WirelessHeadphones },
  { title: "Roku Streaming Stick HD 2025", price: "₹1,000", rating: 4, img: StreamingDevice },
  { title: "Apple Watch SE (2nd Gen) [GPS 44mm]", price: "₹1,000", rating: 4, img: AppleWatch }
];

const Stars = ({ rating }) => (
  <span className="text-[10px] text-yellow-500">
    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
  </span>
);

const CardList = ({ title, items }) => (
  <section className="mt-6 w-[1000px] mx-auto relative">
    <h3 className="text-xl font-semibold mb-1">
      {title} <span className="text-[14px] text-gray-500">({items.length})</span>
    </h3>

    <div className="bg-white w-[750px] rounded-md  relative">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-3 py-5 my-7 border border-gray-300 px-3">
            <div className="w-[72px] h-[50px] rounded-md overflow-hidden shrink-0 bg-gray-50">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <p className="text-[16px]">{item.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <Stars rating={item.rating} />
                <span className="text-[10px] text-gray-400">4k</span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[12px] font-semibold">{item.price}</p>
              <button className="text-[10px] bg-gray-200 rounded-full px-3 py-0.5 mt-1 hover:bg-gray-300">
                Visit
              </button>
            </div>
          </div>

          {/* Summary card */}
          {idx === 0 && title === "Websites" && (
            <div className="absolute right-0 top-0 translate-x-[105%] w-[230px] border border-gray-300 bg-white rounded-lg shadow-lg p-3">
              <div className="bg-gray-100 text-[11px] px-2 py-1 rounded-md mb-2 flex items-center gap-1">
                <span>ℹ️</span>
                <span>Total price available for favorites products</span>
              </div>

              <p className="text-[15px] font-bold">
                ₹8,000 <span className="text-[10px] text-gray-400 ml-1">Est.Total | 8 items</span>
              </p>

              <button className="mt-3 w-full rounded-full text-[11px] py-1.5 flex items-center justify-center gap-1 hover:bg-gray-100">
                📋 Save this list
              </button>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default function Favorites() {
  return (
    <div className="py-6">
      {/* Page Title */}
      <div className="w-[1000px] mx-auto">
        <h2 className="text-xl  font-bold bg-white rounded-md px-4 py-4 shadow-sm w-full">
          Favorites
        </h2>
      </div>

      {/* Lists */}
      <CardList title="Websites" items={websites} />
      <CardList title="Products" items={products} />

      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-blue-600" : "bg-gray-300"}`}
          ></span>
        ))}
        <span className="text-gray-500 text-[10px] font-bold">...</span>
      </div>
    </div>
  );
}
