import React from "react";
import PromoImage from "../../assets/PromoImage.png";

export default function PromoSection() {
  return (
    <div className=" mt-10 max-w-[1600px] mx-auto backdrop-blur-3xl px-8 py-2">

      <div className="relative rounded-[22px] shadow-[0_0_15px_#6798EE] blur-none backdrop-blur-3xl bg-linear-to-b from-[#6798EE] to-[#c3d8fc] overflow-hidden ">
        <div className="absolute top-2 left-3 z-3 px-2 py-2  rounded-[18px] ">
          <p className="font-semibold text-white text-[clamp(0.5rem,1.5vw,1.4rem)]">
            The Next Generation Websites are<br />Here
            <button className="underline cursor-pointer font-light px-2 text-white ml-1 text-[clamp(0.5rem,1.5vw,1.4rem)]">
              View now
            </button>
          </p>

        </div>

        {/* ✅ Image  */}
        <img
          src={PromoImage}
          alt="promo"
          className="relative w-full object-cover px-3 py-5 sm:px-2 md:p-4 lg:p-6"
        />
      </div>
    </div>
  );
}
