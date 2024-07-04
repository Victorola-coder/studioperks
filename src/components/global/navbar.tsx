import { useCallback, useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navRef = useRef<any>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const location = useLocation();
  // This is the current path
  const currentPath = location.pathname;
  console.log(currentPath);
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
      borderImage: "/images/circularBorder.svg",
    },
    {
      title: "About Us",
      link: "/about",
      borderImage: "/images/aboutNav.svg",
    },
    {
      title: "Studio",
      link: "/studio",
      borderImage: "/images/studioNav.svg",
    },
    {
      title: "Camera & Drones",
      link: "/camera",
      borderImage: "/images/contactBorder.svg",
    },
    {
      title: "Contacts",
      link: "/contact",
      borderImage: "/images/circularBorder.svg",
    },
  ];
  return (
    <header
      className={` ${
        currentPath === "/contact" && "bg-black !text-white"
      } lg:px-[82px] w-full pt-5 px-[30px] lg:py-[48px]  md:px-[20px] md:py-[18px]`}
    >
      <nav className="flex flex-row items-center justify-between">
        {currentPath !== "/contact" ? (
          <figure>
            <img src="images/logo.svg" alt="logo" />
          </figure>
        ) : (
          <figure>
            <img
              className=" w-[225px] h-[48px] object-cover"
              src="images/studoperks.png"
              alt="logo"
            />
          </figure>
        )}
        <div>
          <ul className="hidden md:flex gap-10">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} to={navLink.link}>
                {({ isActive }) => (
                  <li
                    className={`relative w-full font-medium text-[19px]  before:duration-300 ${
                      isActive ? "text-[#EE6161] " : "text-black "
                    } ${currentPath === "/contact" && " !text-white"} relative`}
                  >
                    {navLink.title}
                    {isActive && (
                      <img
                        src={navLink.borderImage}
                        className="w-full object- scale-[1.2] object-center h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        alt=""
                      />
                    )}
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
