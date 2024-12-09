export function SkillsComponent(props)
{
    return <div className=" rounded-2xl block w-ful p-4">
        {props.icone}
        <div className="capitalize text-center text-gray-400 pt-2 pb-1">
            {props.title}
        </div>
    </div>
}