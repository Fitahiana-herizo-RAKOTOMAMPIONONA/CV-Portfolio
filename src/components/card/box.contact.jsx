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
                        <a href={`mailto:${props.email1}`}>{props.email1}</a>
                    </div>
                    <div className="text-sm">
                        <a href={`mailto:${props.email2}`}>{props.email2}</a>
                    </div>
                </>
                : props.contact1 ? <>
                        <div className="text-sm">
                            <a href={`tel:+${props.contact1}`}>{props.contact1}</a>
                        </div>
                        <div className="text-sm">
                            <a href={`tel:+${props.contact2}`}>{props.contact2}</a>
                        </div>
                    </> :
                    null
            }
        </div>
    </div>
}