import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiChevronDown
} from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import WebbyLogo from '../../assets/WebbyLogo.png';

const websiteOptions = [
  { label: "Business Websites", path: "/websites/business" },
  { label: "Educational Websites", path: "/websites/education" },
  { label: "Construction Websites", path: "/websites/construction" },
  { label: "Real Estate Websites", path: "/websites/real-estate" },
  { label: "Health Care Websites", path: "/websites/health-care" },
];

const productOptions = [
  { label: "Fashion Products", path: "/products/fashion" },
  { label: "Electronics Products", path: "/products/electronics" },
  { label: "Beauty Products", path: "/products/beauty" },
];

export default function Header() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleDropdownNav = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  const handleMobileNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fluid icon size: scales between 20px (mobile) and 24px (desktop)
  const iconSizeClass = "w-[clamp(1.25rem,2vw,1.5rem)] h-[clamp(1.25rem,2vw,1.5rem)]";

  return (
    <header className="w-full max-w-[1600px] mx-auto bg-[#0047FF]" ref={dropdownRef}>

      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1rem,3vw,2rem)] py-[clamp(0.4rem,1vw,0.6rem)] flex items-center justify-between gap-[clamp(0.5rem,2vw,1.5rem)]">

        {/* 1. LEFT: LOGO */}
        <div className="shrink-0 flex items-center">
          <Link to="/" className="flex items-center">
            {/* FLUID TIP #4: Fluid Height using clamp() */}
            <img
              src={WebbyLogo}
              alt="Webby Logo"
              className="h-[clamp(28px,5vw,44px)] w-auto object-contain"
              loading="eager"
            />
          </Link>
        </div>

        {/* 2. MIDDLE: SEARCH BAR */}
        {/* FLUID TIP #2: Flex & Min-Width to prevent overflow */}
        <div className="flex-1 flex justify-center min-w-0 px-[clamp(0.5rem,2vw,2rem)]">
          <div className="w-full max-w-[800px] bg-white rounded-full flex items-center pl-4 pr-1 h-[clamp(36px,4vw,42px)] shadow-sm">
            <input
              type="text"
              placeholder="Search everything on Webby"
              className="flex-1 outline-none text-gray-600 text-[clamp(12px,1.5vw,15px)] placeholder-gray-400 bg-transparent h-full min-w-0"
            />
            <button className="bg-[#002685] text-white w-[clamp(30px,3.5vw,34px)] h-[clamp(30px,3.5vw,34px)] rounded-full grid place-items-center hover:bg-blue-900 transition shrink-0 ml-1">
              <FiSearch className="w-[clamp(14px,1.5vw,16px)] h-[clamp(14px,1.5vw,16px)]" />
            </button>
          </div>
        </div>

        {/* 3. RIGHT: ICONS */}
        {/* FLUID TIP #3: Fluid Gap */}
        <div className="shrink-0 flex items-center gap-[clamp(0.8rem,2vw,1.5rem)] text-white">

          {/* Favorites */}
          <Link to="/favorites" className="flex flex-col items-center gap-0.5 hover:opacity-90 transition">
            <FiHeart className={iconSizeClass} />
            <span className="text-[clamp(9px,1.2vw,11px)] font-medium leading-none">Favorites</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative flex flex-col items-center gap-0.5 hover:opacity-90 transition">
            <div className="relative">
              <FiShoppingCart className={iconSizeClass} />
              <span className="absolute -top-1.5 -right-2 bg-[#FFD700] text-black text-[9px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full border border-[#0047FF]">
                4
              </span>
            </div>
            <span className="text-[clamp(9px,1.2vw,11px)] font-medium leading-none">Cart</span>
          </Link>

          {/* Sign In */}
          <Link to="/signin" className="flex flex-col items-center gap-0.5 hover:opacity-90 transition">
            <FiUser className={iconSizeClass} />
            <span className="text-[clamp(9px,1.2vw,11px)] font-medium leading-none">Sign In</span>
          </Link>

          {/* Menu (Visible only on Mobile via md:hidden) */}
          <button
            className="md:hidden text-white focus:outline-none hover:opacity-80 flex flex-col items-center gap-0.5 transition ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Menu icon slightly larger for touch targets */}
            <FiMenu className="w-[clamp(1.4rem,2.5vw,1.75rem)] h-[clamp(1.4rem,2.5vw,1.75rem)]" />
            <span className="text-[clamp(9px,1.2vw,11px)] font-medium leading-none">Menu</span>
          </button>

        </div>

      </div>

      {/* Category navbar (Desktop) */}
      <div className="bg-[#dbe7ff] border-t border-blue-500/20">
        <div className="w-full max-w-[1440px] mx-auto px-[clamp(1rem,3vw,2rem)] py-2 hidden md:flex items-center justify-center gap-[clamp(1rem,2vw,2rem)]">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("websites")}
              className="bg-white text-gray-800 px-[clamp(1rem,1.5vw,1.5rem)] py-1 cursor-pointer rounded-full text-[13px] font-medium shadow-sm hover:shadow flex items-center gap-2"
            >
              Websites
              <FiChevronDown

                className={`text-[14px] transition-transform duration-200 ${openDropdown === "websites" ? "rotate-180" : ""

                  }`} />
            </button>
            {openDropdown === "websites" && (
              <div className="absolute top-10 left-0 bg-slate-50 w-56 shadow-lg rounded-md border py-2 z-50">
                {websiteOptions.map((item) => (
                  <button key={item.label} onClick={() => handleDropdownNav(item.path)} className="w-full my-1 border-b border-gray-300 cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-100">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="bg-white text-gray-800 px-[clamp(1rem,1.5vw,1.5rem)] py-1 rounded-full cursor-pointer text-[13px] font-medium shadow-sm hover:shadow flex items-center gap-2"
            >
              Products
              <FiChevronDown

                className={`text-[14px] transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""

                  }`}

              />
            </button>
            {openDropdown === "products" && (
              <div className="absolute top-10 left-0  bg-white w-56 shadow-lg rounded-md border py-2 z-50">
                {productOptions.map((item) => (
                  <button key={item.label} onClick={() => handleDropdownNav(item.path)} className="w-full my-1 border-b border-gray-300 cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-100">
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/sellers/add-product" className="bg-white text-gray-600 px-[clamp(1rem,1.5vw,1.5rem)] py-1 rounded-full text-[13px] font-medium shadow-sm hover:shadow">
            For Sellers
          </Link>
          <Link to="/insights" className="bg-white text-gray-600 px-[clamp(1rem,1.5vw,1.5rem)] py-1 rounded-full text-[13px] font-medium shadow-sm hover:shadow">
            Insights
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-b z-40">
          <div className="w-full px-4 py-3">
            <h3 className="font-semibold text-gray-800 px-2 pt-2">Websites</h3>
            <div className="flex flex-col mb-2">
              {websiteOptions.map((item) => (
                <Link key={item.label} to={item.path} onClick={() => handleMobileNav(item.path)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  {item.label}
                </Link>
              ))}
            </div>
            <h3 className="font-semibold text-gray-800 px-2 pt-2">Products</h3>
            <div className="flex flex-col mb-2">
              {productOptions.map((item) => (
                <Link key={item.label} to={item.path} onClick={() => handleMobileNav(item.path)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  {item.label}
                </Link>
              ))}
            </div>
            <hr className="my-2" />
            <div className="flex flex-col">
              <Link to="/sellers" onClick={() => handleMobileNav("/sellers")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">For Sellers</Link>
              <Link to="/insights" onClick={() => handleMobileNav("/insights")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Insights</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}