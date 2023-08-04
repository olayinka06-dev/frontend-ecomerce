"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationBar = () => {
  const [menuLink, setMenuLink] = useState(0);
  const menuLinks = ["Collections", "Men", "Women", "About", "Contact"];
  const handleMenuLinks = (i) => {
    setMenuLink(i);
  };
  return (
    <header className="container mx-auto">
      <nav className="w-full item-center flex justify-between py-6 bg-green-500">
        <div className="w-1/2 flex items-center flex-row justify-between">
          <div className="logo">
            <Image
              width={150}
              height={150}
              alt="logo"
              src={"/images/logo.svg"}
            />
          </div>
          <div className="flex flex-row gap-5">
            {menuLinks.map((ml, i) => (
              <Link onMouseEnter={() => handleMenuLinks(i)} href={"/"}>
                {ml}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex flex-row gap-2 items-center">
            <div className="">
              <Image
                height={25}
                width={25}
                alt="cart"
                className="mr-5"
                src={"/images/icon-cart.svg"}
              />
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
