import { useEffect } from "react";
import { slideINtop, slideINtopSlow } from "../../animation/animation.js";
import {
  CardAccueil,
  CardDeco,
  LanguageChart,
  Statistique,
} from "../../components/components.export.jsx";
import { BarChart } from "@mui/x-charts";

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
        message="Étudiant en IMTICIA à l’ISPM, je suis une personne rigoureuse, curieuse et passionnée  par des nouvelles technologie informatique ..."
        image="./assets/image/profile.jpg"
        to="/about"
        className="row-span-2 md:col-span-1 cardBox2"
      />
      <div className="cardBox3 backgroundPers text-sm p-5 rounded-2xl max-h-[70px] md:col-span-2 text-center inline-block overflow-hidden">
        <span className="animate-marquee whitespace-nowrap">
          Salut .c'est herizo
        </span>
      </div>

      <CardAccueil
        description="Plus sur moi"
        title="certification"
        image="./assets/image/sign.png"
        className="cardBox4"
        to="/credentials"
      />

      <CardAccueil
        description="SHOWCASE"
        title="Projets"
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
        title="Service offerte"
        image="./assets/image/my-works.png"
        to="/service"
        className="cardBox7"
      />
      <CardAccueil
        description="POUR PLUS"
        title="Contactez-moi."
        className="cardBox8"
        to="/Contact"
      />
      {/* <LanguageChart className="lg:col-span-2"/> */}
      <Statistique />
      <CardDeco
        title="Collaborons"
        titleBlue="ensemble."
        to="/contact"
        className={"md*:col-span-3"}
      />
    </div>
  );
}
