export function ComposantWork(props) {
    return <div className="p-4 pl-10">
        <div className="text-gray-400 font-semibold pb-2 capitalize">
            {props.title}
        </div>
        <div className="text-lg">
            {props.value}
        </div>
    </div>
}
