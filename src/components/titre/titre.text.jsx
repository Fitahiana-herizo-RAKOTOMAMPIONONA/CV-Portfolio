export function Titre(props)
{
    return <div className={`uppercase text-2xl font-semibold text-center p-5 flex justify-center gap-3 ${props.className}`}>
        <img src="/assets/image/star-2.png" alt="" srcSet="" className="w-6 h-6"/>
        {props.title}
        <img src="/assets/image/star-2.png" alt="" srcSet="" className="w-6 h-6"/>
    </div>
}