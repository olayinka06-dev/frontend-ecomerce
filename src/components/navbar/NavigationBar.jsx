"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavigationBar = () => {
  const menuLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <header className="sticky top-0 bg-white">
      <nav className="w-full border-b border-solid border-[hsl(220,14%,75%)] item-center flex justify-between py-5">
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
              <Link className={`text-[hsl(219,9%,45%)] nav-link`} href={"/"}>
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
