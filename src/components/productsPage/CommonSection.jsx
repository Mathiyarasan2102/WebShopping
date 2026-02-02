// src/components/productsPage/CommonSection.jsx
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Heart from "../../common/Heart";
import Rating from "../../common/Star";
import { Link } from "react-router-dom";


/* ---------------- ProductCard (kept your same markup & classes) ---------------- */

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-visible p-4">

      {/* IMAGE */}
      <div className="relative h-[350px] w-full flex items-center justify-center shadow-md bg-white">
        {item.img ? (
          <img
            src={item.img}
            alt={item.title}
            className="max-h-full max-w-full object-contain p-6"
            loading="lazy"
          />
        ) : (
          <div className="text-gray-400">No image</div>
        )}

        {/* Heart icon */}
        <div className="absolute top-4 right-4 z-10">
          <Heart initialLiked={item.liked} onToggle={() => { }} />
        </div>
      </div>

      {/* ADD BUTTON (below image & right side) */}
      <div className="flex justify-end mt-3">
        <button
          type="button"
          className="inline-flex items-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 
          text-white text-sm font-medium px-4 py-2 rounded-full shadow"
        >
          <span className="text-xl leading-none">+</span>
          <span>Add</span>
        </button>
      </div>

      {/* PRICE */}
      <p className="mt-4 text-[20px] font-semibold text-gray-900">
        {item.price}
      </p>

      {/* TITLE */}
      <p
        className="mt-1 text-blue-600 font-semibold cursor-pointer hover:underline text-[20px] leading-tight line-clamp-2"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.title}
      </p>

      {/* RATING */}
      <div className="mt-2">
        <Rating value={item.rating} />
      </div>
    </div>
  );
};



/* TrendingRightCard (Right side layout) */
const TrendingRightCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full">
      {/* IMAGE area sized to match promo heights for alignment */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[360px] flex items-center justify-center bg-white shadow-sm rounded-lg overflow-hidden">
        {item.img ? (
          <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" loading="lazy" />
        ) : (
          <div className="text-gray-400">No Image</div>
        )}

        <div className="absolute top-3 right-3">
          <Heart initialLiked={item.liked} />
        </div>
      </div>

      {/* Add button below image, right aligned */}
      <div className="flex justify-end mt-3">
        <button
          type="button"
          className="inline-flex items-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 
          text-white text-sm font-medium px-4 py-2 rounded-full shadow"
        >
          <span className="text-xl leading-none">+</span>
          <span>Add</span>
        </button>
      </div>

      {/* PRICE / TITLE / RATING */}
      <p className="mt-4 text-[18px] font-semibold text-gray-900">{item.price}</p>
      <p className="mt-1 text-[16px] font-semibold cursor-pointer hover:underline text-blue-600 leading-tight line-clamp-2">{item.title}</p>
      <div className="mt-1"><Rating value={item.rating} /></div>
    </div>
  );
};

/* ---------------- Category / Brand small pieces ---------------- */

