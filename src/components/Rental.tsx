/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Rental = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "/images/drone1.png",
      desc: "Ultra 4k Cinema <br /> DJI Mavic Drone",
    },
    {
      id: 2,
      url: "/images/group5.png",
      desc: "Sony Cinema Line <br /> Camera - FX3",
    },
    {
      id: 3,
      url: "/images/drone1.png",
      desc: "Sets of Cinema <br /> Lens for high <br /> picture quality.",
    },
  ]);

  const handleRotateImages = () => {
    setImages((prevImages) => {
      // Rotate the images array
      const [first, ...rest] = prevImages;
      return [...rest, first];
    });
  };

  return (
    <div className="w-full relative pb-0 h-[336px] md:h-[939px] bg-white">
      <span className="text-[14px] md:text-[41px] font-[400] leading-[11.9px] md:leading-[34.85px] mx-auto w-fit mt-[35px] md:mt-[70px] uppercase flex">
        Video & Photography <span className="invisible">i</span>
        <span className="font-black"> Equipment Rental</span>
      </span>
      <div className="w-full transition-all duration-300 ease-in-out flex flex-col">
        <div className="flex justify-center items-center">
          <img
            src={images[0].url}
            alt="drone"
            className="hidden object-contain md:flex w-[211.28px] md:w-[606.03px] h-[118.91px] md:h-[341.06px]"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex w-fit md:translate-y-0 translate-y-[40px] flex-col">
            <img
              src={images[1].url}
              alt="drone"
              className="w-[139.11px] -red-500 md:w-[399px] md:flex object-cover h-[133.53px] md:h-[383px]"
            />
            <div className="text-[7.15px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] justify-start items-center flex mt-2 pl-[21px] md:pl-[84px]">
              <img
                src="/images/L.png"
                alt="line"
                className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
              />
              <span
                className="-translate-x-[9px] md:translate-x-[-24px]"
                dangerouslySetInnerHTML={{ __html: images[1].desc }}
              />
            </div>
          </div>
          <div className="flex md:hidden justify-center items-center">
            <img
              src={images[2].url}
              alt="drone"
              className="w-[211.28px] md:w-[606.03px] md:flex h-[118.91px] md:h-[341.06px]"
            />
          </div>
          <div>
            <img
              src={images[2].url}
              alt="drone"
              className="md:w-[385px]  md:translate-y-0 translate-y-[40px] w-[134.22px] md:flex object-cover h-[134.22px] md:h-[385px]"
            />
            <div className="text-[7.15px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] justify-start items-center flex mt-2 pl-[21px] md:pl-[84px]">
              <img
                src="/images/L.png"
                alt="line"
                className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
              />
              <span
                className="-translate-x-[9px] md:translate-x-[-24px]"
                dangerouslySetInnerHTML={{ __html: images[2].desc }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-[2px] md:-translate-y-[150px] rounded-[6px] bg-white border-[#C3C3C3] w-fit h-fit mx-auto">
        <div className="border border-[#000000] bg-[#7E7D7D5C] text-[7.15px] md:text-[20.5px] leading-[6.08px] md:leading-[20.5px] text-[#353535] w-[144.33px] md:w-[419px] flex items-center justify-center gap-[17px] mx-auto px-10 h-[65.89px] md:h-[189px]">
          <img
            className="size-[18px] md:size-[51px] cursor-pointer"
            src="/images/Polygon3.png"
            alt=""
            onClick={handleRotateImages}
          />
          <p
            className="text-nowrap msl-4 md:msl-[51px] w-[178px]"
            dangerouslySetInnerHTML={{ __html: images[0].desc }}
          />
          <img
            className="size-[18px] md:size-[51px] cursor-pointer"
            src="/images/Polygon4.png"
            alt=""
            onClick={handleRotateImages}
          />
        </div>
      </div>
      <div className="invisible"></div>
    </div>
  );
};

export default Rental;
