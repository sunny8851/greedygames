import brandbg from "../public/brandbg.jpg";
const TopBrand = () => {
  return (
    <div
      style={{
        minHeight: "210px",
        zIndex: "-1",
        maxWidth: "1500px",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${brandbg.src})`,
      }}
      className="py-4 md:pl-16 mt-[980px] lg:mt-[700px]  text  text-white"
    >
      <div className="grid md:grid-cols-4 gap-2 grid-cols-2 items-center md:pt-12 max-w-[550px]">
        <div className="text-center mt-2 ml-3">
          <p className="text-5xl">300+</p>
          <p>Affiliates</p>
        </div>
        <div className="text-center ml-3">
          <p className="text-5xl">5K+</p>
          <p>Apps Inventory</p>
        </div>
        <div className="text-center ml-3">
          <p className="text-5xl">1M+</p>
          <p>App Installs</p>
        </div>
        <div className="text-center ml-3 mt-2">
          <p className="text-5xl">3K+</p>
          <p>Active Campaigns</p>
        </div>
      </div>
    </div>
  );
};

export default TopBrand;
