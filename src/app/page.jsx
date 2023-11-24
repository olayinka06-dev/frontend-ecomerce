"use client";
import React, { useState } from "react";
import NavigationBar from "@/components/navbar/NavigationBar";
import ProductTab from "@/components/products/ProductTab";
import {
  CheckOutModal,
  Modal,
  SuccessModal,
} from "@/components/entities/Entity";
import Preloader from "@/components/entities/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="md:px-20">
          <main className="container mx-auto">
            <NavigationBar />
            <ProductTab />
            <Modal />
            <CheckOutModal />
            <SuccessModal />
          </main>
        </section>
      )}
    </>
  );
}
