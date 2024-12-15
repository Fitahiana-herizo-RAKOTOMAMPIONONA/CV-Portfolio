import { useEffect } from "react"
import { slideINtop } from "../../animation/animation.js"
import { CardAccueil, CardDeco, CardExperience, Titre } from "../../components/components.export.jsx"
import { experience, formation } from "../../data/data.experience.jsx"

export default function About() {
    useEffect(()=>{
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
            description="un etudiant qui suit la mention informatique au sein de l'ISPM un etudiant qui suit la mention informatique au sein de l'ISPM"
            className2="lg:col-span-2"
        />
        <div className="sm:flex  gap-3 lg:col-span-3">
            <CardExperience title="experience" data={experience} />
            <CardExperience title="formation" data={formation} className="mt-3" />
        </div>
        <CardDeco title="Let's work" titleBlue="together." to="/contact" className2="lg:col-span-3" />
        <CardAccueil
            description="MORE ABOUT ME"
            title="Credentials"
            image="./assets/image/sign.png"
            to="/credentials"
        />
        <CardAccueil
            description="AN DEVELOPER"
            title="gFonts"
            image="./assets/image/gfonts.png"
            className="cardBox6"
        />
        <CardAccueil
            description="SHOWCASE"
            title="Projects"
            image="./assets/image/my-works.png"
            className="cardBox5"
            to="/work"
        />
    </div>
}