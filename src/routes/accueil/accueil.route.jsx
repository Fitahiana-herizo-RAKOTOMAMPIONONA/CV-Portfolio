import CardAccueil from "../../components/cardAccueil/card.accueil"

export default function Accueil (){
    return <div>
        <CardAccueil 
            description="AN DEVELOPPER" 
            title="Herizo RAKOTOMAMPIONONA ." 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui cum aut beatae"
            image="./assets/image/profile.jpg"
        />
        <div className=" bg-black md mt-3 w-[100%] text-sm p-5 rounded-2xl sm:w-[50%]: lg:">
            Lorem ipsum, dolor sit amet consectet
        </div>
        <CardAccueil
            description="AN DEVELOPPER" 
            title="About me ." 
        />
    </div>
}