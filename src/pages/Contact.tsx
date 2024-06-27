import SpanColors from "../components/spanColors";

const Contact = () => {
  return (
    <div className=" overflow-hidden w-full  relative">
      <SpanColors />
      <div className=" bg-[#030303] md:px-[80px] w-full ">
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
    <div className="bg-inherit  z-[6] relative w-full text-white flex justify-between h-fit py-[71px]  ">
      <div className=" bg-[#030303] gap-2 flex flex-col">
        <h1 className=" text-left  text-[87px] font-black leading-[81px]  tracking-[-4%]">
          Reach out <br /> to Us
        </h1>
        <p className=" text-left max-w-[395px]  text-[20px]  leading-[21px]  ">
          Do you want to request a quote or make enquiries about any of our
          product or services.
        </p>

        <img
          className=" w-[225px] h-[48px] object-cover"
          src="images/studoperks.png"
          alt="logo"
        />
      </div>
      <div className="  relative z-0   w-[506px] h-fit flex flex-col gap-2">
        <form className=" w-full  h-full" action="">
          <div className="  flex gap-[20px]">
            <input
              type="text"
              placeholder="Full Name"
              className=" flex-1 bg-white bg-opacity-[13%] text-white  px-[19px] rounded-[8px] h-[62px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className=" flex-1  bg-white bg-opacity-[13%] px-[19px] rounded-[8px] h-[62px]"
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
