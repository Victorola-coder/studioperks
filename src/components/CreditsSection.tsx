const CreditsSection = () => {
  return (
    <div className=" h-fit relative overflow-hidden w-full bg-[#535353] px-[82px] py-[68px] flex flex-col ">
      <img
        src="/images/bgLarge.svg"
        className="h-[1183px]  object-contain absolute -top-[250px] left-[685px] w-[1111px]"
        alt=""
      />
      <h1
        className="text-[71.63px] font-black leading-[60.89px] text-white relative
"
      >
        Credits
      </h1>
      <p
        className="text-[32px] font-normal leading-[27.2px] text-white relative
"
      >
        We were involved in these remarkable projects
      </p>
      <div className=" flex mt-[39px] relative gap-[22px]">
        {[1, 2].map((img) => (
          <div key={img} className="">
            <img
              className=" w-[536px] h-[249px] object-cover"
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
