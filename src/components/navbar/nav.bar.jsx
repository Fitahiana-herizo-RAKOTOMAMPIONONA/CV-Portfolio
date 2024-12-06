import { useState } from "react"
import { navListe } from "../../data/route.data"

export default function NavBar (){
    const [isMenuActive ,setIsMenuActive ]  = useState(false)
    return <div className="block sm:flex justify-between  pt-5 pb-5">
        <div className="text-xl font-semibold"> Herizo</div>
        <div className="block  sm:flex gap-5 hidden">
            {
                navListe.map((item ,key)=>
                {
                    return <div key={key}>
                        <a href={item.nom != "Accueil" ? "/"+item.nom : "/"}>
                            {item.nom} 
                        </a>
                    </div>
                })
            }
        </div>
        
        <div className={isMenuActive ? "hidden"  : "hidden"}> Herizo</div>
    </div>
}