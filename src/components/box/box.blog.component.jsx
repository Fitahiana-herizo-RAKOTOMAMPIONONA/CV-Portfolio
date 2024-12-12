import { BiHeart, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const LegendeDateAction = (props) => {
    return <div className="text-blue-800 mt-3 mb-3 sm:mt-5 sm:mb-4 sm:p-2 flex gap-3 items-center">
        {props.data ? new Date(props.data.created_at).toLocaleDateString() : 'Loading...'}
        <BiHeart className="text-red-700 text-2xl" /> <span className="text-gray-300">{props.data.public_reactions_count}</span>
        <BiShareAlt className="text-white text-2xl" /> <span className="text-gray-300">{props.data.public_reactions_count}</span>
    </div>
}
const CardSearchResult = (props) => {
    const { search, setSearch, filteredData } = props;

    return (
        <div className="col-span-1 w-full sm:w-full">
            <div className="rounded-full backgroundPers p-3 mt-2 mb-2 pl-8 flex items-center w-full relative">
                <input
                    type="text"
                    className="p-1 border-0 bg-transparent focus:outline-none focus:ring-0"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className="bg-gray-400 bg-opacity-40 backdrop-blur-xl pt-1 pb-1 pl-4 pr-4 rounded-full text-white focus:outline-none focus:ring-0 absolute right-3"
                >
                    Search
                </button>
            </div>
            <div className="rounded-[30px] backgroundPers p-10 mt-5">
                <div className="text-xl uppercase mt-3 mb-5 text-gray-500 font-semibold">
                    Recent Posts
                </div>
                <div>
                    {
                        filteredData.length === 0 ? (
                            <p className="text-gray-500 text-sm">Aucun article trouvé.</p>
                        ) : (
                            filteredData.slice(0, 5).map((article, index) => (
                                <Link
                                    to={`/blog/${article.id}`} // Navigue vers l'article correspondant
                                    className="font-normal pt-6 pb-6 block text-gray-300"
                                    key={index}
                                >
                                    {article.title}
                                </Link>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export { LegendeDateAction, CardSearchResult }