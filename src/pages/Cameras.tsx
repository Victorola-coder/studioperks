import SpanColors from "../components/spanColors";

const Cameras = () => {
  return (
    <div className=" min-h-[540px] flex flex-col items-center justify-center md:min-h-fit">
      <h1 className=" hidden md:flex uppercase text-center mb-[79px]  font-black leading-[34.85px]  text-[41px]  text-[#232323]">
        Video & Photography Equipment Rental
      </h1>
      <div className=" w-full h-[118.91px]  md:hidden"></div>
      <div className=" w-full flex flex-col">
        <div className=" flex justify-center items-center">
          <img
            src="/images/drone1.png"
            alt="drone"
            className=" w-[606.03px] hidden md:flex  h-[341.06px]"
          />
        </div>
        <div className=" flex justify-between  items-center">
          <div className=" flex w-fit  flex-col">
            {" "}
            <img
              src="/images/group5.png"
              alt="drone"
              className=" w-[399px] hidden md:flex   object-cover  h-[383px]"
            />
            <div className=" text-[7.15px] leading-[6.08px] justify-end md:items-start items-center flex mt-2 pl-[21px] md:pl-[84px]">
              <img
                src="/images/L.png"
                alt="line"
                className="md:w-[53px] w-[18px] h-[33px]  md:h-[95px]"
              />{" "}
              <span className=" -translate-x-[9px] md:translate-x-[-24px]">
                Sony Cinema Line <br /> Camera - FX3
              </span>
            </div>
          </div>

          <div>
            {" "}
            <img
              src="/images/lens.png"
              alt="drone"
              className=" w-[385px] hidden md:flex  object-cover h-[385px]"
            />
            <div className=" text-[7.15px] leading-[6.08px] justify-end md:items-start items-center flex mt-2 pr-5 md:pl-[84px]">
              <img
                src="/images/L.png"
                alt="line"
                className="md:w-[53px] w-[18px] h-[33px]  md:h-[95px]"
              />{" "}
              <span className=" -translate-x-[9px] md:translate-x-[-24px]">
                Sets of Cinema <br /> Lens for high <br /> picture quality.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-[2px] md:-translate-y-[90px]  rounded-[6px] bg-white border-[#C3C3C3] w-fit h-fit mx-auto">
        <div className=" border border-[#000000] bg-[#7E7D7D5C] text-[7.15px] md:text-[20.5px] leading-[6.08px] md:leading-[20.5px] text-[#353535] w-[144.33px] md:w-[419px] flex items-center justify-center mx-auto px-10 h-[65.89px] md:h-[189px]">
          <img
            className=" size-[18px] md:size-[51px]  "
            src="/images/Polygon3.png"
            alt=""
          />
          <p className=" text-nowrap ml-4 md:ml-[51px] w-[178px]">
            Ultra 4k Cinema <br />
            DJI Mavic Drone
          </p>
          <img
            className="size-[18px] md:size-[52px] "
            src="/images/Polygon4.png"
            alt=""
          />
        </div>
      </div>

      <ul className=" text-white mx-auto mt-[42px] w-[221.21px] md:w-[396px] h-[224px] md:h-[401px] flex list-disc justify-center items-center flex-col gap-1 md:gap-[27px] bg-[#7E7D7D]">
        <li className=" font-normal  text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]">
          Cameras and Lenses
        </li>
        <li className=" font-normal  text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]">
          Audio Equipment
        </li>
        <li className=" font-normal  text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]">
          Lighting Equipment
        </li>
        <li className=" font-normal  text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]">
          Stabilizers and Gimbals
        </li>
        <li className=" font-normal  text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]">
          Production Accessories
        </li>
      </ul>
      <div className=" hidden md:flex mt-[79px]">
        {" "}
        <SpanColors />
      </div>
    </div>
  );
};

export default Cameras;
