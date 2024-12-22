import { Link } from "react-router-dom";
import { LegendeDateAction } from "../box/box.blog.component";

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
            <LegendeDateAction data={props.data}/>
            <div className="uppercase font-semibold text-lg lg:text-2xl">
                {props.data.title}
            </div>
            <div className="text-sm lg:text-xl">
                {props.data.description}
            </div>
            <div className="mt-4 text-gray-500 text-sm">
                <div className="flex justify-between">
                    <div className="text-blue-600">
                        Author: <Link to={`/profile/${props.data.user.username}`} className="">{props.data.user.username}</Link>
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
        </div>
    );
}
