"use client";
import { createContext, useContext } from "react";

export const EcomerceContext = createContext({
  allData: {
    handleCartProduct: () => {}, handleShowCarousel: () => {},
    handleClickThumb: () => {}, handleNext: () => {},
    handleBackward: () => {}, handleShowCartItem: () => {},
    handleRemoveCart: () => {}, handleCheckOut: () => {},
    setCountProduct: () => {}, setDisplayCarousel: () => {},
    setOpenModal: () => {}, setManager: () => {},
    setShowCartMessage: () => {}, setShowCartComponent: () => {},
    setCheckOut: () => {},
    checkOut: false, 
    openModal: false,
    displayCarousel: false, showCartMessage: false,
    showCartComponent: false, manager: false,
    activeThumb: 0, countProduct: 0,
    productTabImg: [], productTabThumbImg: [],
    showCartItem: null,
    priceData: {
      price: "",
      promo: "",
      price_pro: "",
    },
  },
});

export const useEcomerceContext = () => useContext(EcomerceContext);
