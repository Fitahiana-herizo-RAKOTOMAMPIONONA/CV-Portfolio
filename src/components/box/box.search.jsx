export default function BoxSearch(props) {
    <div className="rounded-full backgroundPers p-3 mt-2 mb-2 pl-8 flex items-center w-full relative">
        <input type="text" name="" id="" className="p-1 border-0 bg-transparent focus:outline-none focus:ring-0" placeholder="Search.." />
        <button className="bg-gray-400 bg-opacity-40 backdrop-blur-xl pt-1 pb-1 pl-4 pr-4 rounded-full text-white focus:outline-none focus:ring-0 absolute right-3">
            {props.title}
        </button>
    </div>
}