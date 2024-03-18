import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {routes} from "./Helpers/routing.tsx";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                {routes.map((route)=> (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element} />
                ))}
            </Routes>
        </Router>
    )
}