"use client";
import React from "react";
import NavigationBar from "@/components/navbar/NavigationBar";
import ProductTab from "@/components/products/ProductTab";
import { CheckOutModal, Modal, SuccessModal } from "@/components/entities/Entity";

export default function Home() {

  return (
    <section className="md:px-20">
      <main className="container mx-auto">
        <NavigationBar/>
        <ProductTab/>
        <Modal/>
        <CheckOutModal/>
        <SuccessModal/>
      </main>
    </section>
  );
}
