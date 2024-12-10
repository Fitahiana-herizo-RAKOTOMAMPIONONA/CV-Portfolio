export default function Titre2(props)
{
    return <div className={`text-left text-xl font-bold capitalize ${props.className}`}>
        {
            props.title
        }
    </div>
}