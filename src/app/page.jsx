"use client";
import React, { useState, useEffect } from "react";
import NavigationBar from "@/components/navbar/NavigationBar";
import ProductTab from "@/components/products/ProductTab";

export default function Home() {
  const [activeThumb, setactiveThumb] = useState(0);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [countProduct, setCountProduct] = useState(0);
  const [manager, setManager] = useState(false);
  const [showCartItem, setshowCartItem] = useState(null);
  const [showCartComponent, setShowCartComponent] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleClickThumb = (i) => {
    setshowCartItem(productTabImg[activeThumb]);
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

  const priceData = {
    price: 125.0,
    promo: 50,
    price_pro: 125.0,
  };
  const handleShowCarousel = (i) => {
    setDisplayCarousel(true);
  };

  const handleNext = () => {
    if (activeThumb >= 0 && activeThumb < 3) {
      setactiveThumb(activeThumb + 1);
    } else {
      setactiveThumb(0);
    }
  };

  const handleBackward = () => {
    if (activeThumb == 0) {
      setactiveThumb(0);
    } else {
      setactiveThumb(activeThumb - 1);
    }
  };
  const handleCartProduct = (i) => {
    setShowCartMessage(true);
    setManager(true);
    setshowCartItem(productTabImg[activeThumb]);
  };

  const handleShowCartItem = () => {
    setShowCartComponent(!showCartComponent);
  };

  const handleRemoveCart = () => {
    setManager(false)
    setCountProduct(0)
    setShowCartMessage(false)
  }
  const handleCheckOut = () => {
    setShowCartComponent(!showCartComponent);
    setManager(false)
    setCountProduct(0)
    setShowCartMessage(false)
    alert(`Thank you for ordering ${countProduct} Fall Limited Edition Sneakers`)
  }

  return (
    <section className="md:px-20">
      <main className="container mx-auto">
        <NavigationBar
          manager={manager}
          priceData={priceData}
          showCartMessage={showCartMessage}
          showCartComponent={showCartComponent}
          handleShowCartItem={handleShowCartItem}
          showItem={showCartItem}
          countProdut={countProduct}
          handleRemoveCart={handleRemoveCart}
          handleCheckOut={handleCheckOut}
        />
        <ProductTab
          setDisplayCarousel={setDisplayCarousel}
          activeThumb={activeThumb}
          handleClickThumb={handleClickThumb}
          productTabImg={productTabImg}
          handleBackward={handleBackward}
          handleNext={handleNext}
          productTabThumbImg={productTabThumbImg}
          displayCarousel={displayCarousel}
          handleShowCarousel={handleShowCarousel}
          priceData={priceData}
          setCountProduct={setCountProduct}
          countProduct={countProduct}
          handleCartProduct={handleCartProduct}
        />
      </main>
    </section>
  );
}
