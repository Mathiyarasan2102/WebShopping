import React, { useState, useRef } from "react";
import AddImage from "../../assets/SellerPageImages/AddImage.png";

export default function AddProductFormPage() {
  const [mainImage, setMainImage] = useState(null);

  // Default thumbnails
  const defaultThumbs = [AddImage, AddImage, AddImage];
  const [thumbImages, setThumbImages] = useState(defaultThumbs);

  const [selectedType, setSelectedType] = useState("");

  // 1. New State for text inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    highlights: "",
    category: "",
  });

  const mainRef = useRef(null);
  const moreRef = useRef(null);

  /* ---------------- HANDLERS ---------------- */

  // 2. Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ---------------- MAIN IMAGE UPLOAD ---------------- */
  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return alert("Select valid image");
    setMainImage(URL.createObjectURL(file));
  };

  /* ---------------- MORE IMAGES UPLOAD ---------------- */
  const handleMoreUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // max 3 images
    if (files.length === 0) return;

    const newThumbs = [...defaultThumbs]; // start fresh default

    // Replace default thumbs with uploaded ones
    files.forEach((file, index) => {
      if (file.type.startsWith("image/")) {
        newThumbs[index] = URL.createObjectURL(file);
      }
    });

    setThumbImages(newThumbs);
  };

  // 3. Validation Logic
  // Checks if Main Image, Type, and all Text Inputs are filled
  const isFormValid = 
    mainImage !== null &&
    selectedType !== "" &&
    formData.title.trim() !== "" &&
    formData.description.trim() !== "" &&
    formData.price !== "" &&
    formData.highlights.trim() !== "" &&
    formData.category.trim() !== "";

  return (
    <div className="w-full min-h-screen bg-white flex justify-center p-10">
      <div className="max-w-[1200px] w-full flex flex-wrap gap-10">

        {/* ---------------- LEFT – IMAGE UPLOAD ---------------- */}
        <div className="flex-1 min-w-[350px]">

          {/* MAIN IMAGE */}
          <div
            className="w-full aspect-video border-2 border-gray-300 rounded-md relative overflow-hidden cursor-pointer flex items-center justify-center"
            onClick={() => mainRef.current.click()}
          >
            {!mainImage && (
              <>
                <img
                  src={AddImage}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  alt="placeholder"
                />
                <div className="relative z-10 bg-white border-2 border-gray-300 bg-opacity-40 px-4 py-2 font-medium rounded-md">
                  Add image
                </div>
              </>
            )}

            {mainImage && (
              <img
                src={mainImage}
                className="absolute inset-0 w-full h-full object-contain"
                alt="uploaded main"
              />
            )}
          </div>

          <input
            type="file"
            ref={mainRef}
            accept="image/*"
            className="hidden"
            onChange={handleMainImageUpload}
          />

          {/* ---------------- THUMBNAILS ---------------- */}
          <div className="grid grid-cols-4 gap-4 mt-5">
            {thumbImages.map((src, index) => (
              <div
                key={index}
                className="aspect-square border-2 border-gray-300 rounded-md flex items-center justify-center p-3 bg-white"
                
              >
                <img src={src} className="w-full h-full object-contain" alt={`thumb-${index}`} />
              </div>
            ))}

            {/* ADD MORE IMAGE BOX */}
            <div
              onClick={() => moreRef.current.click()}
              className="aspect-square bg-blue-600 text-white rounded-md flex items-center justify-center text-center cursor-pointer"
            >
              Add more <br /> image
            </div>

            <input
              type="file"
              ref={moreRef}
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleMoreUpload}
            />
          </div>
        </div>

        {/* ---------------- RIGHT – FORM ---------------- */}
        <div className="flex-1 min-w-[350px] flex flex-col gap-5">

          {/* Title */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Title</label>
            <input
              type="text"
              name="title" 
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter name of the product"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description of the product"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedType("Product")}
                className={`border-2 rounded-full px-6 py-2 text-sm font-medium transition ${selectedType === "Product"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
                  }`}
              >
                Product
              </button>
              <button
                onClick={() => setSelectedType("Website")}
                className={`border-2 rounded-full px-6 py-2 text-sm font-medium transition ${selectedType === "Website"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
                  }`}
              >
                Website
              </button>
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Price</label>
            <input
              type="number"
              name="price"
              min="0"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price of the product"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Highlights */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Highlights</label>
            <input
              type="text"
              name="highlights"
              value={formData.highlights}
              onChange={handleInputChange}
              placeholder="Enter highlights of the product"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-[#0066FF] mb-2 text-base">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              placeholder="Enter category (e.g., Electronics)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Done Button */}
          <div className="flex justify-end mt-4">
            <button
              disabled={!isFormValid}
              className={`px-12 py-3 rounded-lg font-semibold text-base transition shadow-md bg-[#0066FF] text-white 
                ${!isFormValid 
                  ? "cursor-not-allowed " // Disabled Style
                  : "cursor-pointer hover:bg-blue-700"    // Active Style
                }`}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}