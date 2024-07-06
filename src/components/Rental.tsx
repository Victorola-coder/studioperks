/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const Rental = () => {
  const [images] = useState([
    {
      id: 1,
      url: "/images/drone1.png",
      desc: "Ultra 4k Cinema <br /> DJI Mavic Drone",
      dimensions: {
        width: "606.03px",
        height: "341.06px",
      },
    },
    {
      id: 2,
      url: "/images/lensfull.svg",
      desc: "Sets of Cinema <br /> Lens for high <br /> picture quality.",
      dimensions: {
        width: "399px",
        height: "383px",
      },
    },
    {
      id: 3,
      url: "/images/cameraclearer.svg",
      desc: "Sony Cinema Line <br /> Camera - FX3",
      dimensions: {
        width: "385px",
        height: "385px",
      },
    },
  ]);
  const [positions, setPositions] = useState(0);

  // const handleRotateImages = () => {
  //   setImages((prevImages) => {
  //     const [first, ...rest] = prevImages;
  //     return [...rest, first];
  //   });
  // };

  const getBoxStyle = (boxNumber: number) => {
    switch (boxNumber) {
      case 0:
        if (positions === 0) {
          return {
            left: "315px",
            top: "-42px",
          };
        } else if (positions === 1) {
          return {
            left: "-173px",
            top: "257px",
          };
        } else {
          return {
            left: "837px",
            top: "195px",
            transform: "translateX(0%)",
          };
        }
      case 1:
        if (positions === 0) {
          return {
            left: "-33px",
            top: "165px",
          };
        } else if (positions === 1) {
          return {
            left: "972px",
            top: "95px",
          };
        } else {
          return {
            left: "448px",
            top: "-26px",
            transform: "translateX(0%)",
          };
        }
      case 2:
        if (positions === 0) {
          return {
            left: "986px",
            top: "180px",
          };
        } else if (positions === 1) {
          return {
            left: "448px",
            top: "-45px",
            transform: "translateX(0%)",
          };
        } else {
          return {
            left: "-27px",
            top: "214px",
            transform: "translateX(0%)",
          };
        }
      default:
        return {};
    }
  };
  // console.log(positions);
  // console.log("b1", getBoxStyle(0));
  // console.log("b2", getBoxStyle(1));
  // console.log("b3", getBoxStyle(2));
  const swapPosition = () => {
    setPositions((prevPosition) => (prevPosition === 2 ? 0 : prevPosition + 1));
  };
  return (
    <div className="w-full relative pb-0 h-[336px] md:h-fit bg-white">
      <span className="text-[14px] mb-[49px] md:text-[41px] font-[400] leading-[11.9px] md:leading-[34.85px] mx-auto w-fit mt-[35px] md:mt-[70px] uppercase flex">
        Video & Photography <span className="invisible">i</span>
        <span className="font-black"> Equipment Rental</span>
      </span>
      <div className="h-[755px] w-[1280px]  relative">
        <div className="w-full relative h-full flex flex-col">
          <motion.div
            style={getBoxStyle(0)}
            animate={getBoxStyle(0)}
            transition={{ duration: 0.5 }}
            className="flex justify-center w-[606.03px] h-[341.06px]  absolute items-center"
          >
            <motion.img
              key={images[0].id}
              src={images[0].url}
              alt="drone"
              className="hidden transition-all duration-100 object-contain md:flex"
            />
          </motion.div>
          <div className="flex justify-between items-center">
            <motion.div
              style={getBoxStyle(1)}
              animate={getBoxStyle(1)}
              transition={{ duration: 0.5 }}
              className="flex w-fit  absolute  flex-col"
            >
              <motion.img
                key={images[2].id}
                src={images[2].url}
                alt="drone"
                className="md:flex transition-all duration-100 object-cover"
              />
            </motion.div>
            <motion.div className="flex md:hidden justify-center items-center">
              <motion.img
                key={images[2].id}
                src={images[2].url}
                alt="drone"
                className="md:flex transition-all duration-100 object-cover"
              />
            </motion.div>
            <motion.div
              style={getBoxStyle(2)}
              animate={getBoxStyle(2)}
              transition={{ duration: 0.5 }}
              className="relative w-[385px] h-[385px] object-cover"
            >
              <motion.img
                key={images[1].id}
                src={images[1].url}
                alt="drone"
                className="md:flex w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="text-[7.15px] absolute top-[528px] left-[84px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] justify-start items-center flex mt-2 ">
            <img
              src="/images/L.png"
              alt="line"
              className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
            />
            <span
              className="-translate-x-[9px] md:translate-x-[-24px]"
              dangerouslySetInnerHTML={{
                __html:
                  images[positions === 0 ? 2 : positions === 1 ? 0 : 1].desc,
              }}
            />
          </div>
          <div className="text-[7.15px]  absolute bottom-[182px] right-[190px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] flex items-center">
            <img
              src="/images/L.png"
              alt="line"
              className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
            />
            <span
              className="translate-x-[-37px]"
              dangerouslySetInnerHTML={{
                __html:
                  images[positions === 0 ? 1 : positions === 1 ? 2 : 0].desc,
              }}
            />
          </div>
        </div>
        <div className="border-[2px] absolute bottom-[42px] left-1/2 -translate-x-1/2 rounded-[6px] bg-white border-[#C3C3C3] w-fit h-fit mx-auto">
          <div className="border border-[#000000] bg-[#7E7D7D5C] text-[7.15px] md:text-[20.5px] leading-[6.08px] md:leading-[20.5px] text-[#353535] w-[144.33px] md:w-[419px] flex items-center justify-center gap-[17px] mx-auto px-10 h-[65.89px] md:h-[189px]">
            <img
              className="size-[18px] md:size-[51px] cursor-pointer"
              src="/images/Polygon3.png"
              alt=""
              onClick={swapPosition}
            />
            <p
              className="text-nowrap msl-4 md:msl-[51px] w-[178px]"
              dangerouslySetInnerHTML={{ __html: images[0 + positions].desc }}
            />
            <img
              className="size-[18px] md:size-[51px] cursor-pointer"
              src="/images/Polygon4.png"
              alt=""
              onClick={swapPosition}
            />
          </div>
        </div>
      </div>

      <div className="invisible"></div>
    </div>
  );
};

export default Rental;
