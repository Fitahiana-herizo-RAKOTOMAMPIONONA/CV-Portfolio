import { useEffect, useState } from "react"
import { BoxWork, CardAccueil, CardDeco, Titre } from "../../components/components.export"
import axios from "axios"
import { slideINtop } from "../../animation/animation";

export default function Work() {
    const [work , setWork] = useState(
        [
            {
                id: 1,
                type : "Web designing",
                title_work : "Dynamic", 
                image: "./assets/image/projet-1.jpg",
            },
            {
                id: 2,
                type : "Web designing",
                title_work : "Dynamic", 
                image: "./assets/image/projet-2.jpg",
            },
            {
                id: 3,
                type : "Web designing",
                title_work : "Dynamic", 
                image: "./assets/image/projet-3.jpg",
            },
            {
                id: 4,
                type : "Web designing",
                title_work : "Dynamic", 
                image: "./assets/image/projet-1.jpg",
            },
            {
                id: 5,
                type : "Web designing",
                title_work : "Dynamic", 
                image: "./assets/image/projet-3.jpg",
            }
        ]
    )
    const [data , setData] = useState([]);

    const fetchdata = async () =>{
        const url = import.meta.env.VITE_API_URL + "/work/all"
        const result = await axios.get(url)
        if(data.length > 1)
            setData(result.data.data);
        else 
            setData(work)
    }

    useEffect(()=>{
        fetchdata();
    })
    useEffect(()=>{
        slideINtop(".cardG")
    })
    return <div className="cardG">
        <Titre title="ALL project" className={"col-span-2 text-3xl lg:text-6xl"} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                data.map((item,key)=>{
                    return <BoxWork key={key} type={item.type || "Description indisponible"} title={item.title_work} image={item.image || "./assets/image/projet-3.jpg"} to={item.id_work} />
                })
            }
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
