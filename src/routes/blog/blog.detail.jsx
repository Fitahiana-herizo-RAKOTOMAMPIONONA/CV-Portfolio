import { useEffect, useState } from "react";
import { CardBlogDetail, Navigation, Titre } from "../../components/components.export";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardSearchResult } from "../../components/box/box.blog.component";
import { slideINtop } from "../../animation/animation";

export default function BlogDetail() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [dataDetail, setDataDetail] = useState(null);
    const { id_blog } = useParams();

    const fetchData = async () => {
        try {
            const url = import.meta.env.VITE_API_URL_API;
            const result = await axios.get(`${url}/${id_blog}`);
            setDataDetail(result.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    const fetchDataAll = async () => {
        try {
            const url = import.meta.env.VITE_API_URL_API;
            const result = await axios.get(url);
            setData(result.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDataAll();
    }, [id_blog]);

    useEffect(()=>{
        slideINtop(".cardG")
    },[])

    const filteredData = data.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="lg:mt-[100px] cardG">
            <Navigation nav1="blog" nav2={dataDetail ? dataDetail.title : 'Loading...'} className="text-gray-500 text-sm" />
            <Titre title={dataDetail ? dataDetail.title : 'Loading...'} className={"justify-start"} />
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[60px] w-full">
                <div className="col-span-2">
                    {dataDetail ? (
                        <CardBlogDetail data={dataDetail} />
                    ) : (
                        <div className="mt-8 mb-8 relative animate-pulse">
                            <div className="w-full bg-gray-300 h-48 rounded-lg sm:w-full dark:bg-gray-700"></div>
                            <div className="text-blue-800 sm:mt-4 sm:mb-4 sm:p-2 h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                            <div className="uppercase font-semibold text-lg lg:text-2xl h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3"></div>
                            <div className="mt-4 w-[200px] h-10 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                        </div>
                    )}
                </div>
                <CardSearchResult filteredData={filteredData} search={search} setSearch={setSearch}/>
        </div>
        </div >
    );
}
