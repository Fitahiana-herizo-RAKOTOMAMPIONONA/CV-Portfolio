import { useEffect } from "react"
import { slideINtopSlow } from "../../animation/animation"

export function CredentialsComponent(props){
    useEffect(()=>{
        slideINtopSlow("#anim1")
        slideINtopSlow("#anim2")
        slideINtopSlow("#anim3")
    },[])
    return  <div className={`"p-6 ${props.className}`}>
        <div className="uppercase font-semibold text-xl pt-4 pb-4">
            {props.title}
        </div>
            {
                props.data.map((item,key)=>{
                    return <div key={key} className={`mt-4`} id={`anim${key+1}`}>
                        <div className="left text-sm text-gray-500">
                            {
                                item.date
                            }
                        </div>
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
                        <div className="text-sm pt-4 pb-3 text-clip">
                            {item.description}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {
                                item.tags?
                                    item.tags.map((i,k)=>{
                                        return <div key={k} className="bg-blue-800 p-1 pl-3 pr-3 rounded-xl text-xs lg:text-sn">
                                            #{i}
                                        </div>
                                    })
                                    :
                                    null
                            }
                        </div>
                    </div>
                })
            }
    </div>
}