const CategoryPill = ({ item, section = "" }) => {
  // Background mapping requested earlier
  const normalBg =
    section === "fashion" ? "bg-[#E1E1E1]" :
      section === "electronics" ? "bg-[#F0F0F0]" :
        "bg-white";

  // explicit widths for consistent square at each breakpoint (adds lg step)
  const sizeClasses = "w-full sm:w-[160px] md:w-[170px] lg:w-[190px] xl:w-[250px] aspect-square rounded-xl";

  // responsive padding so content breathes at each size
  const padClasses = "p-2 sm:p-3 md:p-4 lg:p-5";

  const href = item.link || "#";

  if (item.label === "New Arrivals") {
    return (
      <div className="flex flex-col items-center p-1">
        <Link to={href} className="flex flex-col items-center cursor-pointer w-full">
          <div
            className={`${sizeClasses} ${padClasses} flex flex-col justify-between text-white shadow-md group overflow-hidden`}
            style={{ backgroundColor: "#0053E2" }}
            aria-label="New Arrivals"
          >
            <div className="pt-1 sm:pt-2 md:pt-3 mt-5">
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold ">
                New
              </p>
              <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-extrabold -mt-1">
                Arrivals
              </p>
            </div>

            <div className="w-full flex justify-center translate-x-16 -translate-y-8 pr-1 pb-1">
              <span
                className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[36px] 
                           transform transition-transform duration-300 group-hover:-translate-x-5"
                aria-hidden
              >
                ←
              </span>
            </div>
          </div>

          <p className="mt-3 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-gray-900 text-center">
            New Arrivals
          </p>
        </Link>
      </div>
    );
  }

  // Normal category
  return (
    <div className="flex flex-col items-center p-1">
      <Link to={href} className="flex flex-col items-center cursor-pointer w-full">
        <div
          className={`${sizeClasses} ${padClasses} flex items-center justify-center shadow-md ${normalBg} overflow-hidden`}
          aria-label={item.label}
        >
          {item.img ? (
            <img
              src={item.img}
              alt={item.label}
              className="max-w-[98%] max-h-[98%] object-contain"
              loading="lazy"
            />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </div>

        <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium text-gray-900 text-center">
          {item.label}
        </p>
      </Link>
    </div>
  );
};




const BrandTile = ({ item }) => (
  <div className="flex flex-col items-center">
    <div className="w-52 h-28 rounded-xl bg-white shadow-md p-4 flex items-center justify-center">
      <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain" loading="lazy" />
    </div>
    <div className="mt-3 text-[15px] font-medium text-gray-900 text-center">{item.name}</div>
  </div>
);

/* ---------------- CommonSection (fetch JSON + render) ---------------- */

export default function CommonSection({ section = "" }) {
  const [data, setData] = React.useState(undefined); // undefined = loading, null = no data
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const url = "/data/products.json";

    async function load() {
      try {
        const res = await fetch(url, { cache: "no-store" });
        console.log("[CommonSection] fetch", url, res.status, res.headers.get("content-type"));

        if (!res.ok) {
          const txt = await res.text();
          console.error(`[CommonSection] fetch failed (${res.status}) preview:\n`, txt.slice(0, 800));
          if (!cancelled) setData(null);
          return;
        }

        const ct = (res.headers.get("content-type") || "").toLowerCase();
        if (!ct.includes("application/json")) {
          // debugging: show first chars (you were seeing index.html)
          const txt = await res.text();
          console.error("[CommonSection] expected JSON but got:", txt.slice(0, 1000));
          if (!cancelled) setData(null);
          return;
        }

        const json = await res.json();
        if (!cancelled) setData(json[section] ?? null);
      } catch (err) {
        console.error("[CommonSection] Failed to load JSON:", err);
        if (!cancelled) setData(null);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [section]);

  if (data === undefined) return <p className="text-center py-10">Loading…</p>;
  if (data === null) return <p className="text-center py-10">No data for "{section}" or file missing/invalid.</p>;

  const visibleBrands = expanded ? (data.brands || []) : (data.brands || []).slice(0, 5);

  return (
    <div className="max-w-[1500px] mx-auto px-6 py-8">
      <div className="w-full bg-white pb-5">
        <div
          role="region"
          aria-label="Hero"
          className="w-full rounded-[2.5rem] px-4 sm:px-6 md:px-12 py-6 sm:py-10 lg:py-10 flex flex-nowrap items-center justify-between gap-6 relative overflow-hidden sm:overflow-visible bg-linear-to-r from-[#00338f] to-[#002E99]"
        >
          {/* LEFT: text column (always left) */}
          <div className="min-w-0 w-[60%] pl-4 pr-4 text-left">
            <h1
              className="font-medium text-white leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.0vw, 2.8rem)", lineHeight: 1.05 }}
              dangerouslySetInnerHTML={{ __html: data.hero?.title ?? "" }}
            />

            <p className="text-blue-100 mt-4 max-w-full text-sm md:text-base">
              {data.hero?.subtitle}
            </p>
          </div>

          {/* RIGHT: large white image card */}
          <div className="sm:w-[36%] w-[40%] min-w-[120px] flex items-center justify-end pr-4">
            <div
              className="bg-white rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[4rem] flex items-center justify-center p-5 shadow-2xl overflow-hidden w-full h-[clamp(120px,22vw,320px)] translate-x-2 sm:translate-x-8"
              aria-hidden
            >
              <img
                src={data.hero?.image}
                alt={data.hero?.imageAlt ?? "banner"}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>


          {/* Centered View More button (over hero, horizontally center) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 sm:bottom-2 md:bottom-8">
            <button
              className="
          bg-[#0053E2] text-white shadow-lg rounded-full
          text-xs sm:text-sm md:text-base
          px-3 py-1 sm:px-5 sm:py-2 md:px-8 md:py-3 cursor-pointer "
            >
              View More
            </button>
          </div>

        </div>
      </div>

      {/* categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Shop by category</h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${section === "beauty" || section === "fashion" ? "lg:grid-cols-5" : "lg:grid-cols-4"} gap-4 `}
        >
          {(data.categories || []).map((c, i) => <CategoryPill key={c.label ?? i} item={c} section={section} />
          )}
        </div>
      </div>

      {/* Promo + Trending */}
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* PROMO  */}
          <div className="md:col-span-1 order-1">
            <div className="rounded-2xl overflow-hidden h-full">
              <div className="w-full h-[320px] sm:h-[380px] md:h-[650px] md:w-auto lg:h-[620px] flex items-center justify-center rounded-lg overflow-hidden bg-white">
                {
                  Array.isArray(data.promoProducts) && data.promoProducts.length > 0 && data.promoProducts[0].img ? (
                    <img
                      src={data.promoProducts[0].img}
                      alt={data.promoProducts[0].title ?? "PromoImage"} className="w-full h-full" loading="lazy" />
                  ) : ""
                }
              </div>
            </div>
          </div>


          {/* Trending column (title + subtitle + list) */}
          <div className={`order-2 ${data.promoProducts ? "md:col-span-2" : "md:col-span-3"}`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold">Trending products</h3>
                {data.trendingSubtitle && <p className="text-sm text-gray-500 mt-1">{data.trendingSubtitle}</p>}
              </div>

              <button className="text-sm text-gray-500 cursor-pointer hover:underline hover:text-gray-700">View more</button>
            </div>

            {/* trending cards grid (cards use same responsive image heights as promo) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(data.trendingProducts || []).map((p) => (
                <TrendingRightCard key={p.id ?? p.title} item={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highly rated */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-2xl font-semibold">Highly rated</h3>
            <p className="text-sm text-gray-500">{data.highlyRatedSubtitle ?? ""}</p>
          </div>
          <button className="text-sm text-gray-500 cursor-pointer hover:underline hover:text-gray-700">View more</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ gridAutoRows: "1fr" }}>
          {(data.highlyRated || []).map((p) => <ProductCard key={p.id ?? p.title} item={p} />)}
        </div>
      </div>

      {/* Brands */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-xl font-semibold">Brands</h2>
            <p className="text-gray-400 text-sm">Brands you may love</p>
          </div>

          {Array.isArray(data.brands) && data.brands.length > 5 && (
            <div>
              <button onClick={() => setExpanded((s) => !s)} type="button" aria-expanded={expanded} className="text-gray-500 text-sm cursor-pointer hover:underline hover:text-gray-700 focus:outline-none">
                {expanded ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleBrands.map((b) => <BrandTile key={b.name} item={b} />)}
        </div>
      </section>
    </div >
  );
}
