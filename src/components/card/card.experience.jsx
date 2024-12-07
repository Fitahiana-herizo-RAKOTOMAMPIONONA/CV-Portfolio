export default function CardExperience(props) {
    return (
        <div className="w-full bg-black p-6 rounded-2xl">
            <div className="text-left text-xl font-bold capitalize">
                {
                    props.title
                }
            </div>
            { 
                props.data.map((item,key)=>{
                    return <div key={key} className="mt-4">
                        <div className="text-lg font-semibold text-blue-800">
                            {
                                item.title
                            }
                        </div>
                        <div className="left">
                            {
                                item.poste
                            }
                        </div>
                        <div className="left text-sm text-gray-500">
                            {
                                item.date
                            }
                        </div>
                    </div>
                })
            }
        </div>
    )
}