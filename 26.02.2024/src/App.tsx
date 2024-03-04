
import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routes} from "./Helpers/routing.tsx";
import Footer from "./components/Footer";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
function App() {
    const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
  )
}

export default App
