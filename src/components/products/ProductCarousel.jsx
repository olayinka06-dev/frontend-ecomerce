"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { useEcomerceContext } from "../provider/Context";
import { PaginationOverlay } from "../entities/Entity";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

const ProductCarousel = () => {
  const { allData } = useEcomerceContext();

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <div className="h-screen z-[600] w-full fixed left-0 top-0 bottom-0 flex justify-center items-center flex-col bg-[rgb(64,64,64)]">
      <div className="max-w-[400px] flex flex-col gap-3 w-full">
        <div className="flex justify-end">
          <div className="">
            <span className="text-white" onClick={() => allData.setDisplayCarousel(false)}>
              <RiCloseFill className="transition cursor-pointer duration-300 opacity-[65%] hover:opacity-[100%] hover:text-[hsl(26,100%,55%)] text-white text-[33px] ease-linear" />
            </span>
          </div>
        </div>
        <div className="w-full relative">
          <img
            data-aos="fade-down"
            className="w-full rounded-2xl h-auto"
            src={allData.productTabImg[allData.activeThumb]}
            alt=""
          />
        </div>
        <div className="flex justify-between relative bottom-[230px]">
          <button
            className="bg-white opacity-[100%] transition duration-300 ease-linear ml-[-13px] rounded-full"
            onClick={allData.handleBackward}
          >
            <RiArrowDropLeftLine className="transition duration-300 opacity-[65%] hover:opacity-[100%] hover:text-[hsl(26,100%,55%)] text-[43px] ease-linear mr-[2px]" />
          </button>
          <button
            className="bg-white opacity-[100%] transition duration-300 ease-linear mr-[-13px]  rounded-full"
            onClick={allData.handleNext}
          >
            <RiArrowDropRightLine className="transition duration-300 opacity-[65%] hover:opacity-[100%] hover:text-[hsl(26,100%,55%)] text-[43px] ease-linear ml-[2px]" />
          </button>
        </div>
        <PaginationOverlay />
      </div>
    </div>
  );
};

export default ProductCarousel;
