import {Link} from "react-router-dom";
import {routes} from "../../Helpers/routing.tsx";
import "./index.css"
export default function Navbar() {
    return (
        <nav>
                <ul className="navbar-nav">
                    {routes.map((route) => (
                        <li className={"nav-item"} key={route.path}>
                            <Link className="nav-link" to={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}