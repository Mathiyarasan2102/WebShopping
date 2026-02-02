import React, { useState, useMemo } from "react";
import CityCab from '../../assets/BrowseBusinessesImages/CityCab.png';
import GoVibe from '../../assets/BrowseBusinessesImages/GoVibe.png';
import SmartTv from '../../assets/OtherProductsImages/SmartTV.png';
import WirelessHeadphones from '../../assets/ElectronicsSectionImages/WirelessHeadphones.png';
import GameConsole from '../../assets/OtherProductsImages/GameConsole.png';
import StreamingDevice from '../../assets/OtherProductsImages/StreamingDevice.png';
import { Link } from "react-router-dom";


const formatINR = (v) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(v);

export default function Cart() {
  // ---------- Sample Data ----------
  const [websites, setWebsites] = useState([
    {
      id: 1,
      title: "CityCab – Modern Taxi Service UI",
      img: CityCab,
      rating: 4,
      price: 1000,
    },
    {
      id: 2,
      title: "GoVibe",
      img: GoVibe,
      rating: 4,
      price: 1000,
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 3,
      title: "onn 50” Class 4K UHD (2160P) LED Roku Smart Television HDR",
      img: SmartTv,
      rating: 4,
      price: 1000,
    },
    {
      id: 4,
      title: "Beats Studio3 Wireless Noise Cancelling Headphones with Apple",
      img: WirelessHeadphones,
      rating: 4,
      price: 1000,
    },
  ]);

  const deals = [
    {
      id: 1,
      img: GameConsole,
      title: "Video Game Console kids electronics 480*272 resolution ........",
      price: 2000,
      rating: 4,
    },
    {
      id: 2,
      img: SmartTv,
      title: "onn 50” Class 4K UHD (2160P) LED Roku Smart Television HDR",
      price: 55500,
      rating: 4,
    },
    {
      id: 3,
      img: StreamingDevice,
      title: "Roku Streaming Stick HD 2025 – HD Roku Streaming Device for TV",
      price: 1500,
      rating: 4,
    },
  ];

  // ---------- Computed Totals ----------
  const subtotal = useMemo(
    () => [...websites, ...products].reduce((sum, i) => sum + i.price, 0),
    [websites, products]
  );
  const taxes = 599;
  const total = subtotal + taxes;

  // ---------- Actions ----------
  const handleRemove = (id) => {
    setWebsites((w) => w.filter((x) => x.id !== id));
    setProducts((p) => p.filter((x) => x.id !== id));
  };

  return (
    <div className="max-w-full mx-10   px-4 py-8">
      {/* Page Title */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-lg font-semibold">Your cart</h1>
        <span className="text-gray-400 text-sm">
          ({websites.length + products.length})
        </span>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Side */}
        <div>
          {/* Websites */}
          <h2 className="text-sm font-semibold mb-2">
            Websites{" "}
            <span className="text-gray-500 text-xs">({websites.length})</span>
          </h2>
          <div className="space-y-3 ">
            {websites.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white border-gray-100 rounded-sm p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-28 h-[75px] border rounded-md overflow-hidden bg-gray-50">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[12px] leading-snug">{item.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-yellow-500">
                        {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                      </span>
                      <span className="text-[10px] text-gray-400">4k</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[12px] font-semibold">
                    {formatINR(item.price)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[10px] bg-blue-600 text-white rounded-full px-3 py-[3px] mt-1 hover:bg-blue-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="mt-10">
            <h2 className="text-sm font-semibold mb-5">
              Products{" "}
              <span className="text-gray-500 text-xs">({products.length})</span>
            </h2>
            <div className="space-y-3">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white border-gray-100 rounded-sm p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-28 h-[75px] border rounded-md overflow-hidden bg-gray-50">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[12px] leading-snug">{item.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-yellow-500">
                          {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                        </span>
                        <span className="text-[10px] text-gray-400">4k</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[12px] font-semibold">
                      {formatINR(item.price)}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-[10px] bg-blue-600 text-white rounded-full px-3 py-[3px] mt-1 hover:bg-blue-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to='/' className="text-blue-600 text-sm mt-4 hover:underline">
            Continue shopping
          </Link>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-white border-gray-100 rounded-md shadow-sm p-8 m-7 h-[330px] ">
          <h3 className="text-sm font-semibold mb-3">Order summary</h3>
          <div className="text-sm space-y-1">
            <div className="flex justify-between p-3">
              <span className="text-gray-600">Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-gray-600">Taxes (estimated)</span>
              <span>{formatINR(taxes)}</span>
            </div>
            <div className="flex justify-between font-semibold p-3">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700 transition">
            Proceed to secure checkout
          </button>

          <div className="flex items-center gap-4 mt-3 opacity-70">
            <div className="w-10 h-3 bg-gray-200 rounded-sm"></div>
            <div className="w-10 h-3 bg-gray-200 rounded-sm"></div>
            <div className="w-10 h-3 bg-gray-200 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Deals Section */}
      <div className="mt-10">
        <h3 className="text-sm font-semibold mb-3">Deals you might like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white border-gray-100 rounded-xl p-3 shadow-sm hover:shadow transition"
            >
              <div className="relative w-full h-[140px] border-gray-100 rounded-md mb-2 overflow-hidden">
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 text-gray-500 text-lg hover:text-red-500">
                  ♥
                </button>
              </div>

              <h4 className="text-[13px] font-medium leading-snug line-clamp-2">
                {deal.title}
              </h4>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-gray-800">
                  {formatINR(deal.price)}
                </p>
                <button className="bg-blue-600 text-white text-[11px] px-5 py-1.5 cursor-pointer rounded-full hover:bg-blue-700">
                  Buy
                </button>
              </div>

              <div className="mt-1 text-[10px] text-yellow-500">
                {"★".repeat(deal.rating)}{"☆".repeat(5 - deal.rating)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-blue-600" : "bg-gray-300"
                }`}
            />
          ))}
          <button className="ml-1 h-6 w-6 border rounded-full text-[12px] flex items-center justify-center text-gray-500">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
