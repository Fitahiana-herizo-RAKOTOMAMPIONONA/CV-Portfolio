export function Titre(props)
{
    return <div className={`uppercase text-lg font-semibold pt-5 pb-5  flex lg:text-2xl ${props.className}`}>
        <img src="/assets/image/star-2.png" alt="" srcSet="" className="w-6 h-6"/>
        {props.title}
        <img src="/assets/image/star-2.png" alt="" srcSet="" className="w-6 h-6"/>
    </div>
}