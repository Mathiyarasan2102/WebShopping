// src/components/ProductDetailC1.jsx
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

/* ---------- helpers ---------- */
const Stars = ({ value = 4 }) => (
    <div className="flex items-center gap-1 text-yellow-500">
        <span className="text-lg leading-none">{Array.from({ length: value }).map((_, i) => "★")}</span>
        <span className="text-gray-300 ml-1">{Array.from({ length: 5 - value }).map((_, i) => "☆")}</span>
    </div>
);

const TinyBtn = ({ children, variant = "primary", className = "" }) => {
    const base = "px-4 py-1.5 rounded-full font-semibold text-sm transition";
    const styles =
        variant === "primary"
            ? "bg-[#0b63ff] text-white hover:bg-[#084bd1]"
            : "bg-white text-[#0b63ff] border border-gray-300 hover:bg-gray-50";
    return <button className={`${base} ${styles} ${className}`}>{children}</button>;
};

const Price = ({ amount = "₹2,599" }) => (
    <div className="text-[22px] font-bold leading-none">{amount}</div>
);

/* ---------- mock data ---------- */
const product = {
    title: "Peach Self Design Silk Blend Straight Kurta With Dupatta",
    rating: 4,
    ratingCount: 345,
    price: "₹ 2,599",
    sizes: ["XS", "S", "M", "L", "XL"],
    sellers: [
        { name: "Amazon", price: "₹2,619" },
        { name: "Flipkart", price: "₹2,619" },
        { name: "Myntra", price: "₹2,619" },
        { name: "Meesho", price: "₹2,619" },
    ],
    mainImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    thumbs: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520975922071-c5ae4ca6c9cc?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556909212-8b03f37b8f47?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf?q=80&w=400&auto=format&fit=crop",
    ],
    description:
        "Our 3-piece peach silk blend suit set features a straight-fit kurta with a round neck, floral woven design and zari detailing. Complemented with solid straight pants and matching net dupatta, this style is perfect for daytime festivities.",
    highlights: [
        "Color : Soft Pink",
        "Fabric : Silk blend with net dupatta",
        "Work : Embroidery and zari detailing",
        "Style : Straight-fit Kurta with matching bottom and dupatta",
        "Occasion : Festive, Wedding, or Party Wear",
    ],
};

const suggestions = [
    {
        title: "Maroon Embroidered Silk Blend Straight Suit With Dupatta",
        price: "₹3,599",
        img: "https://images.unsplash.com/photo-1602810312968-5ae9f4d5f3b3?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Magenta Woven Design Chanderi Silka– Line Kurta",
        price: "₹3,949",
        img: "https://images.unsplash.com/photo-1589571894960-20bbe2828d2f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Purple Woven Design Silk Blend Straight Suit With Dupatta",
        price: "₹3,869",
        img: "https://images.unsplash.com/photo-1583004016917-5a4b8e1d0d36?q=80&w=800&auto=format&fit=crop",
    },
];

