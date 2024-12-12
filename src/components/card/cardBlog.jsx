import {BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom"
export default function CardBlog(props) {
    
    return <div className=" mt-8 mb-8 relative">
        <div className="w-full">
            <img src={props.data.cover_image} alt="" srcSet="" className="w-full" />
        </div>
        <div className="text-blue-800 sm:mt-4 sm:mb-4 sm:p-2">
            June 9, 23 - {props.data.title}
        </div>
        <div className="uppercase font-semibold text-lg lg:text-2xl">
            {props.data.title}
        </div>

        <Link to={`/blog/${props.data.id}`}>
            <div className="backgroundPers pl-5 pr-7 pt-2 pb-2 flex justify-center w-[200px] rounded-full">
                <span>read more</span>
                <BiRightArrowAlt className="text-2xl"/>
            </div>
        </Link>
    </div>
}