export function CommentCard(props) {
    return <div className="bg-zinc-900 w-full flex pl-3  pr-3 pt-2 pb-2 rounded-xl mt-4 mb-4 items-center">
        {
            props.image ?
            <img src={props.image} alt="" srcSet="" className="rounded-full h-12 w-12 lg:h-16 lg:w-16" />
            :
            <div className="rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-blue-500">
                <div className="absolute z-20 ml-5 mt-3 lg:ml-7 lg:mt-5 font-bold uppercase">
                    {props.email[0]}
                </div>
            </div>

        }
        <div className="pl-4 pr-4">
            <div className="text-blue-600  ">
                {props.name}
            </div>
            <div className="text-gray-500 text-xs lg:text-sm">
                {props.email}
            </div>
            <div className="overflow-clip">
                {props.comment}
            </div>
        </div>
    </div>
}