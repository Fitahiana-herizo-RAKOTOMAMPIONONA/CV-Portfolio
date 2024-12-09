import { useEffect } from "react"
import { slideINleft, slideInRight, slideINtop } from "../../animation/animation"

export default function CardDeco(props){
    useEffect(()=>{
        slideINleft(".card");
    },[])
    return <div className={`card bg-[url(/assets/image/bg1.png)] bg-black bg-opacity-50  relative rounded-lg p-6 md:col-span-4 overflow-hidden ${props.description? "text-left`" : "text-center"}`}>
        <img src="./assets/image/icon2.png" alt="" srcSet="" className="absolute top-[-15px]"/>
        <div className={props.description? "mt-14" : null}>
            <h2 className="text-2xl font-bold">{props.title} <span className="text-blue-800">{props.titleBlue}</span></h2>
            {
                props.description?
                <div>
                    {props.description}
                </div>
                : null
            }
        </div>
    </div>
}