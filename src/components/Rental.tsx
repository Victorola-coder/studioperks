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
    const isMobile = window.innerWidth <= 768; // Example threshold for mobile devices

    switch (boxNumber) {
      case 0:
        if (positions === 0) {
          return isMobile
            ? {
                left: "50%",
                top: "10%",
                translateX: "-50%",
              }
            : {
                left: "50%",
                top: "0%",
                translateX: "-50%",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "-10%",
                top: "35%",
                translateX: "0%",
              }
            : {
                left: "-10%",
                top: "40%",
                translateX: "0%",
              };
        } else {
          return isMobile
            ? {
                left: "60%",
                top: "40%",
                translateX: "0%",
              }
            : {
                left: "65%",
                top: "35%",
                translateX: "0%",
              };
        }
      case 1:
        if (positions === 0) {
          return isMobile
            ? {
                left: "5%",
                top: "20%",
              }
            : {
                left: "-2%",
                top: "20%",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "75%",
                top: "15%",
              }
            : {
                left: "80%",
                top: "10%",
              };
        } else {
          return isMobile
            ? {
                left: "40%",
                top: "0%",
              }
            : {
                left: "50%",
                top: "0%",

                translateX: "-50%",
              };
        }
      case 2:
        if (positions === 0) {
          return isMobile
            ? {
                left: "75%",
                top: "60%",
              }
            : {
                left: "70%",
                top: "50%",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "50%",
                top: "15%",
                translateX: "-50%",
              }
            : {
                left: "50%",
                top: "10%",
                translateX: "-50%",
              };
        } else {
          return isMobile
            ? {
                left: "0%",
                top: "70%",
                translateX: "0%",
              }
            : {
                left: "0%",
                top: "60%",
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
    <div className="w-full relative pb-0 h-fit md:h-fit bg-white">
      <span className="text-[14px]  md:mb-[49px] md:text-[41px] font-[400] leading-[11.9px] md:leading-[34.85px] mx-auto w-fit mt-[35px] md:mt-[70px] uppercase flex">
        Video & Photography <span className="invisible">i</span>
        <span className="font-black"> Equipment Rental</span>
      </span>
      <div className="md:h-[755px] mx-auto  overflow-x-hidden overflow-auto  h-[289px] w-full md:w-[1280px]  relative">
        <div className="w-full  relative h-full flex flex-col">
          <motion.div
            style={getBoxStyle(0)}
            animate={getBoxStyle(0)}
            transition={{ duration: 0.5 }}
            className="flex justify-center  w-[211.28px] h-[118.91px] md:w-[606.03px] md:h-[341.06px] absolute items-center"
          >
            <motion.img
              key={images[0].id}
              src={images[0].url}
              alt="drone"
              className=" transition-all duration-100 object-contain md:flex"
            />
          </motion.div>
          <div className="flex justify-between items-center">
            <motion.div
              style={getBoxStyle(1)}
              animate={getBoxStyle(1)}
              transition={{ duration: 0.5 }}
              className="flex md:w-[399px] md:h-[383px]  w-[139.11px] h-[133.53px] absolute flex-col"
            >
              <motion.img
                key={images[2].id}
                src={images[2].url}
                alt="drone"
                className="md:flex  transition-all duration-100 object-cover"
              />
            </motion.div>
            {/* <motion.div className="flex md:hidden justify-center items-center">
            <motion.img
              key={images[2].id}
              src={images[2].url}
              alt="drone"
              className="md:flex transition-all duration-100 object-cover"
            />
          </motion.div> */}
            <motion.div
              style={getBoxStyle(2)}
              animate={getBoxStyle(2)}
              transition={{ duration: 0.5 }}
              className="relative w-[139.11px]   h-[133.53px] md:w-[385px] md:h-[385px] object-cover"
            >
              <motion.img
                key={images[1].id}
                src={images[1].url}
                alt="drone"
                className="flex w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="text-[7.15px]  absolute top-[184px]  md:top-[528px] left-[21.29px] md:left-[84px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] justify-start items-center flex mt-2">
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
          <div className="text-[7.15px]  absolute bottom-[52px] md:bottom-[182px] right-[21px] md:right-[21px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] flex items-center">
            <img
              src="/images/L.png"
              alt="line"
              className="md:w-[53px]  w-[18px] h-[33px] md:h-[95px]"
            />
            <span
              className=" translate-x-[-10px] md:translate-x-[-37px]"
              dangerouslySetInnerHTML={{
                __html:
                  images[positions === 0 ? 1 : positions === 1 ? 2 : 0].desc,
              }}
            />
          </div>
        </div>
      </div>
      <div className="border-[2px] absolute bottom-[14px] md:bottom-[42px] left-1/2 -translate-x-1/2 rounded-[6px] bg-white border-[#C3C3C3] w-fit h-fit mx-auto">
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
      <div className="invisible"></div>
    </div>
  );
};

export default Rental;
