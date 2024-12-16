export default function Titre2(props)
{
    return <div className={`text-left text-2xl font-bold  ${props.className}`}>
        {
            props.title
        }
    </div>
}