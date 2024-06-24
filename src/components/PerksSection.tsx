const PerksSection = () => {
  return (
    <div className=" h-[196px] bg-black relative flex ">
      <img
        className=" absolute left-[33px] top-1/2 -translate-y-1/2 w-[143px] h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      />
      <div className=" h-full w-full flex items-center justify-center -translate-x-1/2 left-1/2 top-0 ">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((logo) => (
          <img
            key={logo}
            src="/images/studoperks.svg"
            className="w-[356px] opacity-[17%] object-cover object-center h-[77px]"
            alt="perks"
          />
        ))}
      </div>
    </div>
  );
};

export default PerksSection;
