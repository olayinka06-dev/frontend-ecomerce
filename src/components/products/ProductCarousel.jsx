"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { useEcomerceContext } from "../provider/Context";
import { PaginationOverlay } from "../entities/Entity";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

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
            <span
              onClick={() => allData.setDisplayCarousel(false)}
              className="h-auto text-[20px] hover:text-[hsl(26,100%,55%)] cursor-pointer"
            >
              <GrFormClose />
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
            className="bg-white opacity-[100%] transition duration-300 ease-linear py-[10px] px-[13px] ml-[-13px] rounded-full"
            onClick={allData.handleBackward}
          >
            <span className="transition text-[25px] hover:text-[hsl(26,100%,55%)] duration-300 ease-linear mr-[2px]">
              <RiArrowDropLeftLine />
            </span>
          </button>
          <button
            className="bg-white opacity-[100%] transition duration-300 ease-linear py-[10px] px-[13px] mr-[-13px]  rounded-full"
            onClick={allData.handleNext}
          >
            <span className="transition text-[25px] hover:text-[hsl(26,100%,55%)] duration-300 ease-linear ml-[2px]">
              <RiArrowDropRightLine />
            </span>
          </button>
        </div>
        <PaginationOverlay />
      </div>
    </div>
  );
};

export default ProductCarousel;
