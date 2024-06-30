// import SpanColors from "./spanColors";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" h-fit md:min-h-screen mb0[53px] md:mb-[414px] pt-[15px] md:pt-[51px]  ">
      <div className="  pl-[34.61px] md:pl-0 w-fit  flex gap-3 md:gap-[23px] mx-auto  items-center">
        <h1 className="  text-[30.9px] md:text-[71.63px] font-black leading-[26.26px] md:leading-[60.89px] text-black relative">
          FAQS
        </h1>
        <div className=" h-[39.69px] flex items-center  md:h-[92px] w-[660px] ">
          <div className=" h-full w-[71.17px] bg-[#FDB441]"></div>
          <div className=" h-full w-[71.17px] bg-[#FEDF30]"></div>
          <div className=" h-full w-[71.17px] bg-[#26A6FE]"></div>
          <div className=" h-full w-[71.17px] bg-[#E94444]"></div>
        </div>
      </div>
      <Accordion
        className="w-[calc(100%-29px)] md:w-[calc(100%-192px)] gap-[27px] md:gap-[66px] flex flex-col mx-auto mt-[38px] md:mt-[90px]"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1" className=" border-none">
          <AccordionTrigger className="hover:no-underline text-[#1A1A1A] text-left font-black text-[9.49px] md:text-[22px] leading-[10.35px] md:leading-[24px]">
            What aerial photography/videography services do you <br /> offer,
            and are your pilots FAA certified?
          </AccordionTrigger>
          <AccordionContent className="text-[6.47px] leading-[9.49px] md:text-[15px] md:leading-[22px]">
            We handle various aerial projects with safety protocols and
            FAA-certified <br /> pilots.Get a quote for your specific needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" border-none">
          <AccordionTrigger className="hover:no-underline text-[#1A1A1A] text-left font-black text-[9.49px] md:text-[22px] leading-[10.35px] md:leading-[24px]">
            Do you offer full video production services, and can you work on{" "}
            <br /> location or in a studio?
          </AccordionTrigger>
          <AccordionContent className="text-[6.47px] leading-[9.49px] md:text-[15px] md:leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className=" border-none">
          <AccordionTrigger className="hover:no-underline text-[#1A1A1A] text-left font-black text-[9.49px] md:text-[22px] leading-[10.35px] md:leading-[24px]">
            What video and photography equipment can I rent, and do you offer{" "}
            <br /> flexible rental options with instruction?
          </AccordionTrigger>
          <AccordionContent className="text-[6.47px] leading-[9.49px] md:text-[15px] md:leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className=" border-none">
          <AccordionTrigger className="hover:no-underline text-[#1A1A1A] text-left font-black text-[9.49px] md:text-[22px] leading-[10.35px] md:leading-[24px]">
            How can I get a quote or schedule a consultation to discuss my
            project?
          </AccordionTrigger>
          <AccordionContent className="text-[6.47px] leading-[9.49px] md:text-[15px] md:leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
