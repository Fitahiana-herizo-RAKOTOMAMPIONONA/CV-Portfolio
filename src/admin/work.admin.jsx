import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Titre } from "../components/components.export.jsx"
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const WorkAdmin = () => {
    const [data, setData] = useState([]);
    const fetchdata = async () => {
        let result;
        try {
            const url = import.meta.env.VITE_API_URL + "/work/all"
            result = await axios.get(url)
            setData(result.data.data);
        } catch (error) {
            console.log(error);
        }

    }
    const handleDelete = async (e) =>{
        const url = import.meta.env.VITE_API_URL +  "/work/delete/" + e
        console.log(url);
        try {
            const result = await axios.delete(url)
        } catch (error) {
            console.log(error);
            throw error
        }
    }


    useEffect(() => {
        fetchdata();
    }, [data])
    return (
        <div className="w-full m-auto p-5">
            <Titre title="work" className="text-6xl"/>
            <div className="grid grid-cols-5 font-bold capitalize italic text-blue-700 text-end backgroundPers p-4">
                <div>
                    Id
                </div>
                <div>
                    title
                </div>
                <div>
                    decription
                </div>
                <div>
                    date
                </div>
                <div>
                    Action
                </div>
            </div>
            {
                data.map((item, key) => {
                    return <div key={key} className="grid grid-cols-5 hover:bg-slate-700 text-end p-4">
                        <div className="">
                            {item.id_work}
                        </div><div>
                            {item.title_work}
                        </div><div>
                            {item.description_work}
                        </div>
                        <div>
                            {item.date || "indisponible"}
                        </div>
                        <div className="flex justify-end">
                            <button onClick={() => {handleDelete(item.id_work);}}>
                                <MdDelete className="text-2xl text-red-500" />
                            </button>
                            <Link to={`/admin/work/edit/${item.id_work}`}>
                                <BiEdit className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default WorkAdmin;
