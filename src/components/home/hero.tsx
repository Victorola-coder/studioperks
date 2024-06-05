import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
// import { AnimatePresence } from "framer-motion";

export default function Hero() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          // Update the direction variable
          // eslint-disable-next-line react-hooks/exhaustive-deps
          direction = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <section className="relative hero w-full h-[700px] ">
      <figure>
        <img
          src="/images/hero.png"
          draggable={false}
          className="w-full hidden relative"
          alt="hero-bg"
        />
      </figure>
      <div className="sliderContainer absolute">
        <div className="slider font-red" ref={slider}>
          <p ref={firstText}>StudioPerks -</p>
          <p ref={secondText}>StudioPerks -</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[30px] transform translate-y-10">
        <h3 className="font-normal text-white leading-[21.25px] text-center text-[25px] max-w-5xl block mx-auto">
          “we are committed to{" "}
          <span className="font-bold">capturing your vision</span> and bringing
          it to life through{" "}
          <span className="font-bold">exceptional visual </span> storytelling.”
        </h3>
        <button className="bg-[#FFFFFF40] text-white mx-auto block py-[19px] rounded-[8px] w-[220px] leading-[24px] text-[17px]">
          Get to know more
        </button>
      </div>
    </section>
  );
}
