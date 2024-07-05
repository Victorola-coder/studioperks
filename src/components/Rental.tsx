/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Rental = () => {
  const [images, setImages] = useState([
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
      url: "/images/cameraclearer.svg",
      desc: "Sony Cinema Line <br /> Camera - FX3",
      dimensions: {
        width: "385px",
        height: "385px",
      },
    },
    {
      id: 3,
      url: "/images/lensfull.svg",
      desc: "Sets of Cinema <br /> Lens for high <br /> picture quality.",
      dimensions: {
        width: "399px",
        height: "383px",
      },
    },
  ]);

  const handleRotateImages = () => {
    setImages((prevImages) => {
      const [first, ...rest] = prevImages;
      return [...rest, first];
    });
  };

  const getImageStyle = (image: any) => {
    const baseStyle = {
      width: image.dimensions.width,
      height: image.dimensions.height,
    };
    if (
      image.url === "/images/drone1.png" &&
      images[2].url === "/images/drone1.png"
    ) {
      return {
        ...baseStyle,
        transform: "translateX(163px)",
      };
    }
    if (
      image.url === "/images/lensfull.svg" &&
      images[2].url === "/images/lensfull.svg"
    ) {
      return {
        ...baseStyle,
        // transform: "translateX(91px)",
      };
    }
    if (
      image.url === "/images/cameraclearer.svg" &&
      images[2].url === "/images/cameraclearer.svg"
    ) {
      return {
        ...baseStyle,
        top: "95px",
        right: "-91px",
      };
    }
    return baseStyle;
  };

  const variants = {
    initial: { opacity: 0, x: -20, y: 0 },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 20, y: 0, transition: { duration: 0.5 } },
    // trail: {
    //   hidden: { opacity: 0, x: -100 },
    //   visible: {
    //     opacity: 1,
    //     x: 0,
    //     transition: { type: "spring", stiffness: 50 },
    //   },
    // },
  };

  return (
    <div className="w-full relative pb-0 h-[336px] md:h-fit bg-white">
      <span className="text-[14px] mb-[49px] md:text-[41px] font-[400] leading-[11.9px] md:leading-[34.85px] mx-auto w-fit mt-[35px] md:mt-[70px] uppercase flex">
        Video & Photography <span className="invisible">i</span>
        <span className="font-black"> Equipment Rental</span>
      </span>
      <div className="h-[755px] bg-resd-600 relative">
        <div className="w-full relative h-full flex flex-col">
          <div className="flex justify-center absolute top-[-42px] left-1/2 -translate-x-1/2 items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[0].id}
                src={images[0].url}
                alt="drone"
                className="hidden object-contain md:flex"
                style={getImageStyle(images[0])}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex w-fit top-[165px] absolute left-[-33px] flex-col">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[1].id}
                  src={images[1].url}
                  alt="drone"
                  className="md:flex object-cover"
                  style={getImageStyle(images[1])}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[2].id}
                  src={images[2].url}
                  alt="drone"
                  className="md:flex object-cover"
                  style={getImageStyle(images[2])}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[2].id}
                  src={images[2].url}
                  alt="drone"
                  className="md:flex top-[180px] absolute right-[-91px] object-cover"
                  style={getImageStyle(images[2])}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>
              <div className="text-[7.15px] absolute bottom-[182px] right-[190px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] flex items-center">
                <img
                  src="/images/L.png"
                  alt="line"
                  className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
                />
                <span
                  className="translate-x-[-37px]"
                  dangerouslySetInnerHTML={{ __html: images[2].desc }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-[2px] absolute bottom-[42px] left-1/2 -translate-x-1/2 rounded-[6px] bg-white border-[#C3C3C3] w-fit h-fit mx-auto">
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
      </div>

      <div className="invisible"></div>
    </div>
  );
};

export default Rental;
