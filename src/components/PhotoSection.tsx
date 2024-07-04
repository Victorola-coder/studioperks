import { motion } from "framer-motion";
const PhotoSection = () => {
  const details = [
    {
      id: 1,
      img: "/images/village.svg",
      text: "Aerial Photography & Videography",
    },
    {
      id: 2,
      img: "images/camera.png",
      text: "Aerial Photography & Videography",
    },
    {
      id: 3,
      img: "/images/shooting.png",
      text: "Aerial Photography & Videography",
    },
  ];
  return (
    <div className=" w-full overflow-hidden h-[563px] flex-col md:flex-row flex shrink-0">
      {details.map((d) => (
        <motion.div
          key={d.id}
          className=" flex-1 h-[150px] overflow-y-hidden md:h-auto relative flex  items-end "
        >
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 2 }}
            src={d.img}
            alt="image "
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />

          <div
            style={{
              background:
                "linear-gradient(5.68deg, #000000 3.74%, rgba(0, 0, 0, 0) 94.77%)",
            }}
            className=" absolute bottom-0 left-0 w-full h-[214px]"
          ></div>
          <p className="  text-left relative max-w-[349px] text-nowrap md:text-wrap text-[16px] md:text-[24px] ml-4 md:ml-auto leading-[13.6px] md:leading-[20.4px]  text-white mb-[29px] md:mx-auto md:mb-[47px]">
            {d.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoSection;
