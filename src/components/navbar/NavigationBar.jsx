"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import { useEcomerceContext } from "../provider/Context";
import { CartComponent, Notification } from "../entities/Entity";

const NavigationBar = () => {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
      delay: 10
    })
  }, []);

  const { allData } = useEcomerceContext();

  const menuLinks = ["Collections", "Men", "Women", "About", "Contact"];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="z-[500] sticky top-0 bg-white">
      <nav className="w-full border-b border-solid border-[hsl(220,14%,75%)] item-center flex justify-between py-5">
        <div className="w-1/2 flex items-center flex-row justify-between">
          <button
            onClick={toggleMenu}
            className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}
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
              <Link
                key={i}
                className={`text-[hsl(219,9%,45%)] nav-link`}
                href={"/"}
              >
                {ml}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`md:hidden pt-24 pl-4 h-screen transition-[all,3s,ease-linear] w-[200px] ${
            menu ? "ml-[0px]" : "ml-[-200px]"
          } fixed top-0 left-0 bg-white z-[400] flex flex-col gap-5`}
        >
          {menuLinks.map((ml, i) => (
            <Link
              key={i}
              className={`text-[hsl(220,13%,13%)] font-[700] nav-link`}
              href={"/"}
            >
              {ml}
            </Link>
          ))}
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex flex-row gap-2 relative items-center">
            <div className="">
              <div
                onClick={allData.handleShowCartItem}
                className="cursor-pointer relative"
              >
                <Image
                  height={25}
                  width={25}
                  alt="cart"
                  className="mr-5 "
                  src={"/images/icon-cart.svg"}
                />
                <Notification />
              </div>
              <CartComponent />
            </div>
            <div className="">
              <Image
                height={50}
                src={"/images/image-avatar.png"}
                width={50}
                alt="profile"
                className="border-[2px] cursor-pointer transition duration-500 ease-linear rounded-full border-solid border-transparent hover:border-[hsl(26,100%,55%)]"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
