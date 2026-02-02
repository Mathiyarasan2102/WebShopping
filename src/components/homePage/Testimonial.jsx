import React from 'react'
import Women from '../../assets/FooterWomen.png';

export default function Testimonial() {
    return (
        <>
            {/* FLUID TIP #1: Outer Section with Fluid Padding */}
            <div className="bg-[#d7e5ff] max-w-[1600px] mx-auto py-[clamp(1.5rem,3vw,2rem)] flex justify-center px-[clamp(1rem,3vw,2rem)]">

                <div className="bg-white w-full 
                                px-[clamp(5rem,3vw,2.5rem)] py-[clamp(1.5rem,3vw,2.5rem)] 
                                flex flex-col sm:flex-row gap-[clamp(1.5rem,2vw,2rem)] items-center shadow-sm border border-gray-200"> {/* Added subtle border for definition */}

                    {/* Image - Fluid size, always rounded-md */}
                    <img
                        src={Women}
                        alt="Olivia Wilson"
                        className="w-[clamp(10rem,8vw,8rem)] h-[clamp(6rem,8vw,8rem)] object-cover shrink-0"
                    />

                    {/* Text Content */}
                    <div className="text-center sm:text-left flex-1 px-[clamp(5rem,3vw,2.5rem)] py-[clamp(1.5rem,3vw,2.5rem)] "> {/* flex-1 allows text to take available space */}
                        <p className="text-[clamp(1rem,1.4vw,1.2rem)] text-gray-800 leading-snug">
                            Exceptional experience! The team was very attentive and professional.
                        </p>

                        {/* Name and Stars - Now inline and properly spaced */}
                        <div className="mt-[clamp(0.5rem,0.8vw,0.8rem)] font-medium text-gray-800 text-[clamp(1rem,1.4vw,1.2rem)] flex items-center justify-center sm:justify-start">
                            <span>– Olivia Wilson</span>
                            <span className="text-yellow-500 ml-[clamp(0.5rem,1vw,1rem)]">★★★★★</span> {/* Stars moved here */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}