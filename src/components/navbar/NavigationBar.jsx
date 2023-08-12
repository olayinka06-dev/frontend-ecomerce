"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationBar = ({
  countProdut,
  manager,
  showCartMessage,
  handleShowCartItem,
  showItem,
  showCartComponent,
  priceData,
  handleCheckOut,
  handleRemoveCart,
}) => {
  const menuLinks = ["Collections", "Men", "Women", "About", "Contact"];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="z-[900] sticky top-0 bg-white">
      <nav className="w-full border-b border-solid border-[hsl(220,14%,75%)] item-center flex justify-between py-5">
        <div className="w-1/2 flex items-center flex-row justify-between">
          <button
            onClick={toggleMenu}
            className={`lg:hidden z-[1000] ${menu ? "toggle open" : "toggle"}`}
          >
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </button>
          <div className="logo">
            <Image
              width={150}
              height={150}
              alt="logo"
              src={"/images/logo.svg"}
            />
          </div>
          <div className="hidden md:flex flex-row gap-5">
            {menuLinks.map((ml, i) => (
              <Link key={i} className={`text-[hsl(219,9%,45%)] nav-link`} href={"/"}>
                {ml}
              </Link>
            ))}
          </div>
        </div>
        <div className={`md:hidden pt-24 pl-4 h-screen transition-[all,3s,ease-linear] w-[200px] ${menu ? "ml-[0px]" : "ml-[-200px]"} fixed top-0 left-0 bg-white z-[800] flex flex-col gap-5`}>
          {menuLinks.map((ml, i) => (
            <Link key={i} className={`text-[hsl(220,13%,13%)] font-[700] nav-link`} href={"/"}>
              {ml}
            </Link>
          ))}
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex flex-row gap-2 relative items-center">
            <div className="">
              <div onClick={handleShowCartItem} className="cursor-pointer relative">
                <Image
                  height={25}
                  width={25}
                  alt="cart"
                  className="mr-5 "
                  src={"/images/icon-cart.svg"}
                />
                {showCartMessage && (
                  <sup className="bg-[hsl(26,100%,55%)] p-2 rounded-xl text-white absolute right-3">{countProdut}</sup>
                )}
              </div>
              {showCartComponent && (
                <div className="absolute py-3 rounded-2xl px-2 right-5 w-[300px] h-[200px] bg-white shadow-md">
                  <h3>Cart</h3>
                  <div className="border-t">
                    {manager ? (
                      <div className="">
                        <div className="w-full py-5  flex justify-between items-center border-solid">
                          <div className="">
                            <img
                              src={showItem}
                              className="h-[50px] rounded-[2px]"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <h1 className="font-[400] text-[hsl(220,13%,13%)] text-[14px]">
                              Fall Limited Edition Sneakers
                            </h1>
                            <div className="flex items-center flex-row gap-1">
                              <span className="text-[14px] font-[400] text-[hsl(220,14%,75%)]">
                                ${priceData.price_pro}
                                {".00"}
                              </span>
                              <span className="text-[14px] font-[400] text-[hsl(220,14%,75%)]">
                                {"x"}
                              </span>
                              <span className="text-[14px] font-[400] text-[hsl(220,14%,75%)]">
                                {countProdut}
                              </span>
                              <h3 className="text-[15px]">
                                ${priceData.price_pro * countProdut}
                                {".00"}
                              </h3>
                            </div>
                          </div>
                          <div className="">
                            <img
                              className="cursor-pointer"
                              onClick={handleRemoveCart}
                              src="/images/icon-delete.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <button onClick={handleCheckOut} className="py-[12px] text-white w-full rounded-2xl border-none bg-[hsl(26,100%,55%)] hover:opacity-[70%]">
                          Check Out
                        </button>
                      </div>
                    ) : (
                      <div className="h-full w-full py-10 flex justify-center items-center">
                        <p>Your Cart is empty</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="">
              <Image
                height={50}
                src={"/images/image-avatar.png"}
                width={50}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
