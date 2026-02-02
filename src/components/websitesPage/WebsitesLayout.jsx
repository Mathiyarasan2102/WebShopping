import React from "react";

/* --- Helpers --- */
const Stars = ({ value = 4 }) => (
    <div className="flex items-center gap-0.5 text-[11px] text-yellow-500">
        {"★".repeat(value)}
        <span className="text-gray-300">{"☆".repeat(5 - value)}</span>
    </div>
);

const TinyBtn = ({ children, variant = "primary" }) => {
    const base = "px-6 py-1.5 rounded-full text-[12px] font-semibold transition";
    const styles =
        variant === "primary"
            ? "bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
            : "bg-white text-blue-600 cursor-pointer border border-blue-600 hover:bg-blue-50";
    return <button className={`${base} ${styles}`}>{children}</button>;
};

const Price = ({ amount }) => (
    <div className="text-[15px] font-semibold">{amount || "₹1,000"}</div>
);

const SectionTitle = ({ children }) => (
    <h3 className="text-[15px] font-semibold">{children}</h3>
);

/* --- Cards --- */
const LearningCard = ({ item }) => (
    <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <img src={item.img} alt={item.title} className="h-[220px] w-full object-cover" />
        <div className="px-3 py-2">
            <div className="text-[13px] font-semibold">{item.title}</div>
            <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
            <div className="mt-3 flex items-start justify-between">
                <div className="flex flex-col">
                    <Price amount={item.price} />
                    <div className="mt-1">
                        <Stars />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <TinyBtn variant="secondary">Rent</TinyBtn>
                    <TinyBtn>Buy</TinyBtn>
                </div>
            </div>
        </div>
    </div>
);

const NewDesignCard = ({ item }) => (
    <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <img src={item.img} alt={item.title} className="h-[220px] w-full object-cover" />
        <div className="px-3 py-2">
            <div className="text-[13px] font-semibold leading-snug text-[#0053E2]">{item.title}</div>
            <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
            <div className="mt-3 flex items-start justify-between">
                <div className="flex flex-col">
                    <Price amount={item.price} />
                    <div className="mt-1">
                        <Stars />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <TinyBtn variant="secondary">Rent</TinyBtn>
                    <TinyBtn>Buy</TinyBtn>
                </div>
            </div>
        </div>
    </div>
);

const ProductCard = ({ item }) => (
    <div className="rounded-xl bg-white shadow-sm overflow-hidden h-[280px]">
        <img src={item.img} alt={item.title} className="h-[150px] w-full object-contain" />
        <div className="px-3 py-2">
            <div className="text-[13px] font-semibold leading-snug line-clamp-2 text-[#0053E2]">{item.title}</div>
            <div className="mt-3 flex items-start justify-between">
                <div className="flex flex-col">
                    <Price amount={item.price} />
                    <div className="mt-1">
                        <Stars />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <TinyBtn>Buy</TinyBtn>
                </div>
            </div>
        </div>
    </div>
);

/* --- Main Page --- */
export default function WebsitesPage({ title, description, bannerImg, learningData, newDesignData, ecommerceData }) {
    return (
        <div className="max-w-[1500px] mx-auto px-4 py-8">
            {/* HERO */}
            <div className="relative bg-[#002E99] h-[290px] text-white rounded-l-2xl rounded-r-2xl sm:rounded-r-[20px] md:rounded-r-[130px] lg:rounded-r-[130px] p-6 md:p-8 overflow-visible">
                <div className="max-w-[520px]">
                    <h1 className="text-white font-poppins text-4xl leading-[1.2] tracking-tight">{title}</h1>
                    <p className="text-[12px] md:text-[13px] mt-2 opacity-95">{description}</p>
                </div>

                {/* Center "View more" */}
                <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-50">
                    <button className="px-6 py-2 cursor-pointer bg-[#0053E2] text-white rounded-full font-semibold text-[12px] shadow-md hover:bg-white hover:text-[#0053E2] hover:shadow-none transition">
                        View more
                    </button>
                </div>

                {/* Wavy line */}
                <svg className="absolute bottom-0 left-0 w-full pointer-events-none" height="60" viewBox="0 0 1440 60" fill="none">
                    <path
                        d="M0 45 C 40 20, 80 20, 120 40 S 200 70, 280 40 S 420 10, 520 35 S 700 70, 820 45 S 1000 25, 1120 30 S 1300 55, 1440 -275"
                        stroke="white" strokeWidth="3" strokeLinecap="round"
                    />
                </svg>

                {/* Right round image */}
                <div className="hidden md:block absolute right-[-85px] top-1/2 -translate-y-1/2 -translate-x-2/8 z-10">
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden  shadow-lg">
                        <img src={bannerImg} alt="Banner" className="w-full h-full" />
                    </div>
                </div>
            </div>

            {/* Buy & Sell */}
            <div className="mt-6">
                <SectionTitle>Buy & Sell Learning Platforms</SectionTitle>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learningData?.map((item) => <LearningCard key={item.title} item={item} />)}
                </div>
                <div className="flex justify-center bg-[#0053E2] p-3 mt-5 rounded-md">
                    <TinyBtn variant="secondary">View more</TinyBtn>
                </div>
            </div>

            {/* New design */}
            <div className="mt-8">
                <SectionTitle>New design Websites</SectionTitle>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newDesignData?.map((item) => <NewDesignCard key={item.title} item={item} />)}
                </div>

            </div>

            {/* E-commerce products */}
            <div className="mt-8">
                <SectionTitle>E-commerce products</SectionTitle>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ecommerceData?.map((item) => <ProductCard key={item.title} item={item} />)}
                </div>

            </div>
        </div>
    );
}
