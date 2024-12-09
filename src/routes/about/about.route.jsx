import CardDeco from "../../components/card/card.accueil.deco.jsx"
import CardAccueil from "../../components/card/card.accueil.jsx"
import CardExperience from "../../components/card/card.experience.jsx"
import { Titre } from "../../components/titre/titre.text.jsx"
import { experience, formation } from "../../data/data.experience.jsx"

export default function About (){
    return <div className="grid gap-3">
        <div className="w-[300px] p-6 backgroundPers rounded-2xl m-auto">
            <img src="./assets/image/profile.jpg" alt="" srcSet="" className="w-full rounded-xl"/>
        </div>
        <Titre title="Self summary"/>
        <CardDeco title="RAKOTOMAMPIONONA FITAHIANA" titleBlue ="Herizo." description="un etudiant qui suit la mention informatique au sein de l'ISPM"/>
        <CardExperience title="experience" data={experience}/>
        <CardExperience title="formation" data={formation}/>
        <CardDeco title="Let's work" titleBlue ="together." to="/contact"/>
        <CardAccueil
            description="MORE ABOUT ME" 
            title="Credentials" 
            image = "./assets/image/sign.png"
            to="/credentials"
        />
    </div>
}