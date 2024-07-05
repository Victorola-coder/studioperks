import { useState } from "react";
import { motion } from "framer-motion";

const RentalTwin = () => {
  const [positions, setPositions] = useState(0);

  const swapPosition = () => {
    setPositions((prevPosition) => (prevPosition === 2 ? 0 : prevPosition + 1));
  };

  const getBoxStyle = (boxNumber: number) => {
    switch (boxNumber) {
      case 0:
        if (positions === 0) {
          return {
            left: "50%",
            top: "0%",
            transform: "translateX(-50%)",
          };
        } else if (positions === 1) {
          return {
            left: "0%",
            top: "60%",
            transform: "translateX(0%)",
          };
        } else {
          return {
            left: "90%",
            top: "60%",
            transform: "translateX(0%)",
          };
        }
      case 1:
        if (positions === 0) {
          return {
            left: "90%",
            top: "60%",
            transform: "translateX(0%)",
          };
        } else if (positions === 1) {
          return {
            left: "60%",
            top: "0%",
            transform: "translateX(-60%)",
          };
        } else {
          return {
            left: "30px",
            top: "60%",
            transform: "translateX(0%)",
          };
        }
      case 2:
        if (positions === 0) {
          return {
            left: "0%",
            top: "50%",
            transform: "translateX(0%)",
          };
        } else if (positions === 1) {
          return {
            left: "90%",
            top: "60%",
            transform: "translateX(0%)",
          };
        } else {
          return {
            left: "60%",
            top: "3%",
            transform: "translateX(0%)",
          };
        }
      default:
        return {};
    }
  };

  return (
    <div className="h-screen relative flex py-20 flex-col gap-10 px-32">
      <motion.div
        style={getBoxStyle(0)}
        animate={getBoxStyle(0)}
        transition={{ duration: 0.5 }}
        className="w-[200px] h-[200px] absolute mx-auto rounded-sm bg-orange-500"
      >
        box1
      </motion.div>
      <div className="w-full h-fit flex justify-between items-center">
        <motion.div
          style={getBoxStyle(1)}
          animate={getBoxStyle(1)}
          transition={{ duration: 0.5 }}
          className="w-[200px] h-[200px] absolute rounded-sm bg-emerald-500"
        >
          box2
        </motion.div>
        <motion.div
          style={getBoxStyle(2)}
          animate={getBoxStyle(2)}
          transition={{ duration: 0.5 }}
          className="w-[200px] h-[200px] absolute rounded-sm bg-purple-500"
        >
          box3
        </motion.div>
      </div>
      <button
        onClick={swapPosition}
        className="absolute bottom-[50px] left-1/2 py-2 px-4 bg-blue-500 -translate-x-1/2"
      >
        Swap Position
      </button>
    </div>
  );
};

export default RentalTwin;
