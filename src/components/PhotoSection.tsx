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
    <div className=" w-full h-[563px] flex shrink-0">
      {details.map((d) => (
        <div key={d.id} className=" flex-1 relative flex  items-end ">
          <img
            src={d.img}
            alt="image "
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />

          <p className=" text-left relative max-w-[349px]  text-[24px] leading-[20.4px]  text-white  mx-auto mb-[47px]">
            {d.text}
          </p>
          <div
            style={{
              background:
                "linear-gradient(5.68deg, #000000 3.74%, rgba(0, 0, 0, 0) 94.77%)",
            }}
            className=" absolute bottom-0 left-0 w-full h-[214px]"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default PhotoSection;
