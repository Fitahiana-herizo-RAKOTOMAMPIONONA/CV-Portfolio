export function BoxService(props)
{
    return <div className="flex gap-3 ml-12 p-3">
        {
            props.icone
        }
        <div className="text-lg uppercase align-text-top">{props.title}</div>
    </div>
}