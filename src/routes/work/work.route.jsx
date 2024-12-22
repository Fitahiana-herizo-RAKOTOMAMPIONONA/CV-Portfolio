import { useEffect, useState } from "react"
import { BoxWork, CardAccueil, CardDeco, Titre } from "../../components/components.export"
import axios from "axios"
import { slideINtop } from "../../animation/animation";
import { WorkData } from "../../data/work.secure.data";

export default function Work() {
    const api_url = import.meta.env.VITE_API_URL
    const [load, setLoad] = useState(false)
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        let result;
        try {
            const url = import.meta.env.VITE_API_URL + "/work/all"
            result = await axios.get(url)
            if (result.data.data.length > 0) {
                setData(result.data.data);
                setLoad(true)
            }
        } catch (error) {
            console.log(error);
            setData(WorkData);
        }
    }
    
    
    useEffect(() => {
        fetchdata();
    }, [])
    useEffect(() => {
        slideINtop(".cardG")
    }, [])
    return <div className="cardG">
        <Titre title="Tous les projets" className={"col-span-2 text-3xl lg:text-6xl"} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                load == true || data.length > 0?
                    data.map((item, key) => {
                        return <BoxWork key={key} type={item.type || "Description indisponible"} title={item.title_work} image={load ? api_url + item.file_url : item.file_url} to={load ?  item.id_work : key} />
                    })
                    :
                    Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="mt-8 mb-8 relative animate-pulse"
                            >
                                <div className="w-full bg-gray-300 h-48 rounded-lg sm:w-full dark:bg-gray-700"></div>
                                <div className="text-blue-800 sm:mt-4 sm:mb-4 sm:p-2 h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                                <div className="uppercase font-semibold text-lg lg:text-2xl h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3"></div>
                                <div className="mt-4 w-[200px] h-10 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                            </div>
                        );
                    })
            }
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
                description="POUR PLUS"
                title="Contactez-moi."
                className="cardBox8"
                to="/Contact"
            />
            <CardDeco title="Let's work" titleBlue="together." to="/contact" className={"md*:col-span-3"} />
        </div>
    </div>
}
