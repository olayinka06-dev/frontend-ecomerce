"use client";
import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";

const ProductTab = ({
  handleCartProduct,
  setDisplayCarousel,
  activeThumb,
  handleClickThumb,
  productTabImg,
  handleBackward,
  handleNext,
  productTabThumbImg,
  displayCarousel,
  handleShowCarousel,
  priceData,
  setCountProduct,
  countProduct,
}) => {
  const handleDecrement = () => {
    if (countProduct > 0) {
      setCountProduct(countProduct - 1);
    }
  };
  return (
    <section className="">
      {displayCarousel ? (
        <ProductCarousel
          setDisplayCarousel={setDisplayCarousel}
          activeThumb={activeThumb}
          handleClickThumb={handleClickThumb}
          productTabImg={productTabImg}
          handleBackward={handleBackward}
          handleNext={handleNext}
          productTabThumbImg={productTabThumbImg}
        />
      ) : (
        <div className="w-full justify-center items-center md:py-10 flex flex-col md:flex-row">
          <div className="md:w-[40%] w-full flex flex-col gap-2 justify-center items-center">
            <div className="">
              <img
                onClick={handleShowCarousel}
                className="md:block hidden h-full md:rounded-3xl"
                src={productTabImg[activeThumb]}
                alt="thumb"
              />
              <img
                className="block md:hidden h-full md:rounded-3xl"
                src={productTabImg[activeThumb]}
                alt="thumb"
              />
            </div>
            <div className="w-full md:hidden flex justify-between relative bottom-[230px]">
              <button
                className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px] rounded-full"
                onClick={handleBackward}
              >
                <img
                  src="/images/icon-previous.svg"
                  className="transition duration-300 ease-linear mr-[2px]"
                  alt=""
                />
              </button>
              <button
                className="bg-white opacity-[100%] transition duration-300 ease-linear hover:opacity-[70%] py-[10px] px-[13px]   rounded-full"
                onClick={handleNext}
              >
                <img
                  src="/images/icon-next.svg"
                  className="transition duration-300 ease-linear ml-[2px]"
                  alt=""
                />
              </button>
            </div>
            <div className="hidden md:grid grid-cols-4 gap-4">
              {productTabThumbImg.map((ptti, i) => (
                <img
                  className={` rounded-2xl ${
                    activeThumb === i
                      ? "border-[3px] border-solid border-[hsl(26,100%,55%)]"
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
          <div className="pb-4 md:w-[60%] w-full px-5 md:px-28 flex flex-col gap-2">
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
                  ${priceData.price}
                  {".00"}
                </h1>
                <span className="text-[hsl(26,100%,55%)] text-[18px] font[700] px-4 py-2 rounded-2xl bg-[hsl(25,100%,94%)]">
                  {priceData.promo}%
                </span>
              </div>
              <span className="text-[18px] font-[400] text-[hsl(220,14%,75%)] line-through">
                ${priceData.price_pro}
                {".00"}
              </span>
            </div>
            <div className="flex mt-6 flex-col md:flex-row gap-6 md:gap-3 w-full">
              <div className="w-full md:w-[40%] py-[14px] flex flex-row items-center justify-between rounded-2xl bg-[rgb(247,248,253)]">
                <button
                  onClick={() => setCountProduct(countProduct + 1)}
                  className="w-full h-full"
                >
                  <img className="mx-auto" src="/images/icon-plus.svg" alt="" />
                </button>
                <span className="w-full text-center">{countProduct}</span>
                <button onClick={handleDecrement} className="w-full h-full">
                  <img
                    className="mx-auto"
                    src="/images/icon-minus.svg"
                    alt=""
                  />
                </button>
              </div>
              <div className="w-full md:w-[60%]">
                <button
                  onClick={() => handleCartProduct(countProduct)}
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
