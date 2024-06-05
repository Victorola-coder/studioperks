import { Link } from "react-router-dom";

export default function Footer() {
  const companyLinks = [
    {
      title: "About US",
      link: "/about",
    },
    {
      title: "Cameras",
      link: "/cameras",
    },
    {
      title: "Lighting",
      link: "/lighting",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  const legalLinks = [
    {
      title: "Terms add Conditions",
      link: "/terms",
    },
    {
      title: "Privacy Policy",
      link: "/privacy",
    },
  ];
  return (
    <footer className="bg-[#000000]  text-white py-[55px]  pl-[62px]">
      <section className="flex flex-col gap-5">
        <figure>
          <img
            src="/images/transp.svg"
            alt="transparent_logo"
            className=""
            draggable={false}
            loading="lazy"
          />
        </figure>
        {/* LINKS */}
        <div className="flex flex-col gap-[46px]">
          <div>
            <h4 className="text-[18px] font-medium leading-[23.81px] font-red">
              StudioPerks
            </h4>
            <div className="font-aeonik font-normal leading-[18.24px] text-[#D9D9D9] mt-[14px] flex flex-col gap-[10px]">
              <p>Orchid Rd, Lekki Lagos Nigeria</p>
              <p>Tel. +234800000000, +23480000000</p>
              <p>Email. info@studioperks.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-[18px] font-medium leading-[23.81px] font-red">
              Company
            </h4>
            <div className="font-aeonik font-normal leading-[18.24px] text-[#D9D9D9] mt-[14px] flex flex-col gap-[10px]">
              {companyLinks.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[18px] font-medium leading-[23.81px] font-red">
              Legal
            </h4>
            <div className="font-aeonik font-normal leading-[18.24px] text-[#D9D9D9] mt-[14px] flex flex-col gap-[10px]">
              {legalLinks.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
