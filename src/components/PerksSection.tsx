import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PerksSection = () => {
  const img1 = useRef<HTMLImageElement | null>(null);
  const img2 = useRef<HTMLImageElement | null>(null);
  const perkRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (img1.current && img2.current) {
      const animateImage = (element: HTMLImageElement, delay: number = 0) => {
        const timeline = gsap.timeline({ repeat: -1, delay });
        timeline
          .to(element, { left: "90%", duration: 2, ease: "power1.inOut" })
          .to(element, { left: "-2%", duration: 1, ease: "power3.out" });
      };

      animateImage(img1.current);
      animateImage(img2.current, 0.2);
    }
    if (perkRef) {
      gsap.to(perkRef.current, { x: "-2005", duration: 6, repeat: -1 });
    }
  });

  return (
    <div className="h-[73.96px] w-full md:h-[196px] bg-black relative flex">
      <img
        ref={img1}
        className="absolute top-1/2 -translate-y-1/2 -left-[2%] md:w-[143px] h-[56.98px] w-[53.96px] md:h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      />
      <img
        ref={img2}
        className="absolute top-1/2 -translate-y-1/2 -left-[2%] md:w-[143px] h-[56.98px] w-[53.96px] md:h-[151px] object-cover"
        src="/images/logotrans.svg"
        alt="logo"
      />
      <div
        ref={perkRef}
        className="h-full w-full flex items-center justify-center left-[25px] md:-translate-x-1/2 md:left-1/2 top-0"
      >
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
