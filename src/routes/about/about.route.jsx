import CardDeco from "../../components/card/card.accueil.deco.jsx"
import CardAccueil from "../../components/card/card.accueil.jsx"
import CardExperience from "../../components/card/card.experience.jsx"
import { experience, formation } from "../../data/data.experience.jsx"

export default function About (){



    return <div className="grid gap-3">
        <div className="w-[300px] p-6 bg-black rounded-2xl m-auto">
            <img src="./assets/image/profile.jpg" alt="" srcSet="" className="w-full rounded-xl"/>
        </div>
        <div className="uppercase text-2xl font-semibold text-center p-5">*  self-summary  *</div>
        <CardDeco title="RAKOTOMAMPIONONA FITAHIANA" titleBlue ="Herizo." description="un etudiant qui suit la mention informatique au sein de l'ISPM"/>
        <CardExperience title="experience" data={experience}/>
        <CardExperience title="formation" data={formation}/>
        <CardDeco title="Let's work" titleBlue ="together."/>
        <CardAccueil
            description="MORE ABOUT ME" 
            title="Credentials" 
            image = "./assets/image/sign.png"
        />
    </div>
}