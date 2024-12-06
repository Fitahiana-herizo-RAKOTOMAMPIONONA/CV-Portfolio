export default function CardAccueil(props){
    return <div className="bg-slate-300 w-[100%] mt-3 h-[auto] p-5 pt-10  pb-10 rounded-2xl sm:w-[50%] bg-black md: lg:">
        <div className="w-[200px] m-auto  sm: md: lg:">
            <img src={props.image} alt="" srcSet="" className="w-[100%] h-[180px] object-center rounded-tl-lg rounded-br object-cover"/>
        </div>
        <div className="text-sm p-2 relative">
            <div>{props.description}</div>
            <div className=" font-bold text-lg">{props.title}</div>
            <div>
                {props.message}
            </div>
            <div className=" absolute right-2">
                --
            </div>
        </div>
    </div>
}