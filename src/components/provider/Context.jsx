"use client";
import { createContext, useContext } from "react";

export const EcomerceContext = createContext({
  allData: {
    handleCartProduct: () => {}, handleShowCarousel: () => {},
    handleClickThumb: () => {}, handleNext: () => {},
    handleBackward: () => {}, handleShowCartItem: () => {},
    handleRemoveCart: () => {}, handleCheckOut: () => {},
    setCountProduct: () => {}, setDisplayCarousel: () => {},
    setManager: () => {}, setModal: () => {},
    setShowCartMessage: () => {}, setShowCartComponent: () => {},
    modal: {
      openModal: false,
      checkOut: false,
      success: false,
    },
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
