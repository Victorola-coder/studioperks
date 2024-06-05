import { useCallback, useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navRef = useRef<any>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClick = useCallback(
    function (e: Event) {
      if (isOpened && !navRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isOpened) {
      setTimeout(() => {
        window.addEventListener("mousedown", handleClick);
      });
    } else {
      window.removeEventListener("mousedown", handleClick);
    }
  }, [isOpened, handleClick]);

  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
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
  return (
    <header className="lg:mx-[196px] pt-5 mx-[30px] lg:py-[48px]  md:mx-[20px] md:py-[18px]">
      <nav className="flex flex-row items-center justify-between">
        <figure>
          <img src="images/logo.svg" alt="logo" />
        </figure>
        <div>
          <ul className="hidden md:flex gap-10">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} to={navLink.link}>
                {({ isActive }) => (
                  <li
                    className={`before:content-[''] before:bg-[#EE6161] before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                      isActive
                        ? "text-[#EE6161] before:w-full before:bg-[url('/images/bg-nav.svg')] before:bg-no-repeat before:bg-center"
                        : "text-black before:w-[0px] hover:before:w-full "
                    } relative`}
                  >
                    {navLink.title}
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden" ref={navRef}>
          <div className="">
            <figure
              className="space-y-1.5 focus:outline-none focus:ring focus:ring-primary/60 p-1 pb-1.5 rounded-md"
              onClick={() => setIsOpened(!isOpened)}
            >
              <img src="images/nav.svg" alt="nav" />
            </figure>
            <div>
              <div
                className={`grad z-[100] min-h-[130px] absolute bg-white px-[26px] py-[28px] border-[1.5px] border-solid border-black/10 block mt-[60px] md:hidden transition-all duration-300 ${
                  isOpened ? "-translate-y-[50px]" : "-translate-y-[200%]"
                } pt-4 left-0 right-0`}
              >
                {navLinks.map((navLink, index) => (
                  <NavLink key={index} to={navLink.link}>
                    {({ isActive }) => (
                      <p
                        onClick={() => setIsOpened(false)}
                        className={`before:content-[''] before:bg-[#EE6161] before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                          isActive
                            ? "text-[#EE6161] before:w-fit before:bg-[url('/images/bg-nav.svg')] before:bg-no-repeat before:bg-center"
                            : "text-black before:w-[0px] hover:before:w-fit "
                        } relative`}
                      >
                        {navLink.title}
                      </p>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
