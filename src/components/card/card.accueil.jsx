export default function CardAccueil(props) {
    return (
        <a href={props.to} className="block">
            <div className="bg-black text-white w-full h-auto p-5 pt-10 pb-10 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="w-48 m-auto">
                    {
                        props.image ?
                            <img
                                src={props.image}
                                alt={props.title}
                                className="w-full max-h-48 object-center rounded-tl-lg rounded-br-lg object-cover"
                            /> :
                            props.icone ?
                                <props.icone /> :
                                null
                    }
                </div>
                <div className="text-sm p-2 relative">
                    <div className="text-gray-400">{props.description}</div>
                    <div className="font-bold text-lg mt-2">{props.title}</div>
                    <div className="mt-1">
                        {props.message}
                    </div>
                    <div className="absolute right-2 bottom text-gray-500">
                        <img src="./assets/image/icon.svg" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </a>
    );
}
