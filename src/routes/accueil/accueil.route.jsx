// import { useEffect } from "react"
// import CardAccueil from "../../components/card/card.accueil.jsx"
// import CardDeco from "../../components/card/card.accueil.deco.jsx"
// import { slideINleft, slideInRight, slideINtop } from "../../animation/animation.js"

// export default function Accueil (){
//     useEffect(()=>{
//         slideINtop(".cardBox1")
//         slideINtop(".cardBox2")
//     },[])
//     return <div className="cardBox1 grid grid-cols-1 gap-6 md:grid-cols-3: ">
//         <CardAccueil 
//             description="AN DEVELOPPER" 
//             title="Herizo RAKOTOMAMPIONONA ." 
//             message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Qui cum aut beatae"
//             image="./assets/image/profile.jpg"
//             to="/about"
//         />
//         <div className="backgroundPers md w-[100%] max-h-[70px] text-sm p-5 rounded-2xl sm:w-[50%]: lg:col-span-1">
//             Lorem ipsum, dolor sit amet consectet
//         </div>
//         <CardAccueil
//             description="MORE ABOUT ME" 
//             title="Credentials" 
//             image = "./assets/image/sign.png"
//         />
//         <CardAccueil
//             description="SHOWCASE" 
//             title="Project ." 
//             image="./assets/image/my-works.png"
//         />
//         <CardAccueil
//             description="AN DEVELOPPER" 
//             title="gFonts"
//             image = "./assets/image/gfonts.png"
//         />
    
//         <CardAccueil
//             description="Specialisation" 
//             title="Service offering" 
//             image="./assets/image/my-works.png"
//             to="/service"
//         />
//         <CardAccueil
//             description="MORE" 
//             title="Contact me."
//             to="/Contact"
//             // icone={GrContact}
//         />
//         <div className="backgroundPers rounded-lg p-6 md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             <div>
//                 <p className="text-2xl font-bold">7</p>
//                 <p className="text-gray-400">Years Experience</p>
//             </div>
//             <div>
//                 <p className="text-2xl font-bold">+125</p>
//                 <p className="text-gray-400">Clients Worldwide</p>
//             </div>
//             <div>
//                 <p className="text-2xl font-bold">+210</p>
//                 <p className="text-gray-400">Projects</p>
//             </div>
//         </div>
//         <CardDeco title="Let's work" titleBlue ="together." to={"/contact"}/>
//     </div>
// }


import { useEffect } from "react";
import CardAccueil from "../../components/card/card.accueil.jsx";
import CardDeco from "../../components/card/card.accueil.deco.jsx";
import { slideINtop } from "../../animation/animation.js";

export default function Accueil() {
  useEffect(() => {
    slideINtop(".cardBox1");
    slideINtop(".cardBox2");
    slideINtop(".cardBox3");
    slideINtop(".cardBox4");
    slideINtop(".cardBox5");
    slideINtop(".cardBox6");
    slideINtop(".cardBox7");
    slideINtop(".cardBox8");
    slideINtop(".cardBox9");

  }, []);

  return (
    <div className="cardBox1 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
      <CardAccueil 
        description="AN DEVELOPER" 
        title="Herizo RAKOTOMAMPIONONA." 
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum aut beatae"
        image="./assets/image/profile.jpg"
        to="/about"
        className="row-span-2 md:col-span-1 cardBox2"
      />
      <div className="cardBox3 backgroundPers text-sm p-5 rounded-2xl max-h-[70px] md:col-span-2 flex items-center justify-center">
        Lorem ipsum, dolor sit amet consectetur
      </div>
      
      {/* Deuxième ligne */}
      <CardAccueil
        description="MORE ABOUT ME" 
        title="Credentials" 
        image="./assets/image/sign.png"
        className="cardBox4"
        to="/credentials"
      />
      <CardAccueil
        description="SHOWCASE" 
        title="Projects" 
        image="./assets/image/my-works.png"
        className="cardBox5"
      />
      <CardAccueil
        description="AN DEVELOPER" 
        title="gFonts"
        image="./assets/image/gfonts.png"
        className="cardBox6"
      />
  
      <CardAccueil
        description="Specialisation" 
        title="Service offering" 
        image="./assets/image/my-works.png"
        to="/service"
        className="cardBox7"
      />
      <CardAccueil
        description="MORE" 
        title="Contact me."
        className="cardBox8"
        to="/Contact"
      />
  
      <div className="cardBox9 backgroundPers rounded-lg p-6 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
  
      {/* Dernière ligne */}
      <CardDeco title="Let's work" titleBlue="together." to="/contact" className={"md*:col-span-3"}/>
    </div>
  );  
}
