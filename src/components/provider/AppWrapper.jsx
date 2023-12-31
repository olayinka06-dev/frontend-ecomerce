"use client";
import React, { useState } from "react";
import { EcomerceContext } from "./Context";

export const AppWrapper = ({ children }) => {
  const [activeThumb, setactiveThumb] = useState(0);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [countProduct, setCountProduct] = useState(0);
  const [manager, setManager] = useState(false);
  const [showCartItem, setshowCartItem] = useState(null);
  const [showCartComponent, setShowCartComponent] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [modal, setModal] = useState({
    openModal: false,
    checkOut: false,
    success: false,
  });


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
  const handleCartProduct = () => {
    setShowCartMessage(true);
    setManager(true);
    setshowCartItem(productTabImg[activeThumb]);
  };

  const handleShowCartItem = () => {
    setShowCartComponent(!showCartComponent);
  };

  const handleRemoveCart = () => {
    setModal({...modal, openModal: true});
  };
  const handleCheckOut = () => {
    setModal({...modal, checkOut: true});
  };

  const allData = {
    handleBackward,
    handleCartProduct,
    handleCheckOut,
    handleClickThumb,
    handleNext,
    handleRemoveCart,
    handleShowCarousel,
    handleShowCartItem,
    setCountProduct,
    setDisplayCarousel,
    setManager,
    setShowCartMessage,
    setShowCartComponent,
    setModal,
    modal, 
    activeThumb,
    displayCarousel,
    showCartComponent,
    showCartItem,
    showCartMessage,
    priceData,
    productTabImg,
    productTabThumbImg,
    countProduct,
    manager,
  };
  return (
    <EcomerceContext.Provider value={{ allData }}>
      {children}
    </EcomerceContext.Provider>
  );
};
