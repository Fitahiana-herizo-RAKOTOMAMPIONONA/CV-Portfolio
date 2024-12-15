import { useEffect } from "react"
import { BoxService, Titre } from "../../components/components.export"
import { dataservice } from "../../data/data.service"
import { slideINtop, slideINtopSlow } from "../../animation/animation"


export default function Service() {
    useEffect(()=>{
        slideINtop(".cardB")
        slideINtopSlow(".card1")
        slideINtopSlow(".card2")
        slideINtopSlow(".card3")
    },[])
    return <div className="cardB">
        <div className="bg-black rounded-2xl p-6">
            {
                dataservice.map((item, key) => {
                    return <BoxService key={key} icone={item.icone} title={item.title} />
                })
            }
        </div>
        <Titre title="service offering" className="text-6xl"/>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-5">
            <CardService image="/assets/image/my-works.png" title="development Web" className="card1"/>
            <CardService image="/assets/image/my-works.png" title="development mobile" className="card2"/>
            <CardService image="/assets/image/my-works.png" title="Design UI/UX" className="card3"/>
        </div>
    </div>
}

export function CardService(props) {
    return <div className={`p-6 relative backgroundPers rounded-3xl ${props.className}`}>
        <img src={props.image} alt="" srcSet="" className="m-auto" />
        <div className="text-center capitalize font-semibold pt-3 pb-3">
            {props.title}
        </div>
    </div>
}