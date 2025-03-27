import { useState, useEffect } from "react";
import { navListe } from "../../data/route.data";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

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
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-opacity-60 transition-transform duration-300 ${
            isNavVisible ? "translate-y-0" : "-translate-y-full"
        } 
    ${isMenuActive ? "h-auto transition-all duration-700" : null}  
    xl:w-[100%]`}
    >
        <div className="maxContent pl-6 pr-6 m-auto relative">
            <div className="flex justify-between items-center pt-5 pb-1 pl-2 pr-2">
                <Link className="font-bold text-2xl" to={'/'}>
                    Zou
                </Link>
                <button className="sm:hidden border-0" onClick={toggleClassMenu}>
                    <div className="font-semibold">
                        {isMenuActive ? (
                            <MdClose className="text-[30px]" />
                        ) : (
                            <MdOutlineMenu className="text-[30px]" />
                        )}
                    </div>
                </button>
                <div
                    className={`${
                        isMenuActive ? "block sm:flex gap-5" : "hidden sm:flex gap-10"
                    }`}
                >
                    {navListe.map((item, key) => (
                        <div key={key}>
                            <Link
                                to={item.nom !== "Accueil" ? "/" + item.nom : "/"}
                                className="lowercase text-gray-400 hover:text-white"
                            >
                                <div className="flex gap-2 items-center">
                                    {item.icone}
                                    <div>{item.nom}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex gap-5 items-center">
                    <CardReseaux
                        to={"https://github.com/Fitahiana-herizo-RAKOTOMAMPIONONA"}
                        icon={<BsGithub />}
                    />
                    <CardReseaux
                        to={
                            "https://www.linkedin.com/in/fitahiana-herizo-rakotomampionona-586960277/"
                        }
                        icon={<FaLinkedin />}
                    />
                    <CardReseaux
                        to={"mailto:fitahianaherizo10@gmail.com"}
                        icon={<FaMailBulk />}
                    />
                    <CardReseaux
                        to={"https://wa.me/+261281824169"}
                        icon={<FaWhatsapp />}
                    />
                </div>
            </div>
        </div>
    </div>
);
}
const CardReseaux = ({ to, icon }) => {
  return (
    <Link
      to={to}
      className="lowercase flex items-center gap-2 bg-slate-600 p-2 rounded-lg backgroundPers"
    >
      <div className="text-[20px]">{icon}</div>
    </Link>
  );
};
