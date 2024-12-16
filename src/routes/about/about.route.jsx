import { useEffect } from "react"
import { slideINtop } from "../../animation/animation.js"
import { CardAccueil, CardDeco, CardExperience, Titre } from "../../components/components.export.jsx"
import { experience, formation } from "../../data/data.experience.jsx"

export default function About() {
    useEffect(() => {
        slideINtop(".cardG")
    })
    return <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 cardG">
        <div className="w-[300px] p-6 backgroundPers rounded-2xl m-auto row-span-1 lg:row-span-2">
            <img src="./assets/image/profile.jpg" alt="" srcSet="" className="w-full rounded-xl" />
        </div>
        <Titre title="Self summary" className={"lg:m-auto lg:col-span-2 text-3xl lg:text-6xl"} />
        <CardDeco
            title="RAKOTOMAMPIONONA FITAHIANA"
            titleBlue="Herizo."
            description="Étudiant en IMTICIA à l’ISPM, je suis une personne rigoureuse, 
            curieuse et passionnée par des nouvelles technologie informatique et ainsi les technologies de l’information et de la communication, 
            avec une forte capacité d’adaptation et une volonté constante d’apprendre et d’innover 
            dans le domaine du numérique."
            className2="lg:col-span-2"
        />
        <div className="sm:flex  gap-3 lg:col-span-3">
            <CardExperience title="experience" data={experience} />
            <CardExperience title="formation" data={formation} className="mt-3" />
        </div>
        <CardDeco title="Pret a contribuer a votre" titleBlue="succes." to="/contact" className2="lg:col-span-3" />
        <CardAccueil
            description="PLUS SUR MOI"
            title="certification"
            image="./assets/image/sign.png"
            className="cardBox4"
            to="/credentials"
        />
        <CardAccueil
            description="BLOG"
            title="gFonts"
            image="./assets/image/gfonts.png"
            className="cardBox6"
            to="/blog"
        />
        <CardAccueil
            description="SHOWCASE"
            title="Projets"
            image="./assets/image/my-works.png"
            className="cardBox5"
            to="/work"
        />
    </div>
}