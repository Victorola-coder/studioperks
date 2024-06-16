const Rental = () => {
  return (
    <div className=" w-full h-fit relative min-h-[939px] bg-white">
      <h1 className="text-[41px] font-[700] leading-[34.85px] mx-auto w-fit mt-[70px] uppercase flex">
        Video & Photography Equipment Rental
      </h1>
      <img
        src="/images/drone1.png"
        alt="drone"
        className=" mx-auto flex h-[341px] w-[606px]"
      />

      <div className=" flex bottom-[207px] absolute -left-[0px]">
        <img
          src="/images/c1.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className=" flex bottom-[207px] absolute right-[0px]">
        <img
          src="/images/l1.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className=" h-fit w-fit rounded-md border-[2px]  border-[#C3C3C3]">
        <div className="absolute rounded-md left-1/2 bottom-[42px] -translate-x-1/2 w-[414px] h-[189px] flex items-center bg-[#7e7d7d5c] border-[1px]  border-[#000000] ">
          <div className="flex items-center ">
            <img
              src="/images/Polygon3.png"
              className="size-[51px] ml-10 object-contain"
              alt=""
            />
            <span className="  text-left  ml-[51px] mr-[] text-[#353535] font-normal text-[20.5px]  leading-[17.43px]">
              Ultra 4k Cinema DJI Mavic Drone
            </span>
            <img
              src="/images/Polygon4.png"
              className="size-[51px] mr-[41px] object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
