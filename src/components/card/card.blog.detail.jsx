// import { Link } from "react-router-dom";
// import { LegendeDateAction } from "../box/box.blog.component";

// export default function CardBlogDetail(props) {

//     return (
//         <div className="mt-8 mb-8 relative">
//             <div className="w-full">
//                 <img
//                     src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
//                     alt={props.data.title}
//                     className="w-full"
//                 />
//             </div>
//             <LegendeDateAction data={props.data}/>
//             <div className="uppercase font-semibold text-lg lg:text-2xl">
//                 {props.data.title}
//             </div>
//             <div className="text-sm lg:text-xl">
//                 {props.data.description}
//             </div>
//             <div className="mt-4 text-gray-500 text-sm">
//                 <div className="flex justify-between">
//                     <div className="text-blue-600">
//                         Author: <Link to={`/profile/${props.data.user.username}`} className="">{props.data.user.username}</Link>
//                     </div>
//                     <div>{props.data ? props.data.readable_publish_date : 'Loading...'}</div>
//                 </div>
//                 <div className="mt-2">
//                     <span className="font-bold">Views: </span>{props.data ? props.data.page_views_count : 'Loading...'}
//                 </div>
//                 <div className="mt-2">
//                     <span className="font-bold">Reactions: </span>{props.data ? props.data.public_reactions_count : 'Loading...'}
//                 </div>
//                 <div className="mt-2">
//                     <span className="font-bold">Comments: </span>{props.data ? props.data.comments_count : 'Loading...'}
//                 </div>
//             </div>
//         </div>
//     );
// }


// import { Link } from "react-router-dom";
// import { LegendeDateAction } from "../box/box.blog.component";

// export default function CardBlogDetail(props) {
//     return (
//         <div className="mt-8 mb-8 bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 ease-in-out hover:scale-105">
//             {/* Image Section */}
//             <div className="w-full h-72 relative">
//                 <img
//                     src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
//                     alt={props.data.title}
//                     className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
//                 />
//             </div>

//             {/* Content Section */}
//             <div className="px-6 py-6 space-y-4">
//                 <LegendeDateAction data={props.data} />
                
//                 {/* Title */}
//                 <div className="text-3xl font-semibold text-gray-900">
//                     {props.data.title}
//                 </div>

//                 {/* Description */}
//                 <div className="text-lg text-gray-700">
//                     {props.data.description}
//                 </div>

//                 {/* Information Section */}
//                 <div className="mt-4 text-gray-500 text-sm space-y-3">
//                     <div className="flex justify-between text-sm text-gray-600">
//                         <div className="text-blue-600">
//                             Author: 
//                             <Link to={`/profile/${props.data.user.username}`} className="hover:underline">
//                                 {props.data.user.username}
//                             </Link>
//                         </div>
//                         <div>{props.data.readable_publish_date || 'Loading...'}</div>
//                     </div>

//                     <div>
//                         <span className="font-semibold text-gray-800">Views: </span>
//                         {props.data.page_views_count || 'Loading...'}
//                     </div>
//                     <div>
//                         <span className="font-semibold text-gray-800">Reactions: </span>
//                         {props.data.public_reactions_count || 'Loading...'}
//                     </div>
//                     <div>
//                         <span className="font-semibold text-gray-800">Comments: </span>
//                         {props.data.comments_count || 'Loading...'}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// import { Link } from "react-router-dom";
// import { BiTime, BiUser, BiComment, BiLike } from "react-icons/bi";
// import { LegendeDateAction } from "../box/box.blog.component";

// export default function CardBlogDetail(props) {
//     return (
//         <div className="mt-8 mb-8 bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transform transition-all duration-300 ease-in-out">
//             {/* Image Section */}
//             <div className="w-full h-72 relative">
//                 <img
//                     src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
//                     alt={props.data.title}
//                     className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
//                 />
//             </div>

//             {/* Content Section */}
//             <div className="px-8 py-6 space-y-6">
//                 <LegendeDateAction data={props.data} />
                
//                 {/* Title */}
//                 <div className="text-4xl font-bold text-gray-900">
//                     {props.data.title}
//                 </div>

//                 {/* Description */}
//                 <div className="text-lg text-gray-700">
//                     {props.data.description}
//                 </div>

