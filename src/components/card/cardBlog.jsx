import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LegendeDateAction } from "../box/box.blog.component";

export default function CardBlog(props) {
  const defaultImage =
    "https://via.placeholder.com/800x400/cccccc/000000?text=Login+Image";

  return (
    <div className="mt-8 mb-8 backgroundPers rounded-xl overflow-hidden group transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="w-full h-72 relative">
        <img
          src={props.data.cover_image || defaultImage}
          alt="Cover"
          className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>

      <div className="px-6 py-6 space-y-4">
        <LegendeDateAction data={props.data} />

        <div className="text-2xl font-semibold text-gray-100">
          {props.data.title}
        </div>

        <p className="text-gray-500 text-sm">{props.data.description}</p>

        <Link
          to={`/blog/${props.data.id}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold text-sm rounded-full hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span>Read more</span>
          <BiRightArrowAlt className="ml-2 text-xl" />
        </Link>
      </div>
    </div>
  );
}
