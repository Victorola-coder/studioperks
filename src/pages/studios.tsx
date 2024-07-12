import { Link } from "react-router-dom";
import SpanColors from "../components/spanColors";
import PerksSection from "@/components/PerksSection";

const Studio = () => {
  return (
    <>
      <div className="md:min-h-[1019px] h-fit md:h-screen overflow-hidden justify-center items-center">
        <div className="flex flex-col h-fit md:min-h-[1019px] relative">
          <div className="md:hidden flex">
            <PerksSection />
          </div>

          <div className="h-full flex md:flex-auto flex-col-reverse w-full lg:w-[1280px] relative">
            <Link
              to="/videoProduction"
              className="hover:scale-[1.4] hover:z-[500] transition-transform ease-in-out duration-300 flex pl-[48px] pb-[50px] pr-[48px] items-end relative md:absolute top-auto md:top-[84px] z-10 left-auto md:left-[111px] bg-green-400 md:rotate-[18.94deg] w-full md:w-[483px] h-[152px] md:h-[563px]"
            >
              <img
                src="/images/shooting.png"
                className="w-full h-full absolute top-0 left-0 object-cover"
                alt=""
              />
              <h1 className="max-w-[349px] relative text-white z-10 font-normal text-[24px] leading-[20.4px]">
                Video <br /> Production
              </h1>
            </Link>

            <div className="hover:scale-[1.4] hover:z-[500] transition-transform ease-in-out duration-300 flex pb-[50px] pl-[48px] items-end relative md:absolute bottom-auto md:left-[300px] z-20 left-auto md:bottom-[84px] bg-purple-400 md:rotate-[12.78deg] w-full md:w-[483px] h-[152px] md:h-[563px]">
              <img
                src="/images/camera.png"
                className="w-full h-full absolute top-0 left-0 object-cover"
                alt=""
              />
              <h1 className="max-w-[349px] relative text-white z-10 font-normal text-[24px] leading-[20.4px]">
                Video & Photography <br /> Equipment Rental
              </h1>
            </div>

            <Link
              to="/AerialPhotography"
              className="hover:scale-[1.4] hover:z-[500] transition-transform ease-in-out duration-300 flex pb-[50px] pl-[48px] items-end relative md:absolute top-auto md:top-[167px] z-0 md:right-[111px] bg-blue-400 md:rotate-[-12.78deg] w-full md:w-[483px] h-[152px] md:h-[563px]"
            >
              <img
                src="/images/village.svg"
                className="w-full absolute top-0 left-0 h-full object-cover"
                alt=""
              />
              <h1 className="relative text-white z-10 max-w-[349px] font-normal text-[24px] leading-[20.4px]">
                Aerial Photography & Videography
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden mt-[81px] md:flex">
        <SpanColors />
      </div>
    </>
  );
};

export default Studio;
