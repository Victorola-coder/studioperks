const PerksSection = () => {
  return (
    <div className=" h-[73.96px] md:h-[196px] bg-black relative flex ">
      <img
        className=" absolute -left-[14px] md:left-[33px] top-1/2 -translate-y-1/2 md:w-[143px] h-[56.98px] w-[53.96px] md:h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      />
      <div className=" h-full w-full flex items-center justify-center left-[25px] md:-translate-x-1/2 md:left-1/2 top-0 ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((logo) => (
          <img
            key={logo}
            src="/images/studoperks.svg"
            className="w-[134.33px] md:w-[356px] opacity-[17%] object-cover object-center h-[29.06px] md:h-[77px]"
            alt="perks"
          />
        ))}
      </div>
    </div>
  );
};

export default PerksSection;
