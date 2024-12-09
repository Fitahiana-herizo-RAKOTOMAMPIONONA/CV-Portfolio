export function CredentialsComponent(props){
    return  <div className="p-6">
        <div className="uppercase font-semibold text-xl pt-4 pb-4">
            {props.title}
        </div>
            {
                props.data.map((item,key)=>{
                    return <div key={key} className="mt-4">
                        <div className="text-lg font-semibold text-blue-800">
                            {
                                item.title
                            }
                        </div>
                        <div className="left text-sm text-gray-500">
                            {
                                item.date
                            }
                        </div>
                        <div className="left">
                            {
                                item.poste
                            }
                        </div>
                        <div className="text-sm pt-4 pb-3">
                            {item.description}
                        </div>
                    </div>
                })
            }
    </div>
}