import { BoxWork } from "../../components/box/box.work"
import { Titre } from "../../components/titre/titre.text"


export default function Work (){
    return <div>
        <Titre title="ALL project"/>
        <div className="grid grid-cols-1 gap-5">
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
            <BoxWork type="Web deisigning" title="dynalic" image="./assets/image/icon.svg"/>
        </div>
    </div>
}