/* ---------- component ---------- */
export default function ProductDetailC1() {
    return (
        <div className="max-w-[1500px] mx-auto px-2 py-8">
            {/* two-column top: Left gallery + Right info */}
            <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6">
                {/* LEFT: gallery + description box beneath */}
                <div className="space-y-6 lg:border-r lg:border-gray-200 lg:pr-6">
                    {/* gallery card */}
                    <div className="rounded-md bg-white p-4 ">
                        <div className="border border-gray-100 rounded-md p-4 shadow-md bg-white">
                            <img src={product.mainImg} alt="main" className="w-full object-contain h-[420px]" />
                        </div>

                        {/* thumbnails row */}
                        <div className="mt-4 flex items-center gap-3">
                            {product.thumbs.map((t, i) => (
                                <button
                                    key={i}
                                    className="w-14 h-14 rounded-md border border-gray-200 bg-white overflow-hidden shadow-md"
                                    aria-label={`thumb-${i}`}
                                >
                                    <img src={t} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Description box */}
                    <div className="rounded-lg  bg-white p-5 ">
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>

                        <div className="mt-4">
                            <h5 className="font-semibold mb-2">Product Highlights</h5>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {product.highlights.map((h, idx) => (
                                    <li key={idx}>{h}</li>
                                ))}
                            </ul>
                        </div>

                        {/* logos / small badges */}
                        <div className="mt-5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#0b63ff] grid place-items-center text-white text-sm font-bold">W</div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 grid place-items-center text-sm">A</div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 grid place-items-center text-sm">F</div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 grid place-items-center text-sm">M</div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 grid place-items-center text-sm">Me</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: product card */}
                <div className="rounded-lg bg-white p-6 sticky top-20">
                    <div className="flex items-start justify-between gap-4">
                        <div className="pr-4">
                            <h2 className="text-[#0b63ff] text-xl lg:text-2xl font-semibold leading-tight">{product.title}</h2>
                            <div className="flex items-center gap-3 mt-3">
                                <Stars value={product.rating} />
                                <div className="text-sm text-gray-500">({product.ratingCount})</div>
                            </div>
                        </div>

                        <div className="flex flex-col translate-y-10/5 items-end gap-3">
                            <AiOutlineHeart className="absolute -translate-y-10 right-5/12  text-gray-500 text-xl cursor-pointer" />
                            <button className="px-6 py-2 rounded-2xl bg-[#0053E2] text-white text-md cursor-pointer whitespace-nowrap hover:bg-blue-700 transition">Add to Cart</button>

                        </div>
                    </div>

                    {/* price + size */}
                    <div className="mt-2">
                        <Price amount={product.price} />
                        <div className="text-sm text-green-600 mt-2">The product you selected is instock</div>

                        <div className="mt-4">
                            <div className="text-sm font-medium mb-2">Size</div>
                            <div className="flex items-center gap-3">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        className={`px-3 py-1.5 rounded-full border ${s === "XS" ? "bg-[#0b63ff] text-white border-[#0b63ff]" : "bg-white text-gray-600 border-gray-300"} text-sm`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* seller list */}
                    <div className="mt-6 pt-4  space-y-14">
                        <h3>The product you selected is instock </h3>
                        {product.sellers.map((seller, index) => (
                            <div key={index} className="flex items-center border-b-2 border-gray-100 justify-between">
                                <div className="flex items-center gap-3 p-5">
                                    {/* circular initial */}
                                    <div className="w-8 h-8 rounded-full bg-gray-100 grid place-items-center text-sm font-semibold text-gray-600">
                                        {seller.name[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[#0b63ff]">{seller.name}</div>
                                        <div className="text-xs text-gray-500">In stock, Free delivery</div>
                                    </div>
                                </div>

                                <div className="text-sm font-semibold text-center">
                                    {seller.price}
                                </div>

                                {/* RIGHT: Visit button */}
                                <div className="flex items-center justify-end-safe">
                                    <button className="px-5 py-1 rounded-full border border-gray-200 text-sm hover:bg-gray-50">
                                        Visit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button className="px-10 py-2 bg-[#0053E2] text-white rounded-2xl font-semibold shadow-lg">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* Suggestion row */}
            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 mx-2">You May Also Like</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {suggestions.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl bg-white p-4"
                        >
                            {/* IMAGE BOX */}
                            <div className="relative h-72 w-full rounded-lg shadow-sm overflow-hidden bg-white flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                                <AiOutlineHeart className="absolute top-5 right-5 text-gray-500 text-xl cursor-pointer" />
                            </div>

                            {/* + ADD BUTTON under image */}
                            <div className="flex justify-end mt-3">
                                <button className="px-6 py-1.5 rounded-full bg-[#0b63ff] text-white text-sm font-semibold hover:bg-[#084bd1]">
                                    + Add
                                </button>
                            </div>

                            {/* TITLE */}
                            <div className="mt-3 text-sm font-medium text-gray-800 leading-tight">
                                {item.title}
                            </div>

                            {/* PRICE + OLD PRICE + STARS + BUY */}
                            <div className="mt-2 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[15px] font-semibold">{item.price}</span>
                                        {item.old && (
                                            <span className="text-xs text-gray-400 line-through">
                                                {item.old}
                                            </span>
                                        )}
                                    </div>

                                    {/* ⭐ STAR RATING */}
                                    <div className="flex items-center text-yellow-500 text-xs mt-1">
                                        {"★".repeat(item.stars || 4)}
                                        <span className="text-gray-300">
                                            {"☆".repeat(5 - (item.stars || 4))}
                                        </span>
                                    </div>
                                </div>

                                {/* BUY BUTTON */}
                                <button className="px-5 py-1 bg-[#0b63ff] text-white text-sm rounded-full font-medium hover:bg-[#084bd1]">
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
