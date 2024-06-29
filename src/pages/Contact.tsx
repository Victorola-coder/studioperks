import SpanColors from "../components/spanColors";

const Contact = () => {
  return (
    <div className=" overflow-hidden w-full  relative">
      <div className=" hidden md:flex">
        <SpanColors />
      </div>
      <div className=" bg-[#030303] md:hidden md:px-[80px] w-full ">
        <Form />
      </div>

      {/* <img
        src="/images/bigBg.png"
        className=" -left-[149px] z-[5] bg-transparent absolute -top-[99px] h-[698px] w-[2483px]"
        alt=""
      /> */}
    </div>
  );
};

export default Contact;

export const Form = () => {
  return (
    <div className="bg-inherit  z-[6] relative w-full text-white flex flex-col md:flex-row md:justify-between h-fit py-12 px-10 md:px-0 md:py-[71px]  ">
      <div className=" bg-[#030303] gap-2 flex flex-col">
        <h1 className=" text-left text-[61.83px] md:text-[87px] font-black leading-[57.57px] md:leading-[81px]  tracking-[-4%]">
          Reach out <br /> to Us
        </h1>
        <p className=" text-left max-w-[395px] text-[14.21px] md:text-[20px] leading-[14.93px] md:leading-[21px]  ">
          Do you want to request a quote or make enquiries about any of our
          product or services.
        </p>

        <img
          className=" hidden md:flex w-[225px] h-[48px] object-cover"
          src="images/studoperks.png"
          alt="logo"
        />
      </div>
      <div className="  relative z-0  w-full mt-[32px] md:mt-auto md:w-[506px] h-fit flex flex-col gap-2">
        <form className=" w-full   h-full" action="">
          <div className=" w-full  flex gap-[12px] md:gap-[20px]">
            <input
              type="text"
              placeholder="Full Name"
              className=" flex-1 w-[156px] md:w-auto bg-white bg-opacity-[13%] text-white  pl-[15px] md:pl-[19px] rounded-[8px] h-[45px] md:h-[62px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className=" flex-1 w-[185px] md:w-auto bg-white bg-opacity-[13%] pl-[15px] md:pl-[19px] rounded-[8px] h-[45px] md:h-[62px]"
            />
          </div>
          <textarea
            className=" bg-white bg-opacity-[13%] min-h-[178px] w-full mt-5 text-white  p-[19px] rounded-[8px]"
            placeholder="Enquiries Information"
            name=""
            id=""
          ></textarea>
          <button
            className=" text-[#1E1E1E] mt-5  w-full rounded-[3px] bg-white h-[43px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
