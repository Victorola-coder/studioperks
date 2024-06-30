const RateCard = () => {
  return (
    <div className=" w-full relative overflow-hidden grid place-items-center bg-[#535353] h-[116.23px] md:h-[270px]">
      <button className=" relative w-[114px] md:w-[265px] h-[33px] md:h-[77px] text-[#1E1E1E]  bg-[#FFFFFF] leading-[10.33px]  md:leading-[24px]  font-normal text-[10.76px] md:text-[25px]  rounded-[3px] ">
        View Rate Card
      </button>{" "}
      <img
        src="/images/pattern.png"
        className="absolute top-0 left-0 h-[982px]  w-[1315px]  object-fill"
        alt=""
      />
    </div>
  );
};

export default RateCard;
