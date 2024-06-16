import React from "react";

const SpanColors = () => {
  const colors = ["#FDB441", "#FEDF30", "#26A6FE", "#E94444"];
  return (
    <div className="flex shrink-0 h-[31px] md:h-[92px]">
      {colors.map((col) => (
        <div
          key={col}
          style={{
            background: col,
          }}
          className="flex-1 "
        ></div>
      ))}
    </div>
  );
};

export default SpanColors;
