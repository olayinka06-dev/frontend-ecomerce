import React from "react";
import { useEcomerceContext } from "../provider/Context";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

export const CartComponent = () => {
  const { allData } = useEcomerceContext();
  return (
    allData.showCartComponent && (
      <div
        data-aos="fade-up"
        className="absolute py-3 rounded-2xl px-2 right-5 w-[300px] h-[200px] bg-white shadow-md"
      >
        <h3>Cart</h3>
        <div className="border-t">
          {allData.manager ? (
            <div className="">
              <div className="w-full py-5  flex justify-between items-center border-solid">
                <div className="">
                  <Image
                    priority
                    height={50}
                    width={50}
                    src={allData.showCartItem}
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
                      ${allData.priceData.price_pro}
                      {".00"}
                    </span>
                    <span className="text-[14px] font-[400] text-[hsl(220,14%,75%)]">
                      {"x"}
                    </span>
                    <span className="text-[14px] font-[400] text-[hsl(220,14%,75%)]">
                      {allData.countProduct}
                    </span>
                    <h3 className="text-[15px]">
                      ${allData.priceData.price_pro * allData.countProduct}
                      {".00"}
                    </h3>
                  </div>
                </div>
                <div className="">
                  <RiDeleteBin6Line
                    className="cursor-pointer text-[18px] text-[hsl(220,14%,75%)] hover:text-[hsl(26,100%,55%)] transition-all"
                    onClick={allData.handleRemoveCart}
                  />
                </div>
              </div>
              <button
                onClick={allData.handleCheckOut}
                className="py-[12px] text-white w-full rounded-2xl border-none bg-[hsl(26,100%,55%)] hover:opacity-[70%]"
              >
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
    )
  );
};

export const Notification = () => {
  const { allData } = useEcomerceContext();
  return (
    allData.showCartMessage && (
      <sup className="bg-[hsl(26,100%,55%)] p-2 rounded-xl text-white absolute right-3">
        {allData.countProduct}
      </sup>
    )
  );
};

export const Pagination = () => {
  const { allData } = useEcomerceContext();
  return (
    <div className="hidden md:grid grid-cols-4 gap-4">
      {allData.productTabThumbImg.map((ptti, i) => (
        <Image
          priority
          height={100}
          width={100}
          className={` rounded-2xl w-auto h-auto ${
            allData.activeThumb === i
              ? "border-[3px] border-solid border-[hsl(26,100%,55%)]"
              : ""
          }`}
          onClick={() => allData.handleClickThumb(i)}
          key={i}
          src={ptti}
          alt="thumb"
        />
      ))}
    </div>
  );
};

export const PaginationOverlay = () => {
  const { allData } = useEcomerceContext();
  return (
    <div className="grid grid-cols-4 gap-x-4">
      {allData.productTabThumbImg.map((ptti, i) => (
        <Image
          priority
          height={100}
          width={100}
          className={` rounded-2xl w-auto h-auto ${
            allData.activeThumb === i
              ? "border-[3px] border-solid border-[hsl(26,100%,55%)] opacity-[90%]"
              : ""
          }`}
          onClick={() => allData.handleClickThumb(i)}
          key={i}
          src={ptti}
          alt="thumb"
        />
      ))}
    </div>
  );
};

export const Counter = () => {
  const { allData } = useEcomerceContext();
  return (
    <div className="w-full md:w-[40%] py-[14px] flex flex-row items-center justify-between rounded-2xl bg-[rgb(247,248,253)]">
      <button
        onClick={() => allData.setCountProduct(allData.countProduct + 1)}
        className="w-full h-full"
      >
        <img className="mx-auto" src="/images/icon-plus.svg" alt="" />
      </button>
      <span className="w-full text-center">{allData.countProduct}</span>
      <button
        onClick={() =>
          allData.countProduct > 0
            ? allData.setCountProduct(allData.countProduct - 1)
            : allData.setCountProduct(0)
        }
        className="w-full h-full"
      >
        <img className="mx-auto" src="/images/icon-minus.svg" alt="" />
      </button>
    </div>
  );
};

export const Modal = () => {
  const { allData } = useEcomerceContext();
  const {
    openModal,
    setOpenModal,
    setCountProduct,
    setManager,
    setShowCartMessage,
    setShowCartComponent
  } = allData;

  const handleClearCart = () => {
    setManager(false);
    setCountProduct(0);
    setShowCartMessage(false);
    setOpenModal(false);

    setTimeout(() => {
      setShowCartComponent(false)
    }, 2000);
  };
  return (
    openModal && (
      <div
        className="w-full fixed left-0 top-0 bottom-0 bg-[rgba(0,0,0,.3)] transition-all ease-out duration-500 z-[1000] h-screen flex items-center justify-center"
      >
        <div data-aos="fade-down" className="max-w-[400px] rounded-xl flex flex-col gap-3 p-5 h-[30vh] bg-white shadow-md border">
          <span className="text-[hsl(26,100%,55%)]">Dialog box</span>
          <p className="">Are you sure you want to remove the items you cart</p>
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => setOpenModal(false)}
              className=" text-white bg-gray-400 w-1/2 border-0 py-2 px-6 focus:outline-none hover:bg-[] rounded text-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleClearCart}
              className=" text-white w-1/2 bg-[hsl(26,100%,55%)] border-0 py-2 px-6 focus:outline-none hover:bg-[] rounded text-lg"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )
  );
};


export const CheckOutModal = () => {
  const { allData } = useEcomerceContext();
  const {
    countProduct,
    checkOut,
    setCheckOut,
    setCountProduct,
    setManager,
    setShowCartMessage,
    setShowCartComponent
  } = allData;

  const handleCheckOut = () => {
    setCheckOut(false)
    setShowCartComponent(false);
    setManager(false);
    setCountProduct(0);
    setShowCartMessage(false);
    alert(
      `Thank you for ordering ${countProduct} Fall Limited Edition Sneakers`
    );
  };
  return (
    checkOut && (
      <div
        className="w-full fixed left-0 top-0 bottom-0 bg-[rgba(0,0,0,.3)] transition-all ease-out duration-500 z-[1000] h-screen flex items-center justify-center"
      >
        <div data-aos="fade-down" className="max-w-[400px] rounded-xl flex flex-col gap-3 p-5 h-[30vh] bg-white shadow-md border">
          <span className="text-[hsl(26,100%,55%)]">Dialog box</span>
          <p className="">Are you sure you want to check out the items you cart</p>
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => setCheckOut(false)}
              className=" text-white bg-gray-400 w-1/2 border-0 py-2 px-6 focus:outline-none hover:bg-[] rounded text-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleCheckOut}
              className=" text-white w-1/2 bg-[hsl(26,100%,55%)] border-0 py-2 px-6 focus:outline-none hover:bg-[] rounded text-lg"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    )
  );
};
