import {Link} from "react-router-dom";
import {routes} from "../../Helpers/routing.tsx";

function Navbar() {
    return (
        <nav>
            <ul>
                {routes.filter(route => !route.hideInMenu).map((route)=> (
                    <li key={route.path}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar