import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import EasyRoomBannerImage from "../../assets/HeroSectionImages/EasyRoomBanner.png";
import EduWaveBannerImage from "../../assets/HeroSectionImages/EduWaveBanner.png";
import GoVibeBannerImage from "../../assets/HeroSectionImages/GoVibeBanner.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function HeroSection() {
  const slides = [
    {
      image: EasyRoomBannerImage,
      sideTitle: "Easy Room",
      sideDesc: "A minimal rental website offering quick room searches and easy booking.",
    },
    {
      image: GoVibeBannerImage,
      sideTitle: "GoVibe",
      sideDesc: "Discover new places and experiences tailored to your travel vibe.",
    },
    {
      image: EduWaveBannerImage,
      sideTitle: "EduWave",
      sideDesc: "A clean, modern website for smooth online learning experiences.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const thumbsRef = useRef(null);

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="max-w-full  mx-2.5 mt-10 rounded-xl border-2 sm:px-5 sm:py-5 sm:m-5 md:m-5  md:pl-10 md:pb-5 lg:pl-10 lg:py-5 px-2 pt-2
     bg-[#002E99]">

        {/* --- LEFT ARROW --- */}
        <button
          className="absolute left-[clamp(0.5rem,1.5vw,1.5rem)] top-2/5 -translate-y-1/2 text-white hover:text-gray-300 transition z-30 p-1 focus:outline-none"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiChevronLeft className="w-[clamp(2rem,4vw,3rem)] h-[clamp(2rem,4vw,3rem)]" />
        </button>

        {/* --- RIGHT ARROW --- */}
        <button
          className="absolute right-[clamp(0.5rem,1.5vw,1.5rem)] top-2/5 -translate-y-1/2 text-white hover:text-gray-300 transition z-30 p-1 focus:outline-none"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiChevronRight className="w-[clamp(2rem,4vw,3rem)] h-[clamp(2rem,4vw,3rem)]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 relative">

          {/* LEFT SLIDER */}
          <div className="relative rounded-xl overflow-hidden">

            <Swiper
              modules={[Navigation, Thumbs, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              thumbs={{ swiper: thumbsRef.current }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                thumbsRef.current?.slideTo(swiper.activeIndex);
              }}
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="relative cursor-pointer">
                    <img src={s.image} className="lg:h-[380px] sm:h-[280px] md:h-[300px] w-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Slider */}
            <div className="absolute bottom-3 hidden sm:block left-3 right-3 z-20">
              <Swiper
                modules={[Thumbs]}
                spaceBetween={8}
                slidesPerView={3}
                onSwiper={(swiper) => (thumbsRef.current = swiper)}
                watchSlidesProgress
              >
                {slides.map((s, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <SwiperSlide
                      key={i}
                      onClick={() => swiperRef.current?.slideTo(i)}
                      className="w-[100px]! p-[5px] "
                    >
                      <div
                        className={`relative rounded-lg overflow-hidden  cursor-pointer transition-all duration-200 
                        ${isActive ? "ring-1.5 ring-gray-400 scale-[1.05]" : "ring ring-white/50 opacity-100"}`}
                      >
                        <img src={s.image} className="h-[55px] w-full object-cover" />
                        <div className={`absolute inset-0 ${isActive ? "bg-black/0" : "bg-black/30"}`} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-[#002E99] text-white p-2 rounded-xl flex flex-col justify-center">
            <h3 className="text-[22px] font-semibold mb-2">{slides[activeIndex].sideTitle}</h3>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">{slides[activeIndex].sideDesc}</p>
            <div className="flex justify-center">
              <button className="bg-white text-[#0047d7] font-semibold px-6 py-1.5 rounded-full text-sm hover:bg-gray-100">
                More
              </button>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
