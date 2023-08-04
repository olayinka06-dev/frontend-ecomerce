"use client";
import React, { useState } from 'react';


const ProductTab = () => {
    const [activeThumb, setactiveThumb] = useState(0);
    const handleClickThumb = (i) => {
        setactiveThumb(i)
    }
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
  return (
    <section className="py-10">
      <div className="w-full flex flex-row">
        <div className="w-[40%] flex flex-col gap-2 justify-center items-center">
          <div className="">
              <img className='h-full rounded-3xl' src={productTabImg[activeThumb]} alt="thumb" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productTabThumbImg.map((ptti, i) => (
              <img className={` rounded-2xl ${activeThumb === i ? "border-[3px] border-solid border-[hsl(26,100%,55%)]" : ""}`} onClick={()=> handleClickThumb(i)} key={i} src={ptti} alt="thumb" />
            ))}
          </div>
        </div>
        <div className="w-[60%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ad sint accusamus optio! Ut deserunt temporibus nemo vitae iste sit,
            voluptatum impedit enim libero, veritatis, dicta quos. Hic, harum
            doloribus? Nesciunt consequuntur eum aliquam sequi beatae
            reprehenderit temporibus minima ullam enim unde! Quasi, et!
            Recusandae magnam veniam officia quae culpa?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductTab;
