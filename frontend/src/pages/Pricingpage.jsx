import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Pricingpage = () => {
  const navigate = useNavigate();

  const handleScrollToDemo = (e) => {
    e.preventDefault();
    navigate("/#schedule-demo");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 mt-[70px]">
              Simple, <span className="text-gray-300">Transparent Pricing</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Personalized responses via calls and messages. Customizable for both outgoing and incoming communications.
            </p>
            <p className="text-2xl font-bold mb-1">
              Rs. 999 <span className="text-lg font-normal">/month</span>
            </p>
            <p className="text-gray-400 mb-6">Ideal for growing businesses</p>

            {/* Corrected button with scrolling function */}
            <button
              onClick={handleScrollToDemo}
              className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-purple-700 transition mb-6"
            >
              Book a free demo
            </button>

            <ul className="space-y-2">
              {Array(5)
                .fill("Up to 5,000 AI-powered calls/month")
                .map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FaCheck className="text-green-500 mr-2" /> {item}
                  </li>
                ))}
            </ul>
          </div>

          {/* Right Section: Illustration */}
          <div className="flex justify-center">
            <img
              src="https://storage.googleapis.com/jwelleryrnpsoft/Pricing.png"
              alt="Pricing Illustration"
              className="w-full mt-[30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricingpage;
