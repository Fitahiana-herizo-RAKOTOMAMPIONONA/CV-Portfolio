import { BiHeart, BiLike, BiRightArrowAlt, BiShareAlt } from "react-icons/bi";
import { GiLoveHowl } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function CardBlogDetail(props) {

    return (
        <div className="mt-8 mb-8 relative">
            <div className="w-full">
                <img
                    src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
                    alt={props.data.title}
                    className="w-full"
                />
            </div>
            <div className="text-blue-800 mt-3 mb-3 sm:mt-5 sm:mb-4 sm:p-2 flex gap-3 items-center">
                {props.data ? new Date(props.data.created_at).toLocaleDateString() : 'Loading...'} 
                <BiHeart className="text-red-700 text-2xl"/> <span className="text-gray-300">{props.data.public_reactions_count}</span>
                <BiShareAlt className="text-white text-2xl"/> <span className="text-gray-300">{props.data.public_reactions_count}</span>
            </div>
            <div className="uppercase font-semibold text-lg lg:text-2xl">
                {props.data.title}
            </div>
            <div className="text-sm lg:text-xl">
                {props.data.description}
            </div>
            <div className="mt-4 text-gray-500 text-sm">
                <div className="flex justify-between">
                    <div className="text-blue-600">
                        Author: <Link to={`/profile/${props.data.user.username}`} className="underline">{props.data.user.username}</Link>
                    </div>
                    <div>{props.data ? props.data.readable_publish_date : 'Loading...'}</div>
                </div>
                <div className="mt-2">
                    <span className="font-bold">Views: </span>{props.data ? props.data.page_views_count : 'Loading...'}
                </div>
                <div className="mt-2">
                    <span className="font-bold">Reactions: </span>{props.data ? props.data.public_reactions_count : 'Loading...'}
                </div>
                <div className="mt-2">
                    <span className="font-bold">Comments: </span>{props.data ? props.data.comments_count : 'Loading...'}
                </div>
            </div>
{/* 
            <Link to={`/blog/${props.data.id}`}>
                <div className="backgroundPers pl-5 pr-7 pt-2 pb-2 flex justify-center w-[200px] rounded-full">
                    <span>read more</span>
                    <BiRightArrowAlt className="text-2xl" />
                </div>
            </Link> */}
        </div>
    );
}
