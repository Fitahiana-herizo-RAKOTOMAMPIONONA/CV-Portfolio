import { useParams } from "react-router-dom"
import { Navigation, Titre, Titre2 } from "../../components/components.export";
import { useEffect, useState } from "react";
import axios from "axios";
import { slideINtop } from "../../animation/animation";
import { CarouselProvider, Slider , Slide , ButtonBack , ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function WorkDetail (){
    const url = import.meta.env.VITE_API_URL
    const {id_work} = useParams();
    const [data ,setData] = useState()
    const [load,setLoad] = useState(false)
    const fetchdata = async() =>{
        const url = import.meta.env.VITE_API_URL + "/work/find/" + id_work
        const result  = await axios.get(url)
        console.log();
        if(result.data.result && result.status == 200){
            setData(result.data.result)  
            setLoad(true)
        }
    }
    console.log(data);
    
    useEffect(()=>{
        fetchdata()
    },[])

    useEffect(()=>{ 
        slideINtop(".cardG")
    },[])
    
    return <div className="cardG">
        <Navigation nav1="work" nav2={load? data.title_work :null} />
        <Titre title={load? data.title_work :null} />
        <div>
            <img src={load ? `${url}${data.file_url}` : null} alt="" className="w-full max-h-[400px] object-cover object-top" />
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
                    {
                       load?  data.description_work : "chargement ... "
                    }
                </div> 
            </div>
        </div>
        <CarouselProvider
            naturalSlideHeight={100}
            totalSlides={4}
        >
            <Slider>
               
            <Slide index={0}>
                    <img src="/assets/image/my-work.png" alt="" srcSet="" />
                </Slide>
                <Slide index={1}>
                    <img src="/assets/image/my-work.png" alt="" srcSet="" />
                </Slide>
                <Slide index={2}>
                    <img src="/assets/image/my-work.png" alt="" srcSet="" />
                </Slide>
                <Slide index={3}>
                    <img src="/assets/image/my-work.png" alt="" srcSet="" />
                </Slide>
            </Slider>
        </CarouselProvider>
    </div>
}
