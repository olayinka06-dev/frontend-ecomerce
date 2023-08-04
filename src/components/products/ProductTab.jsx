"use client";
import React, { useState } from "react";

const ProductTab = () => {
  const [activeThumb, setactiveThumb] = useState(0);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState(null);
  const handleClickThumb = (i) => {
    setactiveThumb(i);
  };
  const productTabImg = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const productTabThumbImg = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];
  const handleShowCarousel = (i) => {
    setActiveCarousel(i);
    setDisplayCarousel(true);
  };
  return (
    <section className="">
      {displayCarousel ? (
        <div className="h-screen w-full fixed left-0 top-0 bottom-0 flex justify-center items-center flex-col bg-[hsl(0,0%,0%)]">
          <div className="max-w-[400px] flex flex-col gap-3 w-full">
            <div className="flex justify-end">
              <div className="">
                <img onClick={()=> setDisplayCarousel(false)} src="/images/icon-close.svg" className="h-auto" alt="" />
              </div>
            </div>
            <div className="w-full">
              <img className="w-full rounded-2xl h-auto" src={activeCarousel} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full py-10 flex flex-row">
          <div className="w-[40%] flex flex-col gap-2 justify-center items-center">
            <div className="">
              <img
                onClick={() => handleShowCarousel(productTabImg[activeThumb])}
                className="h-full rounded-3xl"
                src={productTabImg[activeThumb]}
                alt="thumb"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
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
          <div className="w-[60%]">
            <h3 className="text-[hsl(26,100%,55%)]">Sneaker Company</h3>
            <h1 className="w-full md:w-[400px]">
              Fall Limited Edition Sneakers
            </h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductTab;
