import SpanColors from "../components/spanColors";

const AerialPhotography = () => {
  return (
    <div>
      <h1 className=" uppercase text-center mb-[79px] mt-[74px]  font-black leading-[34.85px]  text-[41px]  text-[#232323]">
        Aerial Photography & Videography
      </h1>
      <SpanColors />

      <div className="flex w-full bg-red-500 flex-col">
        {[
          "/images/vid1.png",
          "/images/vid1.png",
          "/images/vid2.png",
          "/images/vid3.png",
        ].map((img) => (
          <IndividualVideo imgUrl={img} key={img} />
        ))}
      </div>
    </div>
  );
};

export default AerialPhotography;

const IndividualVideo = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="w-full bg-green-200 relative h-[673px]">
      <img src={imgUrl} className=" w-full h-full object-cover" alt="" />
      <img
        src="/images/playBtn.png"
        className="absolute top-1/2 size-[138px] -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover"
        alt=""
      />
      <div
        style={{
          background:
            "linear-gradient(5.68deg, #000000 3.74%, rgba(0, 0, 0, 0) 94.77%)",
        }}
        className="w-full flex  items-end pb-[42px] pl-[39px] bg-red-700 absolute bottom-0 left-0  h-[214px]"
      >
        <p className=" text-[24px]  leading-[20.4px] font-normal text-white">
          Aerial View of Lawoke Resorts
        </p>
      </div>
    </div>
  );
};
