import { useParams } from "react-router-dom"
import { CommentCard, ComposantWork, Navigation, Titre, Titre2 } from "../../components/components.export";
import { useEffect, useState } from "react";
import axios from "axios";
import { slideINtop } from "../../animation/animation";
import { BsSendArrowUp } from "react-icons/bs";
import { WorkData } from "../../data/work.secure.data";

export default function WorkDetail() {
    const url = import.meta.env.VITE_API_URL
    const { id_work } = useParams();
    const [data, setData] = useState()
    const [comment, setComment] = useState([])
    const [error ,setError] = useState(data == undefined)
    const [load, setLoad] = useState(false)

    const fetchdata = async () => {
        try {
            const url = import.meta.env.VITE_API_URL + "/work/find/" + id_work
            const result = await axios.get(url)
            console.log();
            if (result.data.result && result.status == 200) {
                setData(result.data.result)
                setLoad(true)
            }
        }
        catch (error) {
            console.log(error);
            setData(WorkData[id_work])
        }

    }
    

    const constFetchComment = async () => {
        const url = import.meta.env.VITE_API_URL + "/comment/all"
        try {
            const result = await axios.get(url)
            console.log();
            if (result.data.result && result.status == 200) {
                setComment(result.data.result)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        setError(data == undefined)
    },[data])
    
    
    useEffect(() => {
        fetchdata()
        constFetchComment()
        slideINtop(".cardG")
    }, [])

    return <div className="cardG">
        <Navigation nav1="work" nav2={load ? data.title_work :  (!error? data.title_work : "null")} />
        <Titre title={error? "chargement ... ": data.title_work} className={"text-2xl lg:text-3xl"} />
        <div>
        {load ? `${url}${data.file_url}` : null}
            <img src={load ? `${url}${data.file_url}` : (!error? data.file_url : null)} alt="" className="w-full max-h-[400px] object-cover object-top" />
        </div>
        <div className=" rounded-xl sm:rounded-3xl grid lg:grid-cols-2 bg-transparent backgroundPers relative overflow-hidden mt-10 p-4 lg:p-10">
            <img src="/assets/image/icon2.png" alt="" srcSet="" className="absolute top-[-15px] right-14" />
            <div className="p-4 sm:backgroundPers  mt-4 sm:mt-0">
                <Titre2 title="VOTEO" className={"pt-4 pb-2 text-blue-600 uppercase"} />
                <div className="pt-2 pb-2">
                    {
                        load ? data.description_work : "chargement ... "
                    }
                </div>
            </div>
            <div className="p-4 sm:backgroundPers mt-4 sm:mt-0">
                <Titre2 title="Description" className={"pt-4 pb-2 text-blue-600 uppercase"} />
                <div className="pt-2 pb-2">
                    {
                        load ? data.description_work : "chargement ... "
                    }
                </div>
                <div className="flex gap-2 flex-wrap">
                    {
                        load && data.technologies_used != null ?
                            data.technologies_used.map((i, k) => {
                                return <div key={k} className="bg-blue-800 p-1 pl-3 pr-3 rounded-xl text-xs lg:text-sn">
                                    #{i}
                                </div>
                            })
                            :
                            null
                    }
                </div>
            </div>
        </div>
        <div className="backgroundPers rounded-2xl lg:p-10 grid grid-cols-1 lg:grid-cols-3 mt-10">
            <div className="backgroundPers rounded-2xl p-3 w-full  relative overflow-hidden">
                <img src="/assets/image/icon2.png" alt="" srcSet="" className="absolute top-[-15px] right-5" />
                <ComposantWork title="year" value={load ? data.date ? data.date : 2024 : "Loading"} />
                <ComposantWork title="client" value="Ispm" />
                <ComposantWork title="service" value="Web" />
                <ComposantWork title="year" value="2024" />
            </div>
            <div className="p-6 col-span-2">
                <div className="uppercase text-2xl lg:text-3xl pb-5 text-orange-600 font-semibold">
                    About
                </div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto itaque soluta aliquam blanditiis natus aperiam optio dicta fuga error obcaecati inventore sequi, porro dolorem assumenda, labore placeat. Saepe, esse?
            </div>
        </div>

        <div className="backgroundPers rounded-2xl p-6 lg:p-10 mt-10 grid lg:grid-cols-2 gap-7">
            <div>
                <div className="uppercase text-2xl lg:text-3xl pb-5 text-blue-600 font-semibold">
                    comment
                </div>
                <input type="text" name="" id="" className="w-full p-3 rounded-lg  mt-2 mb-2" placeholder="Votre nom" />
                <input type="email" name="" id="" className="w-full p-3 rounded-lg mt-2 mb-2" placeholder="exemple@gmail.com" />
                <textarea name="" className="w-full mt-2 mb-2 p-3 h-[150px] rounded-lg" id="" placeholder="Message ..."></textarea>
                <button type="button" className="w-full p-3 flex justify-center gap-5 border-red-50">
                    <BsSendArrowUp className="font-bold text-lg" />
                    <div className="capitalize">
                        send
                    </div>
                </button>
            </div>
            <div className="h-[400px] overflow-y-auto relative">
                {
                    comment.length > 0 ?
                        comment.map((item, key) => {
                            return <CommentCard name={item.username} comment={item.content_comment} email={item.email_user} key={key} />
                        })
                        :
                        <div>
                            soyez le premier a commentez
                        </div>
                }
            </div>
        </div>
    </div>
}
