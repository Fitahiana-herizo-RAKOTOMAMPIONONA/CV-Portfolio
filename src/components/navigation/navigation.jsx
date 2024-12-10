export function Navigation(props){
    return <div className="uppercase text-sm">
        <a href={`/${props.nav1}`}>
            {
                props.nav1
            } 
        </a>
        {"  > "}
        <span>
            {
                props.nav2
            } 
        </span>
    </div>
}