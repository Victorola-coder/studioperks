/* eslint-disable @typescript-eslint/no-unused-vars */
import SpanColors from "../components/spanColors";

const About = () => {
  return (
    <div className=" relative overflow-x-hidden w-full min-h-[1385px]">
      <div className=" relative  h-[540px] md:h-auto">
        <div className="left-0 z-10 absolute w-[481.21px] h-[540.01px] md:w-[1264.47px] md:h-[1418.98px]">
          <img
            className=" w-full h-full object-contain object-center"
            src="/images/aboutBgRemoved.png"
            alt=""
          />
        </div>
        <img
          src="/images/transparent.png"
          className=" z-0 absolute object-contain left-[25px] md:left-[179px] w-[328.81px] h-[349.74px] md:w-[919px]  md:h-[919px]  top-[125px]"
          alt=""
        />
        <div className="w-full  h-fit flex justify-end">
          <div className=" mt-[41px] md:mt-[147px]  absolute md:relative right-[34px]  bg-[#6CF5C2] md:mr-[187px] w-[253.07px] h-[232.14px]  md:w-[665px] md:h-[610px]  rounded-[32.03px]">
            <div className=" absolute top-[130px] md:top-[347px] right-[67px] font-black text-[23.19px] md:text-[60.94px] leading-[19.71px] md:leading-[51.8px] text-[#4E4E4E]">
              <h1>About Us</h1>
              <p className=" text-[5.33px] md:text-[14.01px] max-h-[147px] leading-[6.13px]  md:leading-[16.12px] max-w-[434px] mt-[9px]">
                StudioPerks is a leading video and photo production company
                based in Lagos, Nigeria. We specialize in delivering
                high-quality visual content for organizations and brands. Our
                comprehensive services include video production, photography,
                equipment rental, aerial photography, and videography
              </p>
            </div>
          </div>
        </div>

        <div className="w-full  absolute md:relative bottom-[41px] h-fit mt-[120px] z-20   flex flex-col md:items-end md:pr-[350px] md:justify-end">
          <div className=" ml-[84px] md:ml-auto w-[263.56px] md:w-[692.56px] flex flex-col justify-end">
            <div className=" h-[101.84px] md:h-[267px] rounded-[31.64px] overflow-hidden w-full ">
              <img
                src="/images/mission.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-black mt-3  md:mt-[34px] text-[#000000] text-[35.82px] md:text-[94.14px] leading-[30.45px]  md:leading-[80.02px] ">
                Our Mission
              </h1>
              <p className=" leading-[6.97px] md:leading-[18.32px] mt-1 md:mt-[13px] text-[8.2px] md:text-[21.55px] font-normal">
                our mission is to provide innovative and high-quality visual
                content that helps organizations and brands effectively
                communicate their message and achieve their goals.{" "}
              </p>
            </div>
          </div>
          {/* <img
          src="/images/about.png"
          alt="camera-about"
          className="w-[1264.47px] bg-red-50 invisible h-[1418.98px] z-10 relative bg-blend-darken object-contain"
        /> */}
        </div>
      </div>
      <div className=" mt-[40px] mb-[56px]">
        <SpanColors />
      </div>
      <div className=" flex flex-col md:pb-[63px] relative h-[563px] md:h-[1262px]">
        <h1 className="font-black  w-fit flex mx-auto mb-[29px] md:mb-[47px]     text-[#000000] text-[28.04px] md:text-[57px]  leading-[48.45px] ">
          Our Team
        </h1>
        <div className="  w-full h-full flex flex-col gap-[29px] md:gap-[60px] justify-center items-center">
          <div className="  flex gap-[28px] md:gap-[57px]">
            {" "}
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img
                className="w-[155px] md:w-[316.72px] md:h-[355.55px] h-[174.92px] object-cover"
                src="/images/olalekan.png"
                alt=""
              />
              <p className=" text-[#373737] text-[11.6px] md:text-[23.58px] leading-[20.05px] font-normal">
                Director
              </p>
            </div>
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img
                className="w-[155px] md:w-[316.72px] md:h-[355.55px] h-[174.92px] object-cover"
                src="/images/s2.png"
                alt=""
              />
              <p className=" text-[#373737] text-center max-w-[89.34px] md:max-w-[181.6px] text-[11.6px] md:text-[23.58px] leading-[20.05px] font-normal">
                Head of Media Operations
              </p>
            </div>
          </div>
          <div className=" flex gap-[28px] md:gap-[57px] md:mb-[112px]">
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img
                className="w-[155px] md:w-[316.72px] md:h-[355.55px] h-[174.92px] object-cover"
                src="/images/s3.png"
                alt=""
              />
              <p className=" text-[#373737] text-[11.6px] md:text-[23.58px] leading-[20.05px] font-normal">
                Legal & Licensing
              </p>
            </div>

            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img
                className="w-[155px] md:w-[316.72px] md:h-[355.55px] h-[174.92px] object-cover"
                src="/images/s4.png"
                alt=""
              />
              <p className=" text-[#373737] text-[11.6px] md:text-[23.58px] leading-[20.05px] font-normal">
                Technology Officer
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex w-full  gap-[144px] items-center justify-center ">
          <h1 className=" font-black text-[24.75px] leading-[28.21px] ">
            <span className=" font-black text-[49.5px] leading-[56.43px] ">
              5+{" "}
            </span>{" "}
            Years Of <br /> Experience
          </h1>
          <h1 className=" font-black text-[24.75px] leading-[28.21px] ">
            <span className=" font-black text-[49.5px] leading-[28.21px] ">
              40+{" "}
            </span>{" "}
            Projects <br /> Completed
          </h1>
          <h1 className=" font-black text-[24.75px] leading-[28.21px] ">
            <span className=" font-black text-[49.5px] leading-[28.21px] ">
              20+{" "}
            </span>
            Experienced <br /> Team members
          </h1>
        </div>
        <img
          src="/images/left.png"
          className=" absolute hidden md:flex  top-1/2 -translate-y-1/2 left-0"
          alt=""
        />
        <div className=" h-[475px] absolute hidden md:flex   right-0 object-center bottom-[277px]">
          <img
            src="/images/right.png"
            className="  w-full h-full object-contain   right-0"
            alt=""
          />{" "}
        </div>
        {/**/}
      </div>
    </div>
  );
};

export default About;
