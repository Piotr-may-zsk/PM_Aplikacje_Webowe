
import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routes} from "./Helpers/routing.tsx";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            {routes.map((route)=> (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element} />
            ))}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
