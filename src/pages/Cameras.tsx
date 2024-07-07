/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import SpanColors from "../components/spanColors";
import { Link } from "react-router-dom";

interface SectionImage {
  id: number;
  url: string;
  desc: string;
  link: string;
}

interface SectionData {
  id: number;
  title: string;
  images: SectionImage[];
}

const Cameras = () => {
  const sectionsData: SectionData[] = [
    {
      id: 1,
      title: "camera and lenses",
      images: [
        {
          id: 1,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "1",
        },
        {
          id: 2,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "2",
        },
        {
          id: 3,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "3",
        },
      ],
    },
    {
      id: 2,
      title: "Audio Equipment",
      images: [
        {
          id: 1,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "12",
        },
        {
          id: 2,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "123",
        },
        {
          id: 3,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "23",
        },
      ],
    },
    {
      id: 3,
      title: "Lighting Equipment",
      images: [
        {
          id: 1,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "1",
        },
        {
          id: 2,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "",
        },
        {
          id: 3,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "",
        },
      ],
    },
    {
      id: 4,
      title: "Stabilizers and Gimbals",
      images: [
        {
          id: 1,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "",
        },
        {
          id: 2,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "",
        },
        {
          id: 3,
          url: "/images/lens.png",
          desc: "Sony Cinema Line Camera - FX3",
          link: "",
        },
      ],
    },
  ];

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
  const [linkDisplayed, setLinkDisplayed] = useState({
    display: false,
    section: 0,
  });

  const getBoxStyle = (boxNumber: number) => {
    const isMobile = window.innerWidth <= 768; // Example threshold for mobile devices

    switch (boxNumber) {
      case 0:
        if (positions === 0) {
          return isMobile
            ? {
                left: "110px",
                top: "55px",
              }
            : {
                left: "315px",
                top: "-42px",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "-31.98px",
                top: "130px",
              }
            : {
                left: "-173px",
                top: "257px",
              };
        } else {
          return isMobile
            ? {
                left: "215px",
                top: "95px",
                transform: "translateX(0%)",
              }
            : {
                left: "837px",
                top: "195px",
                transform: "translateX(0%)",
              };
        }
      case 1:
        if (positions === 0) {
          return isMobile
            ? {
                left: "0px",
                top: "57px",
              }
            : {
                left: "-33px",
                top: "165px",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "335px",
                top: "90px",
              }
            : {
                left: "972px",
                top: "95px",
              };
        } else {
          return isMobile
            ? {
                left: "150px",
                top: "-12px",
                transform: "translateX(0%)",
              }
            : {
                left: "448px",
                top: "-26px",
                transform: "translateX(0%)",
              };
        }
      case 2:
        if (positions === 0) {
          return isMobile
            ? {
                left: "335px",
                top: "62px",
              }
            : {
                left: "986px",
                top: "180px",
              };
        } else if (positions === 1) {
          return isMobile
            ? {
                left: "150px",
                top: "px",
                transform: "translateX(0%)",
              }
            : {
                left: "448px",
                top: "-45px",
                transform: "translateX(0%)",
              };
        } else {
          return isMobile
            ? {
                left: "-14px",
                top: "107px",
                transform: "translateX(0%)",
              }
            : {
                left: "-27px",
                top: "214px",
                transform: "translateX(0%)",
              };
        }
      default:
        return {};
    }
  };

  const swapPosition = () => {
    setPositions((prevPosition) => (prevPosition === 2 ? 0 : prevPosition + 1));
  };
  if (linkDisplayed.display) {
    return <SectionDisplay data={sectionsData[linkDisplayed.section]} />;
  }
  return (
    <div className="min-h-[540px] flex flex-col items-center justify-center md:min-h-fit">
      <h1 className="hidden md:flex uppercase text-center mb-[79px] font-black leading-[34.85px] text-[41px] text-[#232323]">
        <span className="font-normal"> Video & Photography</span>{" "}
        <span className="invisible">i</span> Equipment Rental
      </h1>
      <div className="w-full min-h-[263.22px] md:min-h-[834px] relative overflow-x-hidden flex flex-col">
        <div className="flex justify-center items-center">
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
        </div>
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
              className="md:flex transition-all duration-100 object-cover"
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
            className="relative w-[139.11px]  h-[133.53px] md:w-[385px] md:h-[385px] object-cover"
          >
            <motion.img
              key={images[1].id}
              src={images[1].url}
              alt="drone"
              className="flex w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="text-[7.15px] absolute top-[184px] md:top-[528px] left-[21.29px] md:left-[84px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] justify-start items-center flex mt-2">
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
        <div className="text-[7.15px] absolute bottom-[63.45px] md:bottom-[182px] right-[58px] md:right-[190px] md:text-[20.5px] md:leading-[17.43px] leading-[6.08px] flex items-center">
          <img
            src="/images/L.png"
            alt="line"
            className="md:w-[53px] w-[18px] h-[33px] md:h-[95px]"
          />
          <span
            className=" translate-x-[-10px] md:translate-x-[-37px]"
            dangerouslySetInnerHTML={{
              __html:
                images[positions === 0 ? 1 : positions === 1 ? 2 : 0].desc,
            }}
          />
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
      </div>

      <ul className="text-white mx-auto mt-[42px] w-[221.21px] md:w-[396px] h-[224px] md:h-[401px] flex list-disc justify-center items-center md:mb-auto mb-[79px] flex-col gap-1 md:gap-[27px] bg-[#7E7D7D]">
        <li
          onClick={() =>
            setLinkDisplayed({
              display: true,
              section: 0,
            })
          }
          className="font-normal text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]"
        >
          <Link to="">Cameras and Lenses</Link>
        </li>
        <li
          onClick={() =>
            setLinkDisplayed({
              display: true,
              section: 1,
            })
          }
          className="font-normal text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]"
        >
          <Link to="">Audio Equipment</Link>
        </li>
        <li
          onClick={() =>
            setLinkDisplayed({
              display: true,
              section: 2,
            })
          }
          className="font-normal text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]"
        >
          <Link to="">Lighting Equipment</Link>
        </li>
        <li
          onClick={() =>
            setLinkDisplayed({
              display: true,
              section: 3,
            })
          }
          className="font-normal text-[13.97px] md:text-[25px] leading-[34.63px] md:leading-[18px]"
        >
          <Link to=""> Camera Accessories</Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <SpanColors />
      </div>
    </div>
  );
};

export default Cameras;

const SectionDisplay = ({ data }: { data: SectionData }) => {
  if (!data) return null;
  return (
    <div className="w-full h-fit pb-[263px]">
      <h1 className="font-black text-center uppercase mb-[63px] text-[26.12px] md:text-[41px] leading-[22.21px] md:leading-[34.85px] mx-auto text-[#232323]">
        {data.title}
      </h1>
      <div className="flex flex-wrap justify-between px-[27px] md:px-[103px]">
        {data.images.map((image) => (
          <Link
            key={image.id}
            to={`/camera/${image.link}`}
            className=" max-w-[163px] md:max-w-[296px] h-fit flex flex-col gap-[2px]"
          >
            <img
              className="md:w-[268px] w-[147.49px] object-center h-[141.58px] md:h-[257.25px] object-contain"
              src={image.url}
              alt=""
            />
            <p className="  leading-[9.59px] text-[11.28px] md:text-[20.5px] md:leading-[17.43px]">
              {image.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
