import { Link } from "react-router-dom";

export function Navigation(props){
    return <div className={`uppercase text-sm ${props.className}`}>
        <Link to={`/${props.nav1}`}>
            {
                props.nav1
            } 
        </Link>
        {"  > "}
        <span className="lowercase">
            {
                props.nav2
            } 
        </span>
    </div>
}