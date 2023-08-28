import React from "react";
import { useEcomerceContext } from "../provider/Context";

export const CartComponent = () => {
  const { allData } = useEcomerceContext();
  return (
    allData.showCartComponent && (
      <div data-aos="fade-up" className="absolute py-3 rounded-2xl px-2 right-5 w-[300px] h-[200px] bg-white shadow-md">
        <h3>Cart</h3>
        <div className="border-t">
          {allData.manager ? (
            <div className="">
              <div className="w-full py-5  flex justify-between items-center border-solid">
                <div className="">
                  <img
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
                  <img
                    className="cursor-pointer"
                    onClick={allData.handleRemoveCart}
                    src="/images/icon-delete.svg"
                    alt=""
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
        <img
          className={` rounded-2xl ${
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
    <div  className="grid grid-cols-4 gap-x-4">
      {allData.productTabThumbImg.map((ptti, i) => (
        <img
          className={` rounded-2xl ${
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
