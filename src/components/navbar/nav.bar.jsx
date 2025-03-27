import { useState, useEffect } from "react";
import { navListe } from "../../data/route.data";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleClassMenu = (e) => {
    e.preventDefault();
    setIsMenuActive(!isMenuActive);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl  bg-opacity-60 transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } 
    ${isMenuActive ? "h-auto transition-all duration-700" : null}  
    xl:w-[100%]`}
    >
      <div className="maxContent pl-6 pr-6 m-auto relative">
        <div className="block relative mb-3 sm:flex justify-between pt-5 pb-1 pl-2 pr-2">
          <img src="/ico.png" alt="" srcSet="" className="w-10 h-6 flex-2" />
          <button
            className="absolute right-0 top-4 sm:hidden border-0"
            onClick={toggleClassMenu}
          >
            <div className="font-semibold">
              {isMenuActive ? (
                <MdClose className="text-[30px]" />
              ) : (
                <MdOutlineMenu className="text-[30px]" />
              )}
            </div>
          </button>
          <div className="block sm:flex justify-between gap-7 lg:gap-12">
            <div
              className={`${
                isMenuActive
                  ? "block text-center  sm:flex gap-5"
                  : "hidden sm:flex gap-5"
              }`}
            >
              {navListe.map((item, key) => (
                <div
                  key={key}
                  className={`${
                    isMenuActive ? "mt-5 mb-5 sm:mt-0 sm:mb-0" : null
                  }`}
                >
                  <Link
                    to={item.nom !== "Accueil" ? "/" + item.nom : "/"}
                    className="lowercase"
                  >
                    <div className="flex gap-2">
                        {item.icone}
                        <div>{item.nom}</div>
                    </div>
                    {/* {item.nom} */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
            <Link to="/contact">
              <div
                className={`backgroundPers pl-7 pr-7 pb-2 pt-2 rounded-lg sm:mt-[-10px] capitalize font-semibold ${
                  isMenuActive
                    ? "block text-center pt-4 pb-4 sm:pb-1"
                    : "hidden sm:block"
                }`}
              >
                let's <span className="text-blue-800">talk</span>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
