import { Link } from "react-router-dom";

export function Navigation(props){
    return <div className="uppercase text-sm">
        <Link to={`/${props.nav1}`}>
            {
                props.nav1
            } 
        </Link>
        {"  > "}
        <span>
            {
                props.nav2
            } 
        </span>
    </div>
}