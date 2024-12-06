import { navListe } from "../../data/route.data"


export default function NavBar (){
    return <div className="flex justify-between pt-5 pb-5">
        <div className="gauche"> Herizo</div>
        <div className="flex gap-5">
            {
                navListe.map((item ,key)=>
                {
                    return <a href={item.nom != "Accueil" ? "/"+item.nom : "/"} key={key}>
                        {item.nom} 
                    </a>
                })
            }
        </div>
        <div className="gauche"> Herizo</div>
    </div>
}