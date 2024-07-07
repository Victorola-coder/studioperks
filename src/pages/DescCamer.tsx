import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const DescCamer = () => {
  return (
    <section className="px-[30px] md:px-[63px] md:py-[76px] py-[18px]">
      <div className=" uppercase flex items-center text-[6.73px] mb-[126px] md:text-[20.55px] md:leading-[17.47px]  leading-[5.72px] font-[700]">
        <Link to="/camera" className=" text-[#B3B3B3]">
          camera and lenses{" "}
        </Link>
        <span className=" flex text-[#232323]">
          <ChevronRightIcon className=" size-[7px] md:size-[20px]" /> Sony
          Cinema Line Camera - FX3
        </span>
      </div>
      <div className="flex flex-col gap-[50px] md:flex-row">
        <div className=" w-[283.93px] h-[272.55px] md:w-[461.36px] md:h-[442.86px]">
          <img
            src="/images/lens.png"
            className=" w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex max-w-[594px] flex-col gap-3">
          <h1 className=" text-[21.72px] leading-[18.46px]  text-[#353535]  font-black md:text-[35.29px] md:leading-[30px]">
            Sony Cinema Line Camera - FX3
          </h1>
          <p className=" text-[12.31px]  leading-[15.63px] md:text-[20px] md:leading-[25.4px] text-[#000000] font-light">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button className=" w-[135px] h-[38.89px] text-[12.92px] leading-[14.77px] md:w-[220px]  md:h-[62px] text-white bg-[#000000AB] rounded-[8px]">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default DescCamer;
