import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Pages/Home";
import ListUsers from "./src/Pages/ListUsers";


const router = createBrowserRouter([


{
    path: "/",
    element: <Home />
},

{
    path: "lista-de-usuarios",
    element: <ListUsers />
}

])

export default router