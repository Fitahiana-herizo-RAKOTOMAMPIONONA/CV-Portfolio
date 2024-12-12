import { useEffect, useState } from "react";
import { BoxSearch, CardBlog, Titre } from "../../components/components.export";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blog() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const url = import.meta.env.VITE_API_URL_API
            const result = await axios.get(url);
            setData(result.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="lg:mt-[150px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px]">
                <div className="col-span-2">
                    {filteredData.length <= 1
                        ? Array.from({ length: 4 }).map((_, index) => {
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
                        : filteredData.map((item, key) => {
                              return <CardBlog key={key} data={item} />;
                          })}
                </div>
                <div className="col-span-1 sm:w-full">
                    <div className="rounded-full backgroundPers p-3 mt-2 mb-2 pl-8 flex items-center w-full relative">
                        <input
                            type="text"
                            className="p-1 border-0 bg-transparent focus:outline-none focus:ring-0"
                            placeholder="Search.."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="bg-gray-400 bg-opacity-40 backdrop-blur-xl pt-1 pb-1 pl-4 pr-4 rounded-full text-white focus:outline-none focus:ring-0 absolute right-3">
                            search
                        </button>
                    </div>
                    <div className="rounded-[30px] backgroundPers p-10 mt-5">
                        <div className="text-xl uppercase mt-3 mb-5 text-gray-500 font-semibold">
                            Recent Posts
                        </div>
                        <div>
                            {filteredData.length <= 1
                            ? Array.from({ length: 4 }).map((_, index) => {
                                return (<div key={index}>
                                        <div className="text-blue-800 sm:mt-4 sm:mb-4 sm:p-2 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                                        <div className="font-semibold text-lg lg:text-2xl h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3"></div>
                                </div>
                                );
                            })
                            : filteredData.map((item, key) => (
                                <Link
                                    to={`/about`}
                                    className="font-normal pt-6 pb-6 block text-gray-300"
                                    key={key}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}