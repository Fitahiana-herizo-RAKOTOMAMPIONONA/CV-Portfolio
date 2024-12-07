import { useEffect } from "react"
import CardAccueil from "../../components/card/card.accueil.jsx"
import CardDeco from "../../components/card/card.accueil.deco.jsx"
import { slideINleft, slideInRight, slideINtop } from "../../animation/animation.js"

export default function Accueil (){
    useEffect(()=>{
        slideINtop(".cardBox1")
        slideINtop(".cardBox2")
        slideINleft(".card2")
        slideInRight(".card3")
        slideInRight(".input3")
    },[])
    return <div className="cardBox1 grid grid-cols-1 gap-3">
        <CardAccueil 
            description="AN DEVELOPPER" 
            title="Herizo RAKOTOMAMPIONONA ." 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui cum aut beatae"
            image="./assets/image/profile.jpg"
            to="/about"
        />
        <div className="cardBox2 bg-black md w-[100%] text-sm p-5 rounded-2xl sm:w-[50%]: lg:">
            Lorem ipsum, dolor sit amet consectet
        </div>
        <CardAccueil
            description="MORE ABOUT ME" 
            title="Credentials" 
            image = "./assets/image/sign.png"
        />
        <CardAccueil
            description="AN DEVELOPPER" 
            title="About me ."
            image = "./assets/image/gfonts.png"
        />
        <CardAccueil
            description="SHOWCASE" 
            title="Project ." 
            image="./assets/image/my-works.png"
        />
        <CardAccueil
            description="MORE" 
            title="Contact me."
            to="/Contact"
            // icone={GrContact}
        />
        <div className="bg-black rounded-lg p-6 md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
                <p className="text-2xl font-bold">+125</p>
                <p className="text-gray-400">Clients Worldwide</p>
            </div>
            <div>
                <p className="text-2xl font-bold">+210</p>
                <p className="text-gray-400">Projects</p>
            </div>
        </div>
        <CardDeco title="Let's work" titleBlue ="together."/>
    </div>
}