// ProductView.jsx
import React, { useState } from "react";
import { FiChevronDown, FiEdit, FiUpload, FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import img from '../../assets/SellerPageImages/ViewProduct.png'

const MOCK = {
    id: "p-001",
    title: "Titan Analog 24.5 cm X 45 cm Wall Clock  (Black, Without Glass, Pendulum)",
    price: "₹3,247",
    stock: 20,
    description:
        "A Sleek And Modern Black Metal Pendulum Clock, Featuring A Minimalist Design With An Open Dial For A Contemporary Touch.",
    highlights: [
        "Size: 45 Cm X 24.5 Cm",
        "Mechanism: Pendulum",
        "Frame Material: Metal",
        "Clock Type: Analog",
    ],
    mainImg: img,
    thumbs: [
        img,
        img,
        img,
    ],
};

function CollapseRow({ title, children }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="mt-4">
            <div
                onClick={() => setOpen((s) => !s)}
                className="flex items-center justify-between cursor-pointer select-none"
            >
                <div className="text-sm font-semibold uppercase">{title}</div>
                <FiChevronDown className={`text-gray-600 transition-transform ${open ? "rotate-0" : "rotate-180"}`} />
            </div>
            {open && <div className="mt-3 text-sm text-gray-700">{children}</div>}
        </div>
    );
}

export default function ViewProduct() {
    const navigate = useNavigate();
    const [active, setActive] = useState(MOCK.thumbs[0]);
    const [stock, setStock] = useState(MOCK.stock);

    const onEdit = () => {
        // navigate to add product page and pass the product object to prefill
        navigate("/sellers/add-product", { state: { product: { ...MOCK, stock } } });
    };

    return (
        <div className="min-h-screen bg-white px-6 lg:px-12 py-10">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* LEFT - gallery */}
                    <div className="lg:w-[48%]">
                        <div className="bg-white rounded-xl overflow-hidden p-6">
                            <div className="w-full h-[420px] rounded-lg overflow-hidden shadow-lg">
                                <img src={active} alt="main" className="w-full h-full object-contain bg-white" />
                            </div>

                            <div className="mt-6 flex items-center gap-4">
                                {MOCK.thumbs.map((t, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(t)}
                                        className={`w-20 h-full rounded-md overflow-hidden border ${active === t ? "ring-2 ring-blue-600" : "border-gray-200"}`}
                                    >
                                        <img src={t} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}

                                <button className="ml-2 w-28 h-26 rounded-md bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow">
                                    Add More Images
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CENTER vertical divider - visible on large screens */}
                    <div className="hidden lg:block w-px bg-gray-200" />

                    {/* RIGHT - details */}
                    <div className="lg:w-[52%]">
                        <h1 className="text-[#0b63ff] text-3xl lg:text-4xl font-semibold leading-tight">
                            {MOCK.title}
                        </h1>

                        <div className="mt-6 flex items-center justify-between gap-6">
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold">{MOCK.price}</div>
                                <div className="text-xs text-gray-500 mt-1">Stock Availability : <span className="font-medium">{stock} Left</span></div>
                            </div>

                            {/* small stock control box */}
                            <div className="flex items-center border-blue-300 border rounded-lg px-2 gap-2">
                                <div className="text-sm text-gray-600 mr-2">Add Stock :</div>
                                <div className="flex items-center  px-2 py-1">
                                    <button
                                        onClick={() => setStock((s) => Math.max(0, s - 1))}
                                        className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                                        aria-label="decrease"
                                    >
                                        <FiMinus />
                                    </button>
                                    <div className="px-4 font-medium">{stock}</div>
                                    <button
                                        onClick={() => setStock((s) => s + 1)}
                                        className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                                        aria-label="increase"
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8  pt-6">
                            <CollapseRow title="Description">
                                <p className="text-sm leading-relaxed">{MOCK.description}</p>
                            </CollapseRow>

                            <CollapseRow title="Highlights">
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    {MOCK.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                                </ul>
                            </CollapseRow>
                        </div>

                        {/* buttons */}
                        <div className="mt-10 flex items-center gap-6">
                            <button
                                onClick={onEdit}
                                className="flex items-center gap-3 px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 bg-white font-semibold hover:bg-blue-50 transition"
                            >
                                <FiEdit size={18} />
                                EDIT
                            </button>

                            <button
                                className="flex items-center gap-3 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                <FiUpload size={18} />
                                UPLOAD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
