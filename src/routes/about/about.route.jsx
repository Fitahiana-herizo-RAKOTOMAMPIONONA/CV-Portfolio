import { CardAccueil, CardDeco, CardExperience, Titre } from "../../components/components.export.jsx"
import { experience, formation } from "../../data/data.experience.jsx"

export default function About (){
    return <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
        <div className="w-[300px] p-6 backgroundPers rounded-2xl m-auto row-span-1 lg:row-span-2">
            <img src="./assets/image/profile.jpg" alt="" srcSet="" className="w-full rounded-xl"/>
        </div>
        <Titre title="Self summary" className={"lg:m-auto"}/>
        <CardDeco title="RAKOTOMAMPIONONA FITAHIANA" titleBlue ="Herizo." description="un etudiant qui suit la mention informatique au sein de l'ISPM"/>
        {/* <div className="sm:flex gap-3 "> */} 
            <CardExperience title="experience" data={experience}/>
            <CardExperience title="formation" data={formation}/>
        {/* </div> */}
        <CardDeco title="Let's work" titleBlue ="together." to="/contact" className2="lg:col-span-2"/>
        <CardAccueil
            description="MORE ABOUT ME" 
            title="Credentials" 
            image = "./assets/image/sign.png"
            to="/credentials"
        />
    </div>
}