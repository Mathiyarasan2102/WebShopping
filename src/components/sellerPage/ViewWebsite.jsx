import React from "react";
import { FiChevronDown, FiEdit2, FiUpload } from "react-icons/fi";
import LearnEase from '../../assets/RentWithConfidenceImages/LearnEase.png'

export default function ViewWebsite() {
  return (
    <div className="w-full min-h-screen bg-white px-6 lg:px-12 py-10">
      <div className="max-w-[1400px] mx-auto">

        {/* ================= LEFT IMAGE + THUMBNAILS ================= */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* MAIN IMAGE */}
          <div className="lg:w-[55%]">
            <div className="w-full h-[350px] rounded-md overflow-hidden border">
              <img
                src={LearnEase}
                alt="main"
                className="w-full h-full object-cover"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-full h-full rounded-md overflow-hidden border cursor-pointer"
                >
                  <img
                    src={LearnEase}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button className="w-full h-[6.5vw] rounded-md border bg-blue-600 flex items-center justify-center text-sm text-gray-50 hover:bg-blue-700">
                Add More <br /> Images
              </button>
            </div>
          </div>

          {/* ================= RIGHT DETAILS ================= */}
          <div className="lg:w-[45%]">
            <h1 className="text-[32px] font-semibold text-gray-900">LearnEase</h1>

            <p className="text-[28px] font-semibold mt-1">₹3,247</p>

            {/* DESCRIPTION */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[15px] uppercase">Description</h2>
                <FiChevronDown className="text-gray-600" />
              </div>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                A modern and fully responsive educational website designed to
                attract learners and institutions. Built with a clean layout,
                easy navigation, and integrated course management features to
                enhance user engagement and drive conversions.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[15px] uppercase">Highlights</h2>
                <FiChevronDown className="text-gray-600" />
              </div>

              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• Website Background : Education</li>
                <li>• Owning Type : Rent / Buy</li>
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-10">

              {/* EDIT BUTTON */}
              <button className="flex items-center gap-2 bg-white border px-6 py-2 rounded-md shadow hover:bg-gray-50 text-blue-600 font-medium">
                <FiEdit2 size={18} />
                EDIT
              </button>

              {/* UPLOAD BUTTON */}
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 font-medium">
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
