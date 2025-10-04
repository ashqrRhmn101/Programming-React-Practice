import React from "react";

const HeroSection = ({ title, img, cart }) => {
  return (
    <section className="bg-[#9538E2] text-center space-y-5 pb-44 relative mb-10">
      <div>
        <h1 className="text-3xl font-bold text-white p-2">{title}</h1>
        <p className="text-white opacity-85 p-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn rounded-3xl p-4">Shop Now</button>
      </div>
      <div className="absolute md:left-[430px] border-gray-400 p-2">
        <img src={img} alt="" className="w-[380px]  rounded-2xl" />
      </div>
      <div className="absolute md:left-[150px] border-gray-400 p-2 text-left">
        {cart}
      </div>
    </section>
  );
};

export default HeroSection;
