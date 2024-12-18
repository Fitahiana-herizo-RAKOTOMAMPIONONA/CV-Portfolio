import { useState, useEffect } from "react";
import { navListe } from "../../data/route.data";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
    const date = new Date
    return (
        <div
            className={`w-full p-6`}
        >
            <div className="text-center text-xl font-semibold">
                Port<span className="text-orange-500 uppercase">Folio</span>.
            </div>
            <div className="flex gap-6 justify-center lg:gap-10">
                {navListe.map((item, key) => (
                    <div key={key}>
                        <Link to={item.nom !== "Accueil" ? "/" + item.nom : "/"}>
                            {item.nom}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center opacity-100 text-gray-500">
                @copyright {date.getFullYear()}
            </div>
        </div>
    );
}