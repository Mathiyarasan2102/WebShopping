import React from "react";
import logo from '../../assets/WebShoppingLogo.jpg';

export default function FooterSection() {
    return (
        <div className="w-full max-w-[1600px] mx-auto mt-[clamp(2rem,4vw,3rem)]">

            <footer className="bg-[#0051db] text-white pt-[clamp(2rem,4vw,3rem)] pb-[clamp(1rem,2vw,1.5rem)]">

                {/* Main Grid: Logo on Left, Links on Right */}
                <div className="max-w-[1500px] w-full mx-auto px-[clamp(1rem,3vw,2rem)] grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-[clamp(3rem,5vw,5rem)]">

                    {/* 1. LOGO COLUMN */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="w-[clamp(120px,12vw,160px)] h-[clamp(100px,10vw,140px)] flex items-center justify-center">
                            <img
                                src={logo}
                                alt="WebShopping Logo"
                                className="w-full h-full object-contain"
                                loading="eager"
                            />
                        </div>

                        <p className="text-[clamp(0.7rem,0.9vw,0.8rem)] mt-[clamp(0.8rem,1.2vw,1.5rem)] opacity-80 text-center lg:text-left">
                            © 2025 Least action company. All rights reserved.
                        </p>

                        <div className="flex gap-[clamp(0.8rem,1.2vw,1.5rem)] text-[clamp(0.7rem,0.9vw,0.8rem)] mt-[clamp(0.4rem,0.6vw,0.8rem)] opacity-80 justify-center lg:justify-start">
                            <button className="hover:opacity-100">Terms of service</button>
                            <button className="hover:opacity-100">Privacy policy</button>
                        </div>
                    </div>

                    {/* 2. LINKS SECTION (Merged into Single Grid) */}

                    <div className="grid grid-cols-3  gap-x-[clamp(1rem,2vw,2rem)] gap-y-[clamp(2rem,3vw,3rem)]">

                        {/* --- Row 1 --- */}

                        {/* Sell */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">Sell</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">How to sell</li>
                                <li className="cursor-pointer hover:opacity-100">Seller Dashboard</li>
                                <li className="cursor-pointer hover:opacity-100">Seller Now</li>
                                <li className="cursor-pointer hover:opacity-100">Get a free valuation</li>
                            </ul>
                        </div>

                        {/* Buy */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">Buy</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">Browse</li>
                                <li className="cursor-pointer hover:opacity-100">How to buy</li>
                            </ul>
                        </div>

                        {/* Rent */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">Rent</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">View Rental websites</li>
                                <li className="cursor-pointer hover:opacity-100">Short term rentals</li>
                            </ul>
                        </div>

                        {/* --- Row 2 --- */}

                        {/* The Website */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">The Website</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">Features</li>
                                <li className="cursor-pointer hover:opacity-100">Pricing</li>
                                <li className="cursor-pointer hover:opacity-100">Testimonials</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">Support & Help</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">Help Center</li>
                                <li className="cursor-pointer hover:opacity-100">Tutorials & Guides</li>
                                <li className="cursor-pointer hover:opacity-100">Contact Us</li>
                                <li className="cursor-pointer hover:opacity-100">Report a Bug</li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-[clamp(0.5rem,0.8vw,1rem)] text-[clamp(0.9rem,1.1vw,1.1rem)]">Company</h4>
                            <ul className="text-[clamp(0.8rem,0.95vw,0.95rem)] opacity-80 space-y-[clamp(0.3rem,0.5vw,0.6rem)]">
                                <li className="cursor-pointer hover:opacity-100">About Us</li>
                                <li className="cursor-pointer hover:opacity-100">Our Mission</li>
                                <li className="cursor-pointer hover:opacity-100">Careers</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Text */}
                <div className="w-full text-center mt-[clamp(3rem,5vw,4rem)] pt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.7rem,0.9vw,0.8rem)] border-t border-t-gray-200/30 opacity-80">
                    Powered by Least action company Ltd
                </div>
            </footer>
        </div>
    );
}