// import bg from "../public/bg.jpg";
import Head from "next/head";
import Image from "next/image";
import nav from "../public/nav.jpg";
import bg from "../public/bg.jpg";
import brandbg from "../public/brandbg.jpg";
import logo from "../public/logo.jpg";
import icon1 from "../public/icon1.jpg";
import line from "../public/line.jpg";
import icon2 from "../public/icon2.jpg";
import icon3 from "../public/icon3.jpg";
import icon4 from "../public/icon4.jpg";
import { useState } from "react";
const Top = () => {
  return (
    <div className="">
      <div className="flex m-4">
        <img
          className="w-[35px] h-[28px] lg:hidden cursor-pointer mr-2"
          src={nav.src}
        ></img>
        <img className="w-[194px] h-[25px]  " src={logo.src}></img>
      </div>
      <div
        style={{
          minHeight: "2080px",
          zIndex: "-1",
          maxWidth: "1420px",
          objectFit: "cover",
          // backgroundRepeat: "no-repeat",
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "90% 35%",
        }}
        className="w-full lg:top-16  absolute "
      >
        <div className="">
          <div className="max-w-[550px] lg:ml-16 ml-3 lg:mt-11 mt-4">
            <h1 className="lg:text-5xl text-4xl font-bold">Result-oriented</h1>
            <img className="lg:w-96 w-72" src={line.src}></img>
            <h1 className="lg:text-5xl text-4xl">
              performance campaigns for every objective
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap2 lg:gap-4 max-w-[900px]">
              <div
                style={{ borderRadius: " 10px" }}
                className="lg:max-w-[338px] h-[156px] items-center justify-center text-center p-5 pt-8 bg-white mt-3 "
              >
                <img
                  className="w-[60px] h-[50px] items-center block ml-auto mr-auto"
                  src={icon1.src}
                ></img>
                <h2>Self-serve platform with CPI starting at INR 1</h2>
              </div>
              <div
                style={{ borderRadius: " 10px" }}
                className="lg:max-w[338px] h-[156px]  items-center justify-center text-center p-5 pt-8 bg-white mt-3 "
              >
                <img
                  className="w-[50px] h-[50px] block ml-auto mr-auto"
                  src={icon2.src}
                ></img>
                <h2>Access to premium inventory and exposure to 5K+ apps</h2>
              </div>
              <div
                style={{ borderRadius: " 10px" }}
                className="lg:max-w[338px]  h-[156px] items-center justify-center text-center p-5 pt-8 bg-white mt-3 "
              >
                <img
                  className="w-[50px] h-[50px] block ml-auto mr-auto"
                  src={icon3.src}
                ></img>
                <h2>
                  Comprehensive reporting and insights into campaign performance
                </h2>
              </div>
              <div
                style={{ borderRadius: " 10px" }}
                className="lg:max-w[338px] h-[156px] items-center justify-center text-center  p-5 pt-8 bg-white mt-3 "
              >
                <img
                  className="w-[50px] h-[50px] block ml-auto mr-auto"
                  src={icon4.src}
                ></img>
                <h2>
                  Campaigns for every need - clicks, installs, impressions, and
                  more
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