//                 {/* Author and Date */}
//                 <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
//                     <div className="flex items-center space-x-2">
//                         <BiUser className="text-blue-600 text-lg" />
//                         <Link to={`/profile/${props.data.user.username}`} className="hover:underline">
//                             {props.data.user.username}
//                         </Link>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiTime className="text-gray-600 text-lg" />
//                         <span>{props.data.readable_publish_date || 'Loading...'}</span>
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-6 grid grid-cols-2 gap-x-8 text-gray-600 text-sm">
//                     <div className="flex items-center space-x-2">
//                         <BiLike className="text-xl text-indigo-600" />
//                         <span>{props.data.public_reactions_count || 'Loading...'}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiComment className="text-xl text-green-600" />
//                         <span>{props.data.comments_count || 'Loading...'}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiTime className="text-xl text-yellow-500" />
//                         <span>{props.data.page_views_count || 'Loading...'}</span>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }



// import { Link } from "react-router-dom";
// import { BiTime, BiUser, BiComment, BiLike } from "react-icons/bi";

// export default function CardBlogDetail(props) {
//     return (
//         <div className="mt-8 mb-8 bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transform transition-all duration-300 ease-in-out">
//             {/* Image Section */}
//             <div className="w-full h-72 relative">
//                 <img
//                     src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
//                     alt={props.data.title}
//                     className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
//                 />
//             </div>

//             {/* Content Section */}
//             <div className="px-8 py-6 space-y-6">
//                 {/* Title and Link */}
//                 <div className="text-4xl font-bold text-gray-900">
//                     <Link to={props.data.url} className="hover:underline">
//                         {props.data.title}
//                     </Link>
//                 </div>

//                 {/* Description */}
//                 <div className="text-lg text-gray-700">
//                     {props.data.description}
//                 </div>

//                 {/* Author and Date */}
//                 <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
//                     <div className="flex items-center space-x-2">
//                         <BiUser className="text-blue-600 text-lg" />
//                         <Link to={`/profile/${props.data.user.username}`} className="hover:underline">
//                             {props.data.user.username}
//                         </Link>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiTime className="text-gray-600 text-lg" />
//                         <span>{props.data.readable_publish_date || 'Loading...'}</span>
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-6 grid grid-cols-2 gap-x-8 text-gray-600 text-sm">
//                     <div className="flex items-center space-x-2">
//                         <BiLike className="text-xl text-indigo-600" />
//                         <span>{props.data.public_reactions_count || 'Loading...'}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiComment className="text-xl text-green-600" />
//                         <span>{props.data.comments_count || 'Loading...'}</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <BiTime className="text-xl text-yellow-500" />
//                         <span>{props.data.page_views_count || 'Loading...'}</span>
//                     </div>
//                 </div>

//                 {/* Tags Section */}
//                 <div className="mt-6 flex flex-wrap gap-2">
//                     {props.data.tags && props.data.tags.map((tag, index) => (
//                         <span key={index} className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }



import { Link } from "react-router-dom";
import { BiTime, BiUser, BiComment, BiLike } from "react-icons/bi";

export default function CardBlogDetail(props) {
    return (
        <div className="overflow-hidden group">
            {/* Image Section */}
            <div className="w-full h-72 relative">
                <img
                    src={props.data.cover_image || 'https://via.placeholder.com/600x400'}
                    alt={props.data.title}
                    className="w-full h-full object-cover  transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            {/* Content Section */}
            <div className="py-6 space-y-6">
                {/* Title and Link */}
                <div className="text-4xl font-semibold text-gray-100 hover:text-indigo-600">
                    <Link to={props.data.url} className="hover:underline text-xl lg:text-3xl">
                        {props.data.title}
                    </Link>
                </div>

                {/* Description */}
                <div className="text-lg text-gray-700">
                    {props.data.description}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                    <div className="flex items-center space-x-2">
                        <BiUser className="text-indigo-500 text-lg" />
                        <Link to={`/profile/${props.data.user.username}`} className="hover:underline">
                            {props.data.user.username}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiTime className="text-gray-500 text-lg" />
                        <span>{props.data.readable_publish_date || 'Loading...'}</span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-6 grid grid-cols-2 gap-x-8 text-gray-600 text-sm">
                    <div className="flex items-center space-x-2">
                        <BiLike className="text-xl text-indigo-600" />
                        <span>{props.data.public_reactions_count || 'Loading...'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiComment className="text-xl text-green-600" />
                        <span>{props.data.comments_count || 'Loading...'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiTime className="text-xl text-yellow-500" />
                        <span>{props.data.page_views_count || 'Loading...'}</span>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="mt-6 flex flex-wrap gap-3">
                    {props.data.tags && props.data.tags.map((tag, index) => (
                        <span key={index} className="bg-indigo-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
