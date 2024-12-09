export function BoxWork(props)
{
    return <div className="p-5 w-full bg-black max-w-[500px] rounded-3xl relative">
        <img src="./assets/image/gfonts.png" alt="" className="w-full bg-slate-50 rounded-2xl"/>
        <div className="uppercase text-gray-400 pt-4 pb-4-">
            {props.type}
        </div>
        <div className="text-2xl capitalize font-semibold">
            {props.title}
        </div>
        <div className="absolute right-4 bottom-4 text-gray-500">
            <img src={props.image} alt="" srcSet="" />
        </div>
    </div>
}