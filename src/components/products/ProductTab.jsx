"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css"
import ProductCarousel from "./ProductCarousel";
import Aos from "aos";
import { useEcomerceContext } from "../provider/Context";
import { Counter, Pagination } from "../entities/Entity";

const ProductTab = () => {
  const {allData} = useEcomerceContext()
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
      delay: 100
    })
  }, []);

  return (
    <section className="">
      {allData.displayCarousel ? (
        <ProductCarousel/>
      ) : (
        <div className="w-full justify-center items-center md:py-10 flex flex-col md:flex-row">
          <div data-aos="fade-left" className="md:w-[40%] w-full flex flex-col gap-2 justify-center items-center">
            <div className="">
              <img
                onClick={allData.handleShowCarousel}
                className="md:block hidden h-full md:rounded-3xl"
                src={allData.productTabImg[allData.activeThumb]}
                alt="thumb"
              />
              <img
                className="block md:hidden h-full md:rounded-3xl"
                src={allData.productTabImg[allData.activeThumb]}
                alt="thumb"
              />
            </div>
            <div className="w-full md:hidden flex justify-between relative bottom-[230px]">
              <button
                className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px] rounded-full"
                onClick={allData.handleBackward}
              >
                <img
                  src="/images/icon-previous.svg"
                  className="transition duration-300 ease-linear mr-[2px]"
                  alt=""
                />
              </button>
              <button
                className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px]   rounded-full"
                onClick={allData.handleNext}
              >
                <img
                  src="/images/icon-next.svg"
                  className="transition duration-300 ease-linear ml-[2px]"
                  alt=""
                />
              </button>
            </div>
            <Pagination/>
          </div>
          <div data-aos="fade-right" className="pb-4 md:w-[60%] w-full px-5 md:px-28 flex flex-col gap-2">
            <h3 className="text-[hsl(26,100%,55%)] font-[700] text-[20px]">
              Sneaker Company
            </h3>
            <h1 className="w-full font-[700] text-[hsl(220,13%,13%)] text-[35px] md:w-[400px]">
              Fall Limited Edition Sneakers
            </h1>
            <p className="font-[400] my-3 leading-relaxed text-[16px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-row md:justify-start justify-between md:items-start items-center md:flex-col">
              <div className="flex gap-3 items-center">
                <h1 className="font-[700] text-[35px] text-[hsl(220,13%,13%)]">
                  ${allData.priceData.price}
                  {".00"}
                </h1>
                <span className="text-[hsl(26,100%,55%)] text-[18px] font[700] px-4 py-2 rounded-2xl bg-[hsl(25,100%,94%)]">
                  {allData.priceData.promo}%
                </span>
              </div>
              <span className="text-[18px] font-[400] text-[hsl(220,14%,75%)] line-through">
                ${allData.priceData.price_pro}
                {".00"}
              </span>
            </div>
            <div className="flex mt-6 flex-col md:flex-row gap-6 md:gap-3 w-full">
              <Counter/>
              <div className="w-full md:w-[60%]">
                <button
                  onClick={() => allData.handleCartProduct(allData.countProduct)}
                  className="py-[14px] text-white w-full rounded-2xl border-none bg-[hsl(26,100%,55%)] hover:opacity-[70%]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductTab;

