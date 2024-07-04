import { motion } from "framer-motion";

const PerksSection = () => {
  return (
    <div className="h-[73.96px] w-full md:h-[196px] bg-black relative flex">
      {/* <motion.img
        initial={{
          left: "0%",
          top: "50%",
          translateY: "-50%",
          rotate: 0,
        }}
        animate={{
          left: ["0%", "50%", "90%"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",

          repeatDelay: 2,
        }}
        className="absolute -left-[14px] b md:w-[143px] h-[56.98px] w-[53.96px] md:h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      /> */}
      <motion.img
        initial={{
          left: "0%",
          top: "50%",
          translateY: "-50%",
          rotate: 0,
        }}
        animate={{
          left: ["0%", "50%", "90%"],

          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0, 1],
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.1,
          repeatDelay: 2,
        }}
        className="absolute -left-[14px] md:w-[143px] h-[56.98px] w-[53.96px] md:h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      />
      <div className="h-full w-full flex items-center justify-center left-[25px] md:-translate-x-1/2 md:left-1/2 top-0">
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
