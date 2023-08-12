"use client";
import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css";

const ProductCarousel = ({
  setDisplayCarousel,
  activeThumb,
  handleClickThumb,
  productTabImg,
  handleBackward,
  handleNext,
  productTabThumbImg
}) => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
      delay: 100
    })
  }, []);

  return (
    <div className="h-screen z-[600] w-full fixed left-0 top-0 bottom-0 flex justify-center items-center flex-col bg-[rgb(64,64,64)]">
      <div className="max-w-[400px] flex flex-col gap-3 w-full">
        <div className="flex justify-end">
          <div className="">
            <img
              onClick={() => setDisplayCarousel(false)}
              src="/images/icon-close.svg"
              className="h-auto"
              alt=""
            />
          </div>
        </div>
        <div className="w-full relative">
          <img
            data-aos="fade-down"
            className="w-full rounded-2xl h-auto"
            src={productTabImg[activeThumb]}
            alt=""
          />
        </div>
        <div className="flex justify-between relative bottom-[230px]">
          <button
            className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px] ml-[-13px] rounded-full"
            onClick={handleBackward}
          >
            <img
              src="/images/icon-previous.svg"
              className="transition duration-300 ease-linear mr-[2px]"
              alt=""
            />
          </button>
          <button
            className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px] mr-[-13px]  rounded-full"
            onClick={handleNext}
          >
            <img
              src="/images/icon-next.svg"
              className="transition duration-300 ease-linear ml-[2px]"
              alt=""
            />
          </button>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-4 gap-x-4">
          {productTabThumbImg.map((ptti, i) => (
            <img
              className={` rounded-2xl ${
                activeThumb === i
                  ? "border-[3px] border-solid border-[hsl(26,100%,55%)] opacity-[90%]"
                  : ""
              }`}
              onClick={() => handleClickThumb(i)}
              key={i}
              src={ptti}
              alt="thumb"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
