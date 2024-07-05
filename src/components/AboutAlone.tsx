const AboutAlone = () => {
  return (
    <div className=" w-fuxll h-[590px] w-[1280px] overflow-hidden relative">
      <div className="-left-[206px] -top-[90px]     z-10 absolute w-[961.69px] h-[1079.21px]">
        <img
          className=" w-full h-full object-cover object-right"
          src="/images/aboutBgRemoved.png"
          alt=""
        />
      </div>
      <img
        src="/images/transparent.png"
        className=" z-0 absolute -left-[49px] w-[657px]  h-[699px]  top-[33px]"
        alt=""
      />
      <div className=" w-full h-fit flex justify-end">
        <div className=" mt-[50px] absolute left-[185px]    bg-[#6CF5C2]  w-[506px] h-[464px]  rounded-[32.03px]">
          <div className=" absolute top-[260px] right-[50px] font-black text-[60.94px]  leading-[51.8px] text-[#4E4E4E]">
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
      <div className="w-fit h-fit absolute right-[82px] mt-[120px] z-20    flex flex-col items-end justify-end">
        <div className=" w-[527px]  flex flex-col justify-end">
          <div className=" h-[203.63px] rounded-[24px] overflow-hidden w-full ">
            <img
              src="/images/mission.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-end w-full items-end">
            <h1 className="font-black  mt-[26px] text-[#000000] text-[71.63px]  leading-[60.89px] ">
              Our Mission
            </h1>
            <p className=" leading-[13.94px] mt-[9px] max-w-[380.47px] text-[16.4px] font-normal">
              our mission is to provide innovative and high-quality visual
              content that helps organizations and brands effectively
              communicate their message and achieve their goals.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAlone;
