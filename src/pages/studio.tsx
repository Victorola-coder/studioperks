import SpanColors from "../components/spanColors";

const Studio = () => {
  return (
    <>
      <div className="min-h-[1019px]  h-screen flex  justify-center  items-center">
        <div className=" h-full  w-[1280px] relative">
          <div className=" absolute top-[84px] z-10 left-[111px]  bg-green-400  rotate-[18.94deg] w-[483px] h-[563px]">
            {" "}
            <img
              src="/images/shooting.png"
              className=" w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className=" absolute   left-1/2 z-20  bottom-[84px] -translate-x-1/2 bg-purple-400  rotate-[12.78deg] w-[483px] h-[563px]">
            {" "}
            <img
              src="/images/camera.png"
              className=" w-full h-full object-cover"
              alt=""
            />{" "}
          </div>
          <div className=" absolute top-[167px] z-0 right-[111px]   bg-blue-400  rotate-[167deg] w-[483px] h-[563px]">
            {" "}
            <img
              src="/images/village.svg"
              className=" w-full  h-full object-cover"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
      <SpanColors />
    </>
  );
};

export default Studio;
