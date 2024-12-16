import Titre2 from "../titre/titre.text2"

export default function CardExperience(props) {
    return (
        <div className={`w-full backgroundPers p-6 rounded-2xl ${props.className}`}>
            <Titre2 title={props.title} className="capitalize" />
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