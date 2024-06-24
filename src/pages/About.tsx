/* eslint-disable @typescript-eslint/no-unused-vars */
import SpanColors from "../components/spanColors";

const About = () => {
  return (
    <div className=" relative w-full min-h-[1385px]">
      <div className="left-0 z-10 absolute w-[1264.47px] h-[1418.98px]">
        <img
          className=" w-full h-full object-contain object-center"
          src="/images/aboutBgRemoved.png"
          alt=""
        />
      </div>
      <img
        src="/images/transparent.png"
        className=" z-0 absolute left-[179px] w-[919px]  h-[919px]  top-[125px]"
        alt=""
      />
      <div className=" w-full h-fit flex justify-end">
        <div className=" mt-[147px]  relative bg-[#6CF5C2] mr-[187px]  w-[665px] h-[610px]  rounded-[32.03px]">
          <div className=" absolute top-[347px] right-[67px] font-black text-[60.94px]  leading-[51.8px] text-[#4E4E4E]">
            <h1>About Us</h1>
            <p className=" text-[14.01px] max-h-[147px]  leading-[16.12px] max-w-[434px] mt-[9px]">
              StudioPerks is a leading video and photo production company based
              in Lagos, Nigeria. We specialize in delivering high-quality visual
              content for organizations and brands. Our comprehensive services
              include video production, photography, equipment rental, aerial
              photography, and videography
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit mt-[120px] z-20  relative  flex flex-col items-end pr-[350px] justify-end">
        <div className=" w-[692.56px] flex flex-col justify-end">
          <div className=" h-[267px] rounded-[31.64px] overflow-hidden w-full ">
            <img
              src="/images/mission.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-black  mt-[34px] text-[#000000] text-[94.14px]  leading-[80.02px] ">
              Our Mission
            </h1>
            <p className=" leading-[18.32px] mt-[13px] text-[21.55px] font-normal">
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
      <div className=" mt-[40px] mb-[56px]">
        <SpanColors />
      </div>
      <div className=" flex flex-col pb-[63px] relative h-[1262px]">
        <h1 className="font-black  w-fit flex mx-auto mb-[47px]     text-[#000000] text-[57px]  leading-[48.45px] ">
          Our Team
        </h1>
        <div className="  w-full h-full flex flex-col gap-[60px] justify-center items-center">
          <div className="  flex gap-[57px]">
            {" "}
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img src="/images/olalekan.png" alt="" />
              <p className=" text-[#373737] text-[23.58px] leading-[20.05px] font-normal">
                Director
              </p>
            </div>
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img src="/images/s2.png" alt="" />
              <p className=" text-[#373737] text-center max-w-[181.6px] text-[23.58px] leading-[20.05px] font-normal">
                Head of Media Operations
              </p>
            </div>
          </div>
          <div className=" flex gap-[57px] mb-[112px]">
            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img src="/images/s3.png" alt="" />
              <p className=" text-[#373737] text-[23.58px] leading-[20.05px] font-normal">
                Legal & Licensing
              </p>
            </div>

            <div className=" w-fit items-center h-fit flex flex-col  ">
              <img src="/images/s4.png" alt="" />
              <p className=" text-[#373737] text-[23.58px] leading-[20.05px] font-normal">
                Technology Officer
              </p>
            </div>
          </div>
        </div>
        <div className="  w-full flex gap-[144px] items-center justify-center ">
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
          className=" absolute  top-1/2 -translate-y-1/2 left-0"
          alt=""
        />
        <div className=" h-[475px] absolute   right-0 object-center bottom-[277px]">
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
