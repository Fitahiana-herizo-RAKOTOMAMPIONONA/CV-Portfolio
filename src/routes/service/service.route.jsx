import { BoxService, Titre } from "../../components/components.export"
import { dataservice } from "../../data/data.service"

export default function Service (){
    return <div>
        <div className="bg-black rounded-2xl p-6">
            {
                dataservice.map((item,key)=>
                {
                    return <BoxService key={key} icone={item.icone} title={item.title} />
                })
            }
        </div>
        <Titre title="service offering"/>
    </div>
}