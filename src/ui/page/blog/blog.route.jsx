import { useEffect, useState } from "react";
import {
  BoxSearch,
  CardBlog,
} from "../../../shared/components/components.export";
import { Link } from "react-router-dom";
import axios from "axios";
import { CardSearchResult } from "../../../shared/components/box/box.blog.component";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
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
  }, []);

  const filteredData = data.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="lg:mt-[50px] cardG">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px]">
        <div className="col-span-2">
          {filteredData.length < 1
            ? Array.from({ length: 4 }).map((_, index) => {
                return (
                  <div key={index} className="mt-8 mb-8 relative animate-pulse">
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
        <CardSearchResult
          filteredData={filteredData}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}
