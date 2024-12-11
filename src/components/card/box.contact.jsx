import { Link } from "react-router-dom"

export default function BoxContact(props)
{
    return <div className="flex gap-4 p-3">
        <div className="h-[60px] w-[60px] bg-black pt-4  rounded-lg">
            {props.icone}
        </div>
        <div className="">
            <div className="text-gray-400 text-sm uppercase">{props.title}</div>
            {
                props.email1 ? <>
                    <div className="text-sm">
                        <Link to={`mailto:${props.email1}`}>{props.email1}</Link>
                    </div>
                    <div className="text-sm">
                        <Link to={`mailto:${props.email2}`}>{props.email2}</Link>
                    </div>
                </>
                : props.contact1 ? <>
                        <div className="text-sm">
                            <Link to={`tel:${props.contact1}`}>{props.contact1}</Link>
                        </div>
                        <div className="text-sm">
                            <Link to={`tel:${props.contact2}`}>{props.contact2}</Link>
                        </div>
                    </> :
                    null
            }
        </div>
    </div>
}