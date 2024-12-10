export function BoxWork(props)
{
    return <a href={`/work/${props.to}`}>
        <div className={`backgroundPers p-5 w-full bg-black max-w-[450px] rounded-3xl m-auto relative ${props.className}`}>
            <img src="./assets/image/gfonts.png" alt="" className="w-full max-h-[200px] bg-slate-50 rounded-2xl"/>
            <div className="uppercase text-gray-400 pt-4 pb-4 text-sm sm:text-lg">
                {props.type}
            </div>
            <div className="text-lg capitalize font-bold lg:text-2xl">
                {props.title}
            </div>
            <div className="absolute right-4 bottom-4 text-gray-500">
                <img src={props.image} alt="" srcSet="" />
            </div>
        </div>
    </a>
}