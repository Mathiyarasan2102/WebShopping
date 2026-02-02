import React, { useState } from "react";
import libas from "../../assets/websitesImages/libas.png";
import calvin from "../../assets/websitesImages/calvin.png";
import peora from "../../assets/websitesImages/peora.png";

/* --------------------- STAR RATING ---------------------- */
const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400 text-xl">★★★★☆</span>
      <span className="text-gray-500 text-sm">({reviews})</span>
    </div>
  );
};

const product = {
  title: "Eduwave",
  rating: 4,
  ratingCount: 345,
  price: "₹ 2,599",
};


/* --------------------- THUMB IMAGE ---------------------- */
const ProductThumbnail = ({ src, isActive, onClick }) => (
  <div
    className={`w-20 h-18 p-4 shadow-2xl  rounded-lg overflow-hidden cursor-pointer ${isActive ? "border-blue-500" : "border-gray-300 opacity-70"
      }`}
    onClick={onClick}
  >
    <img src={src} className="w-full h-full object-cover" />
  </div>
);

/* --------------------- HEART ICON ---------------------- */
const HeartIcon = () => (
  <svg
    className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

/* --------------------- RELATED PRODUCT CARD ---------------------- */
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-sm  p-3 hover:shadow-md transition">
    <div className="relative h-56 w-full flex items-center justify-center bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-full object-contain"
      />
      <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
        <HeartIcon />
      </div>
    </div>

    <button className="mt-3 ml-auto block bg-blue-600 text-white px-5 py-1 rounded-full text-sm hover:bg-blue-700">
      + Add
    </button>

    <h3 className="mt-2 text-sm font-medium line-clamp-2">{product.name}</h3>

    <div className="mt-1 flex items-center justify-between">
      <span className="font-semibold text-[15px]">₹{product.currentPrice}</span>
      <button className="bg-blue-600 text-white px-5 py-1 rounded-full text-sm hover:bg-blue-700">
        Buy
      </button>
    </div>
  </div>
);

/* --------------------- MAIN PAGE ---------------------- */
export default function WebsiteDetailPage() {
  const [activeImage, setActiveImage] = useState(
    "../../src/assets/RentWithConfidenceImages/EduWave.png"
  );

  const thumbnails = [
    "../../src/assets/RentWithConfidenceImages/EduWave.png",
    "../../src/assets/RentWithConfidenceImages/EduWave.png",
    "../../src/assets/RentWithConfidenceImages/EduWave.png",
    "../../src/assets/RentWithConfidenceImages/EduWave.png",
    "../../src/assets/RentWithConfidenceImages/EduWave.png",
  ];

  const relatedProducts = [
    {
      id: 1,
      image: libas,
      name: "Libas Peach Self Design Silk Blend Straight Kurta",
      currentPrice: 2599,
    },
    {
      id: 2,
      image: calvin,
      name: "Calvin Klein Jeans Men Spread Collar Relaxed Shirt",
      currentPrice: 2599,
    },
    {
      id: 3,
      image: peora,
      name: "Peora Gold-Plated Studded Finger Ring",
      currentPrice: 799,
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-6 py-10 bg-white">

      {/* ---------------- MAIN ROW ---------------- */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE - IMAGES */}
        <div className="lg:w-1/2">
          <img
            src={activeImage}
            className="w-full rounded-xl shadow"
          />

          <div className="flex gap-4 mt-4 flex-wrap">
            {thumbnails.map((thumb, index) => (
              <ProductThumbnail
                key={index}
                src={thumb}
                isActive={activeImage === thumb}
                onClick={() => setActiveImage(thumb)}
              />
            ))}
          </div>
        </div>

        {/* CENTER VERTICAL DIVIDER */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* RIGHT SIDE DETAILS */}
        <div className="lg:w-1/2">
          <h1 className="text-[28px] font-semibold text-gray-900">Eduwave</h1>

          {/* <div className="flex items-center justify-between mt-2">
            <StarRating rating={4} reviews={345} />
            <HeartIcon />
          </div> */}

          <div className="flex items-start justify-between gap-4">
            {/* LEFT: Title + Stars */}
            <div className="pr-4">
              <h2 className="text-[#0b63ff] text-xl lg:text-2xl font-semibold leading-tight">
                {product.title}
              </h2>

              <div className="flex items-center gap-3 mt-3">
                <StarRating rating={product.rating} reviews={product.ratingCount} />
              </div>
            </div>

            {/* RIGHT: Heart + Add to Cart */}
            <div className="flex flex-col items-center  gap-3">
              <HeartIcon />

              <button className="px-6 py-2 rounded-2xl bg-[#0053E2] text-white text-md cursor-pointer whitespace-nowrap hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>



          <p className="text-[22px] font-bold mt-3">₹ 2,599</p>

          <h2 className="mt-6 font-semibold text-[17px]">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            A modern and fully responsive educational website designed to attract
            learners and institutions. Built with a clean layout and integrated
            course management.
          </p>

          <h2 className="mt-6 font-semibold text-[17px]">Product Highlights</h2>
          <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc ml-4">
            <li>Color: White, Yellow</li>
            <li>Website Background Educational Website</li>
          </ul>



          <div className="flex gap-3 items-end justify-end mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
              Rent Now
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- YOU MAY ALSO LIKE ---------------- */}
      <h2 className="text-[22px] font-semibold mt-14 mb-6">You May Also Like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
