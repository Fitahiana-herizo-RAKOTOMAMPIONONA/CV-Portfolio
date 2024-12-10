import { useParams } from "react-router-dom"
import { Navigation } from "../../components/navigation/navigation"
import { Titre } from "../../components/titre/titre.text"
import Titre2 from "../../components/titre/titre.text2";

export default function WorkDetail (props){
    const params = useParams();
    
    return <div>
        <Navigation nav1="work" nav2="Voteo"/>
        <Titre title="Branding for new startup"/>
        <div>
            <img src="/assets/image/projet-1.jpg" alt="" className="w-full max-h-[400px] object-cover object-top" />
        </div>
        <div className=" rounded-xl sm:rounded-3xl sm:flex bg-transparent backgroundPers relative overflow-hidden mt-10">
            <img src="/assets/image/icon2.png" alt="" srcSet="" className="absolute top-[-15px] right-5"/>
            <div className="p-4 sm:backgroundPers  mt-4 sm:mt-0">
                <Titre2 title="VOTEO"  className={"pt-4 pb-2"}/>
                <div className="pt-2 pb-2 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minus laudantium ducimus assumenda odio totam iure praesentium veritatis, laboriosam quos odit culpa. Debitis expedita corporis recusandae explicabo ratione error a!
                </div> 
                <div className="pt-2 pb-2 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minus laudantium ducimus assumenda odio totam iure praesentium veritatis, laboriosam quos odit culpa. Debitis expedita corporis recusandae explicabo ratione error a!
                </div>
            </div>
            <div className="p-4 sm:backgroundPers mt-4 sm:mt-0">
                <Titre2 title="Description"  className={"pt-4 pb-2"}/>
                <div className="pt-2 pb-2 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minus laudantium ducimus assumenda odio totam iure praesentium veritatis, laboriosam quos odit culpa. Debitis expedita corporis recusandae explicabo ratione error a!
                </div> 
                <div className="pt-2 pb-2 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minus laudantium ducimus assumenda odio totam iure praesentium veritatis, laboriosam quos odit culpa. Debitis expedita corporis recusandae explicabo ratione error a!
                </div>
            </div>
        </div>
    </div>
}
