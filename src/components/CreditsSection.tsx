const CreditsSection = () => {
  return (
    <div className=" h-fit relative overflow-hidden w-full bg-[#535353] px-[65px] md:px-[82px] py-[23px] md:py-[68px] flex flex-col ">
      <img
        src="/images/bgLarge.svg"
        className="h-[1183px] hidden md:flex bg-white object-contain absolute -top-[250px] left-[685px] w-[1111px]"
        alt=""
      />
      <img
        src="/images/creditImage.png"
        className="w-[372.36px] h-[396.49px] object-contain right-[-20%] top-[-10%] absolute "
        alt=""
      />
      <h1
        className=" text-[32.37px] text-center md:text-left md:text-[71.63px] font-black leading-[27.52px] md:leading-[60.89px] text-white relative
"
      >
        Credits
      </h1>
      <p
        className=" text-[14.46px] mt-2 md:mt-auto md:text-[32px] font-normal leading-[12.29px] md:leading-[27.2px] text-white relative
"
      >
        We were involved in these remarkable projects
      </p>
      <div className=" flex md:flex-row flex-col mt-[17px] md:mt-[39px] relative gap-[22px]">
        {[1, 2].map((img) => (
          <div key={img} className="">
            <img
              className=" w-[299.2px] md:w-[536px] h-[138.99px] md:h-[249px] object-cover"
              src="/images/creditsFrame.png"
              draggable={false}
              loading="lazy"
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsSection;
