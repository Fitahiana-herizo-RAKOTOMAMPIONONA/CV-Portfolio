import CardAccueil from "../../components/cardAccueil/card.accueil"

export default function Accueil (){
    return <div className="grid grid-cols-1 gap-3">
        <CardAccueil 
            description="AN DEVELOPPER" 
            title="Herizo RAKOTOMAMPIONONA ." 
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui cum aut beatae"
            image="./assets/image/profile.jpg"
        />
        <div className=" bg-black md w-[100%] text-sm p-5 rounded-2xl sm:w-[50%]: lg:">
            Lorem ipsum, dolor sit amet consectet
        </div>
        <CardAccueil
            description="AN DEVELOPPER" 
            title="Credentials" 
        />
        <CardAccueil
            description="AN DEVELOPPER" 
            title="About me ." 
        />
        <CardAccueil
            description="AN DEVELOPPER" 
            title="Project ." 
        />
        <CardAccueil
            description="AN DEVELOPPER" 
            title="Contact me." 
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
        <div className="bg-black rounded-lg p-6 md:col-span-4 text-center">
            <h2 className="text-2xl font-bold">Let's work together.</h2>
        </div>
    </div>
}