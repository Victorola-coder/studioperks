import { Link } from "react-router-dom";
import SpanColors from "../components/spanColors";

const Studio = () => {
  return (
    <>
      <div className="min-h-[1019px]  h-screen flex  justify-center  items-center">
        <div className=" h-full  w-[1280px] relative">
          <Link
            to="/videoProduction"
            className=" flex  pl-[48px]  pb-[50px] pr-[48px] items-end absolute top-[84px] z-10 left-[111px]  bg-green-400  rotate-[18.94deg] w-[483px] h-[563px]"
          >
            {" "}
            <img
              src="/images/shooting.png"
              className=" w-full h-full absolute top-0 left-0 object-cover"
              alt=""
            />
            <h1 className="  max-w-[349px] relative text-white z-10   font-normal text-[24px] leading-[20.4px]">
              Video <br /> Production
            </h1>
          </Link>
          <div className=" flex  pb-[50px] pl-[48px] items-end absolute   left-[300px] z-20  bottom-[84px]  bg-purple-400  rotate-[12.78deg] w-[483px] h-[563px]">
            {" "}
            <img
              src="/images/camera.png"
              className=" w-full h-full absolute top-0 left-0 object-cover"
              alt=""
            />{" "}
            <h1 className="  max-w-[349px] relative text-white z-10  font-normal text-[24px] leading-[20.4px]">
              Video & Photography <br /> Equipment Rental
            </h1>
          </div>
          <Link
            to="/AerialPhotography"
            className=" flex  pb-[50px] pl-[48px] items-end absolute top-[167px] z-0 right-[111px]   bg-blue-400  rotate-[-12.78deg] w-[483px] h-[563px]"
          >
            {" "}
            <img
              src="/images/village.svg"
              className=" w-full absolute top-0 left-0  h-full object-cover"
              alt=""
            />{" "}
            <h1 className=" relative text-white z-10   max-w-[349px] font-normal text-[24px] leading-[20.4px]">
              Aerial Photography & Videography
            </h1>
          </Link>
        </div>
      </div>
      <SpanColors />
    </>
  );
};

export default Studio;
