import React from 'react'

const Preloader = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white fixed top-0 left-0 bottom-0">
        <div className="flex flex-col gap-2 items-center justify-center">
            <span className=" loading loading-spinner  "></span>
            <span className="">Loading ...</span>
        </div>
        <div className="absolute bottom-1 left-5 md:left-[40%]">
            <span>Build with love by <span className="bg-[hsl(26,100%,55%)]">Olayinka Dev</span></span>
        </div>
    </section>
  )
}

export default Preloader
