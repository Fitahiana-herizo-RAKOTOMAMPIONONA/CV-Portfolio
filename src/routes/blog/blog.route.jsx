import { useEffect, useState } from "react"
import { Titre } from "../../components/components.export"
import { Link } from "react-router-dom"

export default function Blog(props) {
    const [data , setData] = useState(
        [
            {
                link  : "Mark zuckergber vient de ...",
            },{
                link  : "update tailwindcss",
            },{
                link  : "metyyy",
            },{
                link  : "metyyy",
            },
        ]
    )

    useEffect(() => {

    }, [])
    return <div className="lg:mt-[150px]">
        <div className="text-gray-500 text-sm">
            HOME - consulted admiting
        </div>
        <Titre title="HOME - consulted admiting" className={"justify-start"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <div className="col-span-2">
                <div>
                    <div className="w-full">
                        <img src="/assets/image/projet-1.jpg" alt="" srcSet="" className="w-full" />
                    </div>
                    <div className="text-blue-800 mt-4 mb-4 p-2">
                        June 9, 23 - consulted admiting
                    </div>
                    <div className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores repellendus amet, itaque harum perferendis accusamus ad sit! Praesentium, recusandae eius! Sunt voluptatum perferendis earum quo est deleniti odio doloribus.
                    </div>
                    <div className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores repellendus amet, itaque harum perferendis accusamus ad sit! Praesentium, recusandae eius! Sunt voluptatum perferendis earum quo est deleniti odio doloribus.
                    </div>
                    <div className="flex gap-3">
                        <div className="backgroundPers p-4 rounded-xl w-auto">
                            Sass
                        </div>
                        <div className="backgroundPers p-4 rounded-xl w-auto">
                            Sass
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="rounded-2xl backgroundPers p-5">
                    <div className="capitalize mt-2 mb-2">search</div>
                    <div className="w-full">
                        <input type="text" name="" id="" className="p-2" placeholder="search ..."/>
                        <button className="bg-blue-800 p-2 rounded-none">
                            search
                        </button>
                    </div>
                </div>
                <div className="rounded-2xl backgroundPers p-5 mt-5">
                    <div className="text-2xl uppercase mt-2 mb-2">Recent POst</div>
                    <div>
                        {
                            data.map((item,key)=>{
                                console.log(key); 
                                return <div key={key} className="pl-5">
                                    <Link to={"/about"}>
                                        {item.link}
                                    </Link>
                                    <hr className="mt-2 mb-2"/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    </div>
}