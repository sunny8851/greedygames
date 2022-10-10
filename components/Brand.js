import brandbg2 from "../public/brandbg2.jpg";
import brand1 from "../public/brand1.jpg";
import clientbg from "../public/clientbg.jpg";
import brand2 from "../public/brand2.jpg";
import brand3 from "../public/brand3.jpg";
import brand4 from "../public/brand4.jpg";
import brand5 from "../public/brand5.jpg";
import brand6 from "../public/brand6.jpg";
import brand7 from "../public/brand7.jpg";
import brand8 from "../public/brand8.jpg";
import brand9 from "../public/brand9.jpg";
const Brand = () => {
  return (
    <div className="">
      <div className="bg-white md:pl-16 text-black pl-2 pt-10">
        <h1 className="text-3xl">Our Top Partners</h1>
        <div className="grid md:grid-cols-3  mr-2 grid-cols-2 max-w-[550px]">
          <img className="w-[160px] h-[140px]" src={brand1.src}></img>
          <img className="w-[160px] h-[140px]" src={brand2.src}></img>
          <img className="w-[160px] h-[140px]" src={brand3.src}></img>
          <img className="w-[160px] h-[140px]" src={brand4.src}></img>
          <img className="w-[160px] h-[140px]" src={brand5.src}></img>
          <img className="w-[160px] h-[140px]" src={brand6.src}></img>
        </div>
      </div>
      <div className=" text-black pl-2 bg-sky-50  md:pl-16 pt-10 pb-16">
        <h1 className="text-3xl mb-8">Our Top Clients</h1>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-2 max-w-[550px]">
          <img className="w-[250px] h-[100px] " src={brand7.src}></img>
          <img className="w-[180px] h-[100px]" src={brand8.src}></img>
          <img className="w-[180px] h-[100px]" src={brand9.src}></img>
        </div>
      </div>
      <div
        style={{
          // minHeight: "210px",
          zIndex: "-1",
          // maxWidth: "1500px",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${clientbg.src})`,
          backgroundSize: "250px 200px",
        }}
        className=" text-black ml-5 md:pl-16 pt-10   pb-16 bg-white"
      >
        <h1 className="text-3xl mb-8">Hear it from Clients</h1>
        <div
          style={{ boxShadow: "0px 3px 30px #41414115", zIndex: "1" }}
          className="max-w-[550px] p-2 mr-5 md:p-5 bg-white"
        >
          <img className="w-[80px] h-[30px] mt-2" src={brand7.src}></img>
          <h1 className="font-semibold mt-2">
            22.4 Mn minutes of branding results in 25k high-quality
            registrations
          </h1>
          <p className="text-xs">
            The placement of clickable units natively placed on the main menu,
            gameplay screen and pause screen ensured high engagement,
            registrations and transactions.
          </p>
          <button className="text-blue-500 pt-5">Read Casestudy</button>
        </div>
      </div>
      <div className=" text-white pl-2 md:pl-16 pt-10 pb-16 bg-black">
        <h1 className="text-xl mb-1">
          Acquire quality users, not just installs
        </h1>
        <p className="text-[#AAAEB2] text-[14px] font-light">
          Talk to us today and start creating mobile marketing campaigns that
          deliver results.
        </p>
      </div>
      <h1 className="md:pl-16 pl-2 mt-2 ">
        ©2022 GreedyGame, Inc. All rights reserved.
      </h1>
    </div>
  );
};

export default Brand;
