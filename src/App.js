import React, { useState } from "react";
import blockImage from "./assets/blocks.png";
import bagImage from "./assets/shoppingbag.png";
import diamondImage from "./assets/diamond.png";
import coverImage1 from "./assets/coverImage1.png";
import coverImage2 from "./assets/coverImage2.png";
import dollarSign from "./assets/dollarSign.png"

const App = () => {
  const [coverImage, setCoverImage] = useState(coverImage1);
  const [activeSpan, setActiveSpan] = useState("Fennel seed");
  const [colorText, setColorText] = useState("Fennel seed");

  const handleGrayClick = () => {
    setCoverImage(coverImage2);
    setActiveSpan("Heathered gray");
    setColorText("Heathered gray");
  };

  const handleBrownClick = () => {
    setCoverImage(coverImage1);
    setActiveSpan("Fennel seed");
    setColorText("Fennel seed");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center bg-white relative p-10 order-1 lg:order-2">
        <img
          src={coverImage}
          alt="Model wearing sweater"
          className="absolute top-0 left-0 mt-20"
        />
        
        {/* Moving Boxes */}
        <div className="absolute left-16 top-240 mt-40 flex space-x-4">
          <img src={dollarSign} className="animate-up-down w-4 h-6" />
          <div className="w-10 h-10 bg-box-purple rounded animate-up-down"></div> {/* Smaller box */}
          <div className="w-16 h-16 bg-box-pink rounded animate-down-up"></div>
          <img src={dollarSign} className="animate-up-down w-6 h-8" /> {/* Original size box */}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 relative z-10 w-full max-w-sm mt-40 pl-10 lg:mt-0 lg:ml-0">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-4xl font-bold text-gradient">
                Sweater in Everyday Cotton
              </h2>
              <p className="text-custom-purple mt-2">
                The perfect boxy-fit sweater, The Boxy Sweater in Everyday
                Cotton is a layering essential. Featuring a chunky rib stitch at
                the crew neckline, along the hem, and sleeve cuffs, it has
                dropped shoulders for a relaxed edge. It’s made with 100%
                organic cotton, and designed to be styled solo or easily topped
                with a blazer or cardigan.
              </p>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-${colorText.toLowerCase()} font-semibold text-custom-purple`}
                >
                  Color: {colorText}
                </span>
              </div>
              <div className="flex space-x-2">
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer ${
                    activeSpan === "Fennel seed"
                      ? "border-black text-white"
                      : "bg-brown-500 text-white"
                  }`}
                  onClick={handleBrownClick}
                  style={{ backgroundColor: "#D2C200" }}
                ></span>
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer ${
                    activeSpan === "Heathered gray"
                      ? "border-black text-black"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={handleGrayClick}
                  style={{ backgroundColor: "#99A196" }}
                ></span>
              </div>
              <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-lg w-full">
                Add to Cart | $40
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white relative order-2 lg:order-1">
        <img
          src={blockImage}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background blocks"
        />

        {/* Container for content with padding */}
        <div className="p-10 max-w-xl mx-auto">
          <h1 className="text-6xl font-bold text-gradient mb-4 text-center lg:text-left z-10">
            Start making money from your returns.
          </h1>
          <p className="text-custom-purple mb-6 text-center lg:text-left z-10">
            Built for Shopify merchants of all sizes.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 z-10">
            <button className="bg-deep-blue text-white px-6 py-3 rounded-xl flex items-center space-x-2">
              <img src={bagImage} alt="Shopify logo" className="w-5 h-5" />
              <span>Install app now</span>
            </button>
            <button className="bg-light-blue text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2">
              <img src={diamondImage} alt="Shopify logo" className="w-5 h-5" />
              <span>Built for Shopify</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
