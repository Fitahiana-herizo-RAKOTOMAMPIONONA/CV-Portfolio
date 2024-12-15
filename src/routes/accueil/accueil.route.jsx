import { useEffect } from "react";
import { slideINtop, slideINtopSlow } from "../../animation/animation.js";
import { CardAccueil ,CardDeco ,Statistique} from "../../components/components.export.jsx";


export default function Accueil() {
  useEffect(() => {
    slideINtop(".cardBox1");
    slideINtopSlow(".cardBox2");
    slideINtopSlow(".cardBox3");
    slideINtopSlow(".cardBox4");
    slideINtopSlow(".cardBox5");
    slideINtopSlow(".cardBox6");
    slideINtopSlow(".cardBox7");
    slideINtopSlow(".cardBox8");
    slideINtopSlow(".cardBox9");
  }, []);

  return (
    <div className="cardBox1 grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
        description="BLOG" 
        title="gFonts"
        image="./assets/image/gfonts.png"
        className="cardBox6"
        to="/blog"
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
