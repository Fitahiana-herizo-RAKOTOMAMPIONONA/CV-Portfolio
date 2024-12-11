import { useEffect } from "react";
import { slideINtop } from "../../animation/animation.js";
import { CardAccueil ,CardDeco ,Statistique} from "../../components/components.export.jsx";


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

  console.log(import.meta.VITE_API_URL);
  

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
        to="/work"
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
      <Statistique/>
      <CardDeco title="Let's work" titleBlue="together." to="/contact" className={"md*:col-span-3"}/>
    </div>
  );  
}
