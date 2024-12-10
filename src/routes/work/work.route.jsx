import { BoxWork } from "../../components/box/box.work"
import CardAccueil from "../../components/card/card.accueil"
import CardDeco from "../../components/card/card.accueil.deco"
import { Titre } from "../../components/titre/titre.text"

export default function Work() {
    return <div>
        <Titre title="ALL project" className={"col-span-2"} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" to="work/1" className={"row-span-3"} />
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" />
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" />
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" />
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" />
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg" />
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
            <CardDeco title="Let's work" titleBlue="together." to="/contact" className={"md*:col-span-3"} />
        </div>
    </div>
}
