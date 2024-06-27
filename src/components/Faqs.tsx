import SpanColors from "./spanColors";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" min-h-screen mb-[414px] pt-[51px]  ">
      <div className=" w-fit flex gap-[23px] mx-auto  items-center">
        <h1 className="text-[71.63px] font-black leading-[60.89px] text-black relative">
          FAQS
        </h1>
        <div className=" h-[92px] w-[660px]">
          <SpanColors />
        </div>
      </div>
      <Accordion
        className=" w-[calc(100%-192px)] gap-[66px] flex flex-col mx-auto mt-[90px]"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1" className=" border-none">
          <AccordionTrigger className="hover:no-underline text-[#1A1A1A] text-left font-black text-[22px] leading-[24px]">
            What aerial photography/videography services do you <br /> offer,
            and are your pilots FAA certified?
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-[22px]">
            We handle various aerial projects with safety protocols and
            FAA-certified <br /> pilots.Get a quote for your specific needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" border-none">
          <AccordionTrigger className="hover:no-underline  text-[#1A1A1A] text-left font-black text-[22px] leading-[24px]">
            Do you offer full video production services, and can you work on{" "}
            <br /> location or in a studio?
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className=" border-none">
          <AccordionTrigger className="hover:no-underline  text-[#1A1A1A] text-left font-black text-[22px] leading-[24px]">
            What video and photography equipment can I rent, and do you offer{" "}
            <br /> flexible rental options with instruction?
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className=" border-none">
          <AccordionTrigger className="hover:no-underline  text-[#1A1A1A] text-left font-black text-[22px] leading-[24px]">
            How can I get a quote or schedule a consultation to discuss my
            project?
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-[22px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
