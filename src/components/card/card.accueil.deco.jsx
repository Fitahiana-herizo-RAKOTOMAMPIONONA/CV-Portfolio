import { useEffect } from "react"
import { slideINleft, slideInRight, slideINtop } from "../../animation/animation"
import { Link } from "react-router-dom";

export default function CardDeco(props){
    useEffect(()=>{
        slideINleft(".card");
    },[])
    return <Link to={props.to}>
        <div className={`${props.className} backgroundPers w-full relative rounded-lg p-6 md:col-span-4 overflow-hidden ${props.description? "text-left`" : "text-center"}`}>
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
    </Link>
